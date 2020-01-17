using DonVo.DTOs;
using DonVo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonVo.AdminDomain.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        readonly AdminContext context;
        public AdminRepository(AdminContext context)
        {
            this.context = context;
        }

        public async Task<bool> AddCoursesAsync(Course course)
        {
            try
            {
                context.Courses.Add(course);
                int result = await context.SaveChangesAsync();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> BlockUserAsync(string id)
        {

            var userblock = context.ModelUsers.SingleOrDefault(u => u.Id == id);
            userblock.Active = !userblock.Active;

            var result = await context.SaveChangesAsync();

            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteCourseAsync(Course course)
        {
            try
            {
                context.Courses.Remove(course);
                int result = await context.SaveChangesAsync();

                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Course> GetCourseAsync(int id)
        {
            var result = from a in context.Courses
                         where a.Id == id
                         select a;
            return await result.SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<EnrolledCourse>> GetEnrolledCoursesAsync()
        {
            return await context.EnrolledCourses.ToListAsync();
        }

        public async Task<IEnumerable<UserDto>> GetMentorsListAsync()
        {
            var mentor = from a in context.ModelUsers
                         join ma in context.UserRoles on a.Id equals ma.UserId
                         where ma.RoleId == "2"
                         select new UserDto
                         {
                             Id = a.Id,
                             Active = a.Active,
                             Experience = a.Experience,
                             FirstName = a.FirstName,
                             LastName = a.LastName,
                             Skills = a.Skills,
                             Email = a.Email,
                             PhoneNumber = a.PhoneNumber

                         };
            return await mentor.ToListAsync();
        }

        public async Task<IEnumerable<UserDto>> GetUsersListAsync()
        {
            var user = from a in context.ModelUsers
                       join ma in context.UserRoles on a.Id equals ma.UserId
                       where ma.RoleId == "3"
                       select new UserDto
                       {
                           Id = a.Id,
                           Active = a.Active,
                           FirstName = a.FirstName,
                           LastName = a.LastName,
                           Email = a.Email,
                           PhoneNumber = a.PhoneNumber
                       };
            return await user.ToListAsync();
        }

        public async Task<bool> UpdateCourseAsync(Course course)
        {
            try
            {
                context.Courses.Update(course);
                int result = await context.SaveChangesAsync();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
