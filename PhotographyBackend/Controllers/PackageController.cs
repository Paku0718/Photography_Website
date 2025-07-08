using Microsoft.AspNetCore.Mvc;
using PhotographyBackend.Data;
using PhotographyBackend.Models;

namespace PhotographyBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PackageController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PackageController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/package/all
        [HttpGet("all")]
        public IActionResult GetAllPackages()
        {
            var packages = _context.PhotoPackages.ToList();
            return Ok(packages);
        }

        // ✅ GET: api/package/{id}
        [HttpGet("{id}")]
        public IActionResult GetPackageById(int id)
        {
            var pkg = _context.PhotoPackages.FirstOrDefault(p => p.Id == id);
            if (pkg == null) return NotFound();

            return Ok(pkg);
        }

        // POST: api/package/add
        [HttpPost("add")]
        public IActionResult AddPackage(PhotoPackage package)
        {
            _context.PhotoPackages.Add(package);
            _context.SaveChanges();
            return Ok("Package added successfully");
        }

        // PUT: api/package/update/{id}
        [HttpPut("update/{id}")]
        public IActionResult UpdatePackage(int id, PhotoPackage updated)
        {
            var pkg = _context.PhotoPackages.FirstOrDefault(p => p.Id == id);
            if (pkg == null) return NotFound();

            pkg.Title = updated.Title;
            pkg.Description = updated.Description;
            pkg.Price = updated.Price;
            pkg.ImageUrl = updated.ImageUrl;

            _context.SaveChanges();
            return Ok("Package updated");
        }

        // DELETE: api/package/delete/{id}
        [HttpDelete("delete/{id}")]
        public IActionResult DeletePackage(int id)
        {
            var pkg = _context.PhotoPackages.FirstOrDefault(p => p.Id == id);
            if (pkg == null) return NotFound();

            _context.PhotoPackages.Remove(pkg);
            _context.SaveChanges();
            return Ok("Package deleted");
        }
    }
}
