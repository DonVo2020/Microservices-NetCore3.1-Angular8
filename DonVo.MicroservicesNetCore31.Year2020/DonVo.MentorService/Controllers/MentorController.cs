using DonVo.DTOs;
using DonVo.MentorDomain.Repositories;
using DonVo.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DonVo.MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        readonly IMentorRepository repository;
        public MentorController(IMentorRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet("mentorProfile/{email}")]
        [Authorize(Roles = "Mentor")]
        public async Task<IActionResult> MentorProfileDetails(string email)
        {
            var result = await repository.MentorProfileDetailsAsync(email);
            return Ok(result);
        }

        [HttpPut("mentorProfile/{mentorId}")]
        [Authorize(Roles = "Mentor")]
        public async Task<IActionResult> UpdateMentorDetails(string mentorId, [FromBody] ProfileDto mentorData)
        {
            if (ModelState.IsValid)
            {
                bool result = await repository.UpdateMentorDetailsAsync(mentorData, mentorId);
                if (result)
                {
                    return Created("UpdatedProfie", null);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpGet("ListOfCourseMentor/{modelEmail}")]
        [Authorize(Roles = "Mentor")]
        public async Task<IActionResult> GetEnrolledCoursesByMentor(string modelEmail)
        {
            var result = await repository.GetEnrolledCoursesByMentorAsync(modelEmail);
            return Ok(result);
        }
        [HttpPut("ChangeEnrolledCourseStatus/{id}/{UserEmail}")]
        [Authorize(Roles = "Mentor")]
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