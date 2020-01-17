using DonVo.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonVo.CourseDomain.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        readonly CourseContext context;
        public CourseRepository(CourseContext context)
        {
            this.context = context;
        }
        public async Task<IEnumerable<Course>> GetCoursesAsync()
        {
            return await context.Courses.ToListAsync();
        }
        public async Task<List<Course>> SearchCourseAsync(string criteria)
        {
            if (int.TryParse(criteria, out int result))
            {
                return await (from c in context.Courses
                        where c.Id == result
                        select c).ToListAsync();
            }

            return await  (from c in context.Courses
                    where c.Name.Contains(criteria)
                    select c).ToListAsync();
        }
    }
}
