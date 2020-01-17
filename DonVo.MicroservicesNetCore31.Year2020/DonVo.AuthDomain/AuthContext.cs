using DonVo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace DonVo.AuthDomain
{
    public class AuthContext : IdentityDbContext
    {
        public AuthContext([NotNull] DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>(r => r.HasData(
            new IdentityRole
            {
                Id = "1",
                Name = "Admin",
                NormalizedName = "Admin"
            },
            new IdentityRole
            {
                Id = "2",
                Name = "Mentor",
                NormalizedName = "Mentor"

            },
            new IdentityRole
            {
                Id = "3",
                Name = "Student",
                NormalizedName = "Student"
            }
            ));

            base.OnModelCreating(builder);
        }
        public DbSet<User> ModelUsers { get; set; }
    }
}
