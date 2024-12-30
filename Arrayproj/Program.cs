using System;

namespace Arrayproj{

    internal class Program
    {
        public static void Main(string[] args)
        {
            //ArrayDemo arr = new ArrayDemo();
            //arr.showArrayFunctions();
            //task1 t1 = new task1();
            //t1.showArrayUser();
            //task2 t2 = new task2();
            //t2.showStringArray();
            //task3 t3 = new task3();
            //t3.showOperation();
            //ListMethods l = new ListMethods();
            //l.showListMethods();
            List<string> fruits = new List<string> { "Apple", "Banana", "Pappaya", "Orange" };
            Crud c = new Crud();
            bool istrue = true;
            while (istrue)
            { 
                {
                    Console.WriteLine("\n\n--------------");
                    Console.WriteLine("Menu:\n 1.DisplayFruit\n 2.AddFruit\n 3.UpdateFruit\n 4.DeleteFruit\n 5.Exit\n" );
                    Console.WriteLine("Enter the Option:");
                    int Option = Convert.ToInt32(Console.ReadLine());

                    switch (Option)
                    {
                        case 1:
                            c.DisplayFruit(fruits); 
                            break;

                        case 2:
                            fruits=c.AddFruit(fruits);
                            if (c.isFound == false)
                            {
                                c.DisplayFruit(fruits);
                                Console.WriteLine("added successfully");
                            }

                            break;
                        case 3:
                           fruits=c.UpdateFruit(fruits);
                            c.DisplayFruit(fruits);
                            Console.WriteLine("fuit added successfully");

                            break;
                        case 4:
                           fruits=c.DeleteFruit(fruits);
                            c.DisplayFruit(fruits);
                            Console.WriteLine("fruit added successfully");
                            break;
                        case 5:
                            goto exit;
                           
                    }

                }

            }
        exit:;
        }
    }
}
