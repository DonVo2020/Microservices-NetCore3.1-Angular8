using DonVo.DTOs;
using DonVo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonVo.StudentDomain.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        readonly StudentContext context;

        public StudentRepository(StudentContext context)
        {
            this.context = context;
        }
        public async Task<bool> AddEnrolledCoursesAsync(EnrolledCourse enrolledCourse)
        {
            try
            {
                var result1 = from c in context.EnrolledCourses
                              where c.StudentEmail == enrolledCourse.StudentEmail
                                    && c.Name == enrolledCourse.Name
                              select c;
                if (result1.Count() == 0)
                {
                    context.EnrolledCourses.Add(enrolledCourse);
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

        public async Task<List<EnrolledCourse>> GetEnrolledCoursesByStudentAsync(string modelEmail)
        {
            var result = from c in context.EnrolledCourses
                         where c.StudentEmail == modelEmail
                         select c;
            return await result.ToListAsync();
        }

        public async Task<UserDto> StudentProfileDetailAsync(string email)
        {
            var result = from a in context.ModelUsers
                         where a.Email == email
                         select new UserDto
                         {
                             Id = a.Id,
                             FirstName = a.FirstName,
                             LastName = a.LastName,
                             Email = a.Email,
                             PhoneNumber = a.PhoneNumber
                         };
            return await result.SingleOrDefaultAsync();
        }

        public async Task<bool> UpdateStudentDetailsAsync(ProfileDto modUser, string studentId)
        {
            try
            {
                var user = (from a in context.ModelUsers
                            where a.Id == studentId
                            select a).SingleOrDefault();
                if (user != null)
                {
                    user.Id = modUser.id;
                    user.Email = modUser.Email;
                    user.FirstName = modUser.FirstName;
                    user.LastName = modUser.LastName;
                    user.PhoneNumber = modUser.PhoneNumber;
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
