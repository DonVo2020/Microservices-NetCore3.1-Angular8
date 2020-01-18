using DonVo.CourseDomain.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MOD.CourseService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        readonly ICourseRepository repository;
        public CourseController(ICourseRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Course
        [HttpGet]
        //[Authorize(Roles = "Admin,Student,Mentor")]
        public async Task<IActionResult> GetCourses()
        {
            return Ok(await repository.GetCoursesAsync());
        }
        [HttpGet("search/{criteria}")]
        public async Task<IActionResult> SearchCourse(string criteria)
        {
            var result = await repository.SearchCourseAsync(criteria);
            return Ok(result);
        }

    }
}