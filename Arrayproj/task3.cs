using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Arrayproj
{
    internal class task3
    {
       bool istrue = true;
        
         public void showOperation()
        { 
            while (istrue)
            {
                {
                    Console.WriteLine("Operation:\n 1.DisplayFruit\n 2.FindFruit");
                    Console.WriteLine("Enter the Option:");
                    int Option = Convert.ToInt32(Console.ReadLine());
                    const int num1 = 1;
                    const int num2 = 2;
                    switch (Option)
                    {
                        case num1: DisplayFruit();

                            break;

                        case num2: FindFruit();

                            break;

                    }

                }
                static void DisplayFruit()
                {
                    string[] fruits = { "Apple", "Banana", "Pappaya", "Orange" };
                    foreach (string fruit in fruits)
                    {
                        Console.WriteLine($"{fruit}");
                    }


                }
                static void FindFruit()
                {
                    string[] fruits = { "Apple", "Banana", "Pappaya", "Orange" };
                    Console.WriteLine("Enter the fruit");
                    string user = Console.ReadLine();
                    int count = 0;
                    for (int i = 0; i < fruits.Length; i++)
                    {
                        if (user.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                        {
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
    
    }
  }

