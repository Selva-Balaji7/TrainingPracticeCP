using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionsApp
{
    internal class Calculator
    {
        public  void Add(int a, int b) {
        int c=a+b;
        Console.WriteLine(c);
        }

        public void Subtract(int a, int b)
        {
            int c = a - b;
            Console.WriteLine(c);
        }
    }
}
