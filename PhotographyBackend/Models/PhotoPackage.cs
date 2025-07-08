namespace PhotographyBackend.Models
{
    public class PhotoPackage
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } // optional
    }
}
