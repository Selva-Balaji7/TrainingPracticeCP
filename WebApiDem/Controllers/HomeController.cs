using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApiDem.Models;

namespace WebApiDem.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ReservationContext context;
        public HomeController(ILogger<HomeController> logger,ReservationContext context)
        {
            _logger = logger;
             context = context;
        }
        public string CreateReservation()
        {
            var res = new Reservation()
            {
             Id = 100,
             Name = "selva balaji",
             StartLocation = "Kanchipuram",
             EndLocation = "Chennai"
            };
            context.Entry(res).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            context.SaveChanges();

            return "records inserted";
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
