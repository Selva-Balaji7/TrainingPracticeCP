using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrayproj
{
    class ArrayFunctions
    {
        public void showArrayFunctions()
        {
            int[] numbers = { 10, 20, 300, 42, 321 };
            int[] newNumbers = new int[5];
            Console.WriteLine(Array.IndexOf(numbers, 20));
            Console.WriteLine(Array.BinarySearch(numbers, 20));
            numbers.CopyTo(newNumbers, 0);
            //Array.Resize(ref newNumbers, 7);
            //newNumbers[5] = 15;
            //newNumbers[6] = 13;
            //Array.Sort(numbers);
            //Array.Reverse(numbers);
            foreach(int num in newNumbers)
            {
             Console.WriteLine(num+" ");
            }


        }
    }
}
