using System;
using System.Globalization;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class DateTimeMethod
    {
        public void showDataTimeMethod()
        {
            DateTime d;
            d = DateTime.Now;
            string d1=d.ToString("dd/MM/yyy",CultureInfo.InvariantCulture);
            //string time12Hour;
            Console.WriteLine(d);
            Console.WriteLine($"Day:{d.Day}");
            Console.WriteLine($"Month:{d.Month}");
            Console.WriteLine($"Year:{d.Year}");
            Console.WriteLine("---------------------------------");
            Console.WriteLine($"Hour:{d.Hour}");
            Console.WriteLine($"Minute:{d.Minute}");
            Console.WriteLine($"Second:{d.Second}");
            Console.WriteLine($"Millisecond:{d.Second}");
            Console.WriteLine($"12 hrs format:{d.ToString("hh:mm tt")}");
            Console.WriteLine("---------------------------------");
            Console.WriteLine($"shortTime:{d.ToShortTimeString()}");
            Console.WriteLine($"LongTime:{d.ToLongTimeString()}");
            Console.WriteLine($"ShortDate:{d.ToShortDateString()}");
            Console.WriteLine($"LongDate:{d.ToLongDateString()}");
            Console.WriteLine($"Day of the week:{d.DayOfWeek.ToString()}");
            Console.WriteLine($"Day of the week:{d.DayOfYear.ToString()}");



        }
    }
}
