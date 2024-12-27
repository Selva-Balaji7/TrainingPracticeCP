using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class Stringtask2
    {
        public void Fruits()
        {
            string[] fruits = { "Banana", "Apple", "Orange" };
            Console.WriteLine("Enter the fruit that you want to replace:");
            string ExistingFruit = Console.ReadLine();
            int count = 0;
            for (int i = 0; i < fruits.Length; i++)
            {
                if (fruits[i] == ExistingFruit)
                {
                    Console.WriteLine("Enter the new fruit:");
                    string NewFruit=Console.ReadLine();
                   Console.WriteLine(fruits[i].Replace(fruits[i], NewFruit));
                }
                else {
                    count++;
                }
            }
            if (count == 3)
            {
                Console.WriteLine("Given fruit is not available");
                
            }
        }
    }
}
