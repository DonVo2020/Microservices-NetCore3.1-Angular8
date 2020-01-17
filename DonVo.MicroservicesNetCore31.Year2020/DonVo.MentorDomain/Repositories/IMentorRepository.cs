using DonVo.DTOs;
using DonVo.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DonVo.MentorDomain.Repositories
{
    public interface IMentorRepository
    {
        Task<UserDto> MentorProfileDetailsAsync(string email);
        Task<List<EnrolledCourse>> GetEnrolledCoursesByMentorAsync(string modelEmail);
        Task<bool> ChangeCourseStatusAsync(EnrolledCourse enrolledCourse, string UserEmail);
        Task<bool> UpdateMentorDetailsAsync(ProfileDto modUser, string mentorId);
    }
}
