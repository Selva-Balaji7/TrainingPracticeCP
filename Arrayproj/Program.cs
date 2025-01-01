using System;

namespace Arrayproj
{

    internal class Program
    {
        public static void Main(string[] args)
        {
            //ArrayFunctions arr = new ArrayFunctions();

            // arr.showArrayFunctions();
            //task1 t1 = new task1();
            //t1.showArrayUser();
            //task2 t2 = new task2();
            //t2.showStringArray();
            //task3 t3 = new task3();
            //t3.showOperation();
            //ListMethods l = new ListMethods();
            //l.showListMethods();
            //List<string> fruits = new List<string> { "Apple", "Banana", "Pappaya", "Orange" };
            //Crud c = new Crud();
            //bool istrue = true;
            //while (istrue)
            //{

            //    Console.WriteLine("\n\n--------------");
            //    string[] array = ["Menu:", "1.DisplayFruit", "2.AddFruit", "3.UpdateFruit", "4.DeleteFruit", "5.Exit"];
            //    foreach (string menu in array)
            //    {
            //        Console.WriteLine(menu);
            //    }
            //    Console.WriteLine("Enter the Option:");
            //    int Option = Convert.ToInt32(Console.ReadLine());

            //    switch (Option)
            //    {
            //        case 1:
            //            c.DisplayFruit(fruits);
            //            break;

            //        case 2:
            //            fruits = c.AddFruit(fruits);
            //            if (c.isFound == false)
            //            {
            //                c.DisplayFruit(fruits);
            //                Console.WriteLine("added successfully");
            //            }

            //            break;
            //        case 3:
            //            fruits = c.UpdateFruit(fruits);
            //            if (c.isFound == true)
            //            {
            //                c.DisplayFruit(fruits);
            //                Console.WriteLine("fruit modified successfully");
            //            }

            //            break;
            //        case 4:
            //            fruits = c.DeleteFruit(fruits);
            //            if (c.isFound == true)
            //            {
            //                c.DisplayFruit(fruits);
            //                Console.WriteLine("fruit deleted successfully");
            //            }
            //            break;
            //        case 5:
            //            goto exit;

            //    }

            //}
            //exit:;

            List<Employee> person = new List<Employee>();
            bool istrue = true;
            while (istrue)
            {
            Console.WriteLine("\nEnter the number of Employees to add");
            int count=int.Parse(Console.ReadLine());
            for (int i = 0; i < count; i++)
            {
                Console.WriteLine("\nEnter the details:");
                Console.WriteLine("\nEnter name:");
                string ename=Console.ReadLine();
                Console.WriteLine("\nEnter age:");
                int id=int.Parse(Console.ReadLine());
                Console.WriteLine("\nEnter designation:");
                string designation=Console.ReadLine();
                person.Add(new Employee(ename, id, designation));
            }

 
                Console.WriteLine("\n\n--------------");
                string[] emparr = ["DisplayEmpList", "AddEmployee", "UpdateEmployee", "4.DeleteEmployee", "5.Exit"];
                for(int i=1;i<=emparr.Length;i++)
                {
                    Console.WriteLine($"{i}.{emparr}");
                }
                Console.WriteLine("Enter the Option:");
                int Option = Convert.ToInt32(Console.ReadLine());

                switch (Option)
                {
                    case 1:
                        c.DisplayEmployees(person);
                        break;

                    case 2:
                        person = c.AddEmployees(emp);
                        if (c.isFound == false)
                        {
                            c.DisplayFruit(fruits);
                            Console.WriteLine("added successfully");
                        }

                        break;
                    case 3:
                        fruits = c.UpdateFruit(fruits);
                        if (c.isFound == true)
                        {
                            c.DisplayFruit(fruits);
                            Console.WriteLine("fruit modified successfully");
                        }

                        break;
                    case 4:
                        fruits = c.DeleteFruit(fruits);
                        if (c.isFound == true)
                        {
                            c.DisplayFruit(fruits);
                            Console.WriteLine("fruit deleted successfully");
                        }
                        break;
                    case 5:
                        goto exit;

                }

            }
        exit:;
        }
    }
        




        
     }

  
}


//  exit:;


