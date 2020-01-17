using System.ComponentModel.DataAnnotations;

namespace DonVo.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string MentorEmail { get; set; }

        [Required]
        [MaxLength(50)]
        public string Description { get; set; }

        [Required]
        [MaxLength(50)]
        public string Duration { get; set; }

        [Required]
        [MaxLength(50)]
        public string CourseFee { get; set; }
    }
}
