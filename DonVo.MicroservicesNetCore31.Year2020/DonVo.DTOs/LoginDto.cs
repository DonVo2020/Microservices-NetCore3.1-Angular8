using System.ComponentModel.DataAnnotations;

namespace DonVo.DTOs
{
    public class LoginDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public int Role { get; set; }
    }
}
