using DonVo.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace DonVo.CourseDomain
{
    public class CourseContext : IdentityDbContext
    {
        public CourseContext([NotNullAttribute] DbContextOptions options) : base(options)
        {

        }
       
        public DbSet<User> ModelUsers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<EnrolledCourse> EnrolledCourses { get; set; }
    }
}
