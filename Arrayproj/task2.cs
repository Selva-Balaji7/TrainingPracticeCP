using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrayproj
{
    class task2
    {
        public void showStringArray()
        {
            string[] fruits = { "Apple", "Banana", "Pappaya", "Orange" };
            Console.WriteLine("Enter the fruit");
            string user = Console.ReadLine();
            int count = 0;
            for (int i = 0; i < fruits.Length; i++)
            {
                if (user.Equals(fruits[i], StringComparison.OrdinalIgnoreCase)) {
                    Console.WriteLine("fruit is present");
                }
                else
                {
                    count++;
                }

            }
            if (count == fruits.Length)
            {
                Console.WriteLine("fruits not preset");
            }
           
        }
        
            
    }
}
