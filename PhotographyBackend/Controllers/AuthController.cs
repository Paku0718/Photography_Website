using Microsoft.AspNetCore.Mvc;
using PhotographyBackend.Data;
using PhotographyBackend.DTOs;
using PhotographyBackend.Models;

namespace PhotographyBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDto dto)
        {
            try
            {
                var existingUser = _context.Users.FirstOrDefault(u => u.Email == dto.Email);
                if (existingUser != null)
                    return BadRequest("User already exists");

                var user = new User
                {
                    Name = dto.Name,
                    Email = dto.Email,
                    Password = dto.Password,
                    Role = dto.Role
                };

                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok("Registration successful");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
                return StatusCode(500, "Internal Server Error: " + ex.Message);
            }
        }


        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email && u.Password == dto.Password);
            if (user == null)
                return Unauthorized("Invalid credentials");

            return Ok(new
            {
                Email = user.Email,
                Role = user.Role,
                Name = user.Name
            });
        }

        [HttpGet("profile")]
        public IActionResult GetUserByEmail([FromQuery] string email)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            return Ok(new { name = user.Name, email = user.Email });
        }
    }
}
