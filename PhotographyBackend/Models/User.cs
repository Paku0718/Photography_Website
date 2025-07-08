namespace PhotographyBackend.Models
{
    public class User
    {
        public int Id { get; set; }                    // Primary Key
        public string Name { get; set; }               // User's Name
        public string Email { get; set; }              // User's Email (used for login)
        public string Password { get; set; }           // Plain Password (we'll hash later)
        public string Role { get; set; }               // "Admin" / "User"
    }
}
