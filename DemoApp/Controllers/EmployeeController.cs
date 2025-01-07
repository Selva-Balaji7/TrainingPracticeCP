using DemoApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace DemoApp.Controllers
{
    public class EmployeeController : Controller
    {
        private CompanyContext context;

        public EmployeeController(CompanyContext cc) {
            context = cc;
         
        }
        public IActionResult Eindex()
        {
            //return View(context.Employee.Include(s => s.Department));
            return View();
        }
        [HttpPost]
        public IActionResult Eindex(int id, string name)
        {
            string message = $"Welcome Employee Name:{name} of Id:{id}";
            return View((Object)message);
        }

      
        



        public IActionResult Ecreate()
        {
            List<SelectListItem> dept = new List<SelectListItem>();
            dept = context.Department.Select(x => new SelectListItem { Text = x.Name, Value = x.Id.ToString() }).ToList();
            ViewBag.Department=dept;
            return View();
        }

        [HttpPost]
        [ActionName("Ecreate")]
        public async Task<IActionResult> Ecreated()
        {
            //context.Add(emp);
            //await context.SaveChangesAsync();
            //return RedirectToAction("Eindex");
            var emp = new Employee();
            if (await TryUpdateModelAsync<Employee>(emp, "",
                s => s.Name, s => s.Designation, s => s.DepartmentId));
            context.Add(emp);
            await context.SaveChangesAsync();
            return RedirectToAction("Eindex");

        }
        public async Task<IActionResult> Eupdate(int id)
        {
            List<SelectListItem> dept = new List<SelectListItem>();
            dept = context.Department.Select(x => new SelectListItem { Text = x.Name, Value = x.Id.ToString() }).ToList();

            ViewBag.Department = dept;

            Employee Emp = await context.Employee.Where(e => e.Id == id).FirstOrDefaultAsync();
            return View(Emp);
        }

        [HttpPost]
        public async Task<IActionResult> Eupdate(Employee emp)
        {
            context.Update(emp);
            await context.SaveChangesAsync();
            return RedirectToAction("Eindex");

        }

        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var emp = new Employee() { Id = id };
            context.Remove(emp);
            await context.SaveChangesAsync();
            return RedirectToAction("Eindex");

        }

    }
}
