using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class MathFun
    {
        int x, y;

        public void showMathMethods()
        {
            Console.WriteLine(Math.Max(4, 8));
            Console.WriteLine(Math.Min(4, 8));
            Console.WriteLine(Math.Floor(100.762));
            Console.WriteLine(Math.Ceiling(30.21));
            Console.WriteLine(Math.Pow(2,3));
            Console.WriteLine(Math.Sqrt(64));
            Console.WriteLine(Math.Abs(-100));
            Console.WriteLine(Math.Round(100.63));

            int[] number = { 4, 2, 3, 6, 10 };

            int min = int.MaxValue, max = int.MinValue;

            foreach (int i in number)
            {
                if (i < min) min = i;
                if (i > max) max = i;
            }

            Console.WriteLine("Without Math Function");
            Console.WriteLine($"Minimum = {min}\nMaximum = {max}");



            min = int.MaxValue;
            max = int.MinValue;

            foreach (int i in number)
            {
                min = Math.Min(min, i);
                max = Math.Max(max, i);
            }

            Console.WriteLine("With Math Function");
            Console.WriteLine($"Minimum = {min}\nMaximum = {max}");


        }

    }
}

