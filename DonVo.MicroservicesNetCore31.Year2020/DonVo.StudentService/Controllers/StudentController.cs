using DonVo.DTOs;
using DonVo.Models;
using DonVo.StudentDomain.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DonVo.StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        readonly IStudentRepository repository;
        public StudentController(IStudentRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("studentProfile/{email}")]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> StudentProfileDetails(string email)
        {
            var result = await repository.StudentProfileDetailAsync(email);
            return Ok(result);
        }

        [HttpPut("studentProfile/{studentId}")]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> UpdateStudentDetails(string studentId, [FromBody] ProfileDto studentData)
        {
            if (ModelState.IsValid)
            {
                bool result = await repository.UpdateStudentDetailsAsync(studentData, studentId);
                if (result)
                {
                    return Created("UpdatedProfie", null);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpGet("ListOfCourse/{modelEmail}")]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> GetEnrolledCoursesByStudent(string modelEmail)
        {
            var result = await repository.GetEnrolledCoursesByStudentAsync(modelEmail);
            return Ok(result);
        }
        [HttpPost]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> Post([FromBody] EnrolledCourse enrolledCourse)
        {
            if (ModelState.IsValid)
            {

                bool result = await repository.AddEnrolledCoursesAsync(enrolledCourse);
                if (result)
                {
                    return Created("AddCoursesEnrolled", enrolledCourse);
                }
                return BadRequest(new { Message = "You have already Enrolled for This Course." });

                //return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }
        [HttpPut("ChangeEnrolledCourseStatus/{id}/{UserEmail}")]
        [Authorize(Roles = "Student")]
        public async Task<IActionResult> ChangeCourseStatus(int id, string UserEmail, [FromBody] EnrolledCourse enrolledCourse)
        {
            if (ModelState.IsValid && id == enrolledCourse.Id)
            {
                bool result = await repository.ChangeCourseStatusAsync(enrolledCourse, UserEmail);
                if (result)
                {
                    return Created("UpdatedCourse", enrolledCourse.Id);
                }
            }
            return BadRequest(ModelState);
        }
    }
}