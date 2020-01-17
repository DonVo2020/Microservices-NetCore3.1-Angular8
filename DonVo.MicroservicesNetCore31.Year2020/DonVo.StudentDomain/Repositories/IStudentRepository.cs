using DonVo.DTOs;
using DonVo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DonVo.StudentDomain.Repositories
{
    public interface IStudentRepository
    {
        Task<bool> UpdateStudentDetailsAsync(ProfileDto modUser, string studentId);
        Task<UserDto> StudentProfileDetailAsync(string email);
        Task<List<EnrolledCourse>> GetEnrolledCoursesByStudentAsync(string modelEmail);
        Task<bool> AddEnrolledCoursesAsync(EnrolledCourse enrolledCourse);
        Task<bool> ChangeCourseStatusAsync(EnrolledCourse enrolledCourse, string UserEmail);
    }
}
