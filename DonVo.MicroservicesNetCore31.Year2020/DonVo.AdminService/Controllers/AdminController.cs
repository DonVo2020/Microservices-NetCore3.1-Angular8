using DonVo.AdminDomain.Repositories;
using DonVo.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DonVo.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        readonly IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }

        // POST: api/Admin
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Post([FromBody] Course course)
        {
            if (ModelState.IsValid)
            {
                bool result = await repository.AddCoursesAsync(course);
                if (result)
                {
                    return Created("AddCourse", course);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Admin/5
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Put(int id, [FromBody] Course course)
        {
            if (ModelState.IsValid)
            {
                bool result = await repository.UpdateCourseAsync(course);
                if (result)
                {
                    return Created("UpdatedCourse", course.Id);
                }
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var course = await repository.GetCourseAsync(id);
            if (course == null)
            {
                return NotFound();
            }
            bool result = await repository.DeleteCourseAsync(course);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
        [HttpGet("usersList")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetUsersList()
        {
            return Ok(await repository.GetUsersListAsync());
        }

        [HttpGet("mentorsList")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetMentorsList()
        {
            return Ok(await repository.GetMentorsListAsync());
        }
        [HttpGet("blockunblock/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetBlockUnblock(string id)
        {
            var result = await repository.BlockUserAsync(id);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
        // GET: api/Admin
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetEnrolledCourses()
        {
            return Ok(await repository.GetEnrolledCoursesAsync());
        }
    }
}