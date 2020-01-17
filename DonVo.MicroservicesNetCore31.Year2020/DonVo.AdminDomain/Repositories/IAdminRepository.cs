using DonVo.DTOs;
using DonVo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DonVo.AdminDomain.Repositories
{
    public interface IAdminRepository
    {
        Task<bool> AddCoursesAsync(Course course);
        Task<bool> UpdateCourseAsync(Course course);
        Task<Course> GetCourseAsync(int id);
        Task<bool> DeleteCourseAsync(Course course);
        Task<IEnumerable<UserDto>> GetMentorsListAsync();
        Task<IEnumerable<UserDto>> GetUsersListAsync();
        Task<bool> BlockUserAsync(string id);
        Task<IEnumerable<EnrolledCourse>> GetEnrolledCoursesAsync();
    }
}
