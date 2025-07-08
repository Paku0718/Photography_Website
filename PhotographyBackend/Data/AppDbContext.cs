using Microsoft.EntityFrameworkCore;
using PhotographyBackend.Models;

namespace PhotographyBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<PhotoPackage> PhotoPackages { get; set; }
        public DbSet<Booking> Bookings { get; set; } // ✅ Add this line
                                                     // ✅ Add this line
    }
}
