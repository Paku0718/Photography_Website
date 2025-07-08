using System;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace PhotographyBackend.Models
{
    public class Booking
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string? UserEmail { get; set; }

        public int PackageId { get; set; }

        public string? PackageTitle { get; set; }  // ✅ make nullable

        public DateTime BookingDate { get; set; } = DateTime.Now;

        public string Status { get; set; } = "Pending";
    }
}