using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrayproj
{
    internal class ListMethods()
    {
        public void showListMethods()
        { 
        List<int> numbers = new List<int>() { 2,40,10,15,100,70};
            //List<int> newNumbers = new List<int>() { 5,2,3 };
            //Console.WriteLine("Enter the value:");
           // int num = Convert.ToInt32(Console.ReadLine());
           // numbers.Add(11);
           // numbers.Insert(2, 55);
           // numbers.InsertRange(3, newNumbers);
           // numbers.AddRange(newNumbers);
           // numbers.Sort();
           // numbers.Reverse();
           //// numbers.Remove();
           // numbers.RemoveAt(2);
           // Console.WriteLine(numbers.IndexOf(2));

            for (int i = 0; i < numbers.Count; i++)
            {
                Console.WriteLine(numbers[i]);
            }

        }

    }

}
