using Microsoft.AspNetCore.Mvc;
using PhotographyBackend.Data;
using PhotographyBackend.Models;

namespace PhotographyBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingController(AppDbContext context)
        {
            _context = context;
        }

        // User books a package
        //[HttpPost("book")]
        //public IActionResult BookPackage(Booking booking)
        //{
        //    booking.BookingDate = DateTime.Now;
        //    booking.Status = "Pending";

        //    _context.Bookings.Add(booking);
        //    _context.SaveChanges();
        //    return Ok("Booking successful");
        //}
        [HttpPost("book")]
        public IActionResult BookPackage([FromBody] Booking booking)
        {
            // Get full package info by PackageId
            var package = _context.PhotoPackages.FirstOrDefault(p => p.Id == booking.PackageId);
            if (package == null)
                return NotFound("Package not found");

            // Fill in missing booking fields
            booking.PackageTitle = package.Title;
            booking.BookingDate = DateTime.UtcNow;
            booking.Status = "Pending";

            // Save booking
            _context.Bookings.Add(booking);
            _context.SaveChanges();

            return Ok("Booking successful");
        }




        //user bookings
        [HttpGet("user/{email}")]
        public IActionResult GetUserBookings(string email)
        {
            var bookings = _context.Bookings
                .Where(b => b.UserEmail == email)
                .Select(b => new
                {
                    b.Id,
                    b.UserEmail,
                    b.PackageTitle,
                    b.BookingDate,
                    b.Status
                })
                .ToList();

            return Ok(bookings);
        }




        // Admin sees all bookings
        [HttpGet("all")]
        public IActionResult GetAllBookings()
        {
            var bookings = _context.Bookings.ToList();
            return Ok(bookings);
        }

        // Admin confirms booking
        [HttpPut("confirm/{id}")]
        public IActionResult ConfirmBooking(int id)
        {
            var booking = _context.Bookings.FirstOrDefault(b => b.Id == id);
            if (booking == null) return NotFound();

            booking.Status = "Confirmed";
            _context.SaveChanges();
            return Ok("Booking confirmed");
        }

        // Admin deletes/cancels booking
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteBooking(int id)
        {
            var booking = _context.Bookings.FirstOrDefault(b => b.Id == id);
            if (booking == null) return NotFound();

            _context.Bookings.Remove(booking);
            _context.SaveChanges();
            return Ok("Booking deleted");
        }
    }
}
