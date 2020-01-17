using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace DonVo.Models
{
    public class User : IdentityUser
    {
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        [MaxLength(50)]
        public string Skills { get; set; }

        [MaxLength(50)]
        public string Experience { get; set; }

        public bool Active { get; set; }
    }
}
