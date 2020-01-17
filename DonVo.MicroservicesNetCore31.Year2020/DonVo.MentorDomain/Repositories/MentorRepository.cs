using DonVo.DTOs;
using DonVo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonVo.MentorDomain.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        readonly MentorContext context;
        public MentorRepository(MentorContext context)
        {
            this.context = context;
        }

        public async Task<bool> ChangeCourseStatusAsync(EnrolledCourse enrolledCourse, string UserEmail)
        {
            try
            {
                if (UserEmail == enrolledCourse.MentorEmail)
                {
                    if (enrolledCourse.Status == "Requested")
                    {
                        enrolledCourse.Status = "Request Accepted";
                    }
                    else if (enrolledCourse.Status == "In Progress")
                    {
                        enrolledCourse.Status = "Completed";
                    }
                    context.EnrolledCourses.Update(enrolledCourse);
                    int result = await context.SaveChangesAsync();
                    if (result > 0)
                    {
                        return true;
                    }
                }
                else if (UserEmail == enrolledCourse.StudentEmail && enrolledCourse.Status == "Request Accepted")
                {
                    enrolledCourse.Status = "In Progress";
                    context.EnrolledCourses.Update(enrolledCourse);
                    int result = await context.SaveChangesAsync();
                    if (result > 0)
                    {
                        return true;
                    }
                }

                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<List<EnrolledCourse>> GetEnrolledCoursesByMentorAsync(string modelEmail)
        {
            var result = from c in context.EnrolledCourses
                         where c.MentorEmail == modelEmail
                         select c;
            return await result.ToListAsync();
        }

        public async Task<UserDto> MentorProfileDetailsAsync(string email)
        {
            var result = from a in context.ModelUsers
                         where a.Email == email
                         select new UserDto
                         {
                             Id = a.Id,
                             Experience = a.Experience,
                             FirstName = a.FirstName,
                             LastName = a.LastName,
                             Skills = a.Skills,
                             Email = a.Email,
                             PhoneNumber = a.PhoneNumber
                         };
            return await result.SingleOrDefaultAsync();
        }

        public async Task<bool> UpdateMentorDetailsAsync(ProfileDto modUser, string mentorId)
        {
            try
            {
                var user = (from a in context.ModelUsers
                            where a.Id == mentorId
                            select a).SingleOrDefault();
                if (user != null)
                {
                    user.Id = modUser.id;
                    user.Email = modUser.Email;
                    user.FirstName = modUser.FirstName;
                    user.LastName = modUser.LastName;
                    user.PhoneNumber = modUser.PhoneNumber;
                    user.Skills = modUser.Skills;
                    user.Experience = modUser.Experience;

                    await context.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
