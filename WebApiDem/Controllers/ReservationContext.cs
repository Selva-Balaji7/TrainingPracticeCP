using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using WebApiDem.Models;

namespace WebApiDem.Controllers
{
    public class ReservationContext : DbContext
    {
      
            public ReservationContext(DbContextOptions<ReservationContext> options) : base(options) { }
            public DbSet<Reservation> Reservations{ get; set; }

          

    }
}
