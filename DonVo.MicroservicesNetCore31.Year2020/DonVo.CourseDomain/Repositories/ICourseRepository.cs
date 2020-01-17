using DonVo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DonVo.CourseDomain.Repositories
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetCoursesAsync();
        Task<List<Course>> SearchCourseAsync(string criteria);
    }
}
