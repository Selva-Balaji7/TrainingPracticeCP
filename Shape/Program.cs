// See https://aka.ms/new-console-template for more information
using System;

namespace Shape{
    class Program
    {
        static void Main(string[] args)
        {
            Shape rect = new Rectangle(0, 0, 5.2, 5, 2);
            Console.WriteLine(rect.ToString());
            Shape circle = new Circle(0, 0, 7);
            Console.WriteLine(circle.ToString());

        }
    }
}
