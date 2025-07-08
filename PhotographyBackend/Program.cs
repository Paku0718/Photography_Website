using Microsoft.EntityFrameworkCore;
using PhotographyBackend.Data;

namespace PhotographyBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container
            builder.Services.AddControllers();

            // ✅ Register MySQL with EF Core
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
                new MySqlServerVersion(new Version(8, 0, 36))));

            // ✅ CORS configuration
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowFrontend", policy =>
                {
                    policy.WithOrigins("http://localhost:3000", "http://localhost:5173") // 👈 Change this to your frontend URL
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            // ✅ OpenAPI (Swagger)
            builder.Services.AddOpenApi();

            var app = builder.Build();

            // Use CORS before anything else that might handle requests
            app.UseCors("AllowFrontend");

            // Configure the HTTP request pipeline
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();       // ⬅ Swagger UI enabled
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            using (var scope = app.Services.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                dbContext.Database.EnsureCreated(); // 👈 Creates DB and tables if not exist
            }
            app.Run();
        }
    }
}
