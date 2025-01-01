using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrayproj
{
    internal class Employee
    {
        public string Ename;
        public int Eid;
        public string Designation;
        public bool isFound=false;

        public Employee(string name, int id, string designation)
        { 
           this.Ename = name;
           this.Eid = id;
           this.Designation = designation;
        
        }

        public void DisplayEmplist(List<Employee> person)
        {
            foreach (Employee e in person)
            {
                Console.WriteLine($"Name:{e.Ename},Eid:{e.Eid},Designation:{e.Designation}");
            }
        }
        public List<Employee> AddEmployee(List<Employee> person)
        {
            isFound = false;
            Console.WriteLine("\nEnter id:");
            int existid = int.Parse(Console.ReadLine());
            for (int i = 0; i < person.Count; i++)
            {
                if (existid == person[i].Eid)
                {
                    Console.WriteLine("this employee already existing, add new one");
                    isFound = true;
                }

            }
            if(isFound==false) {
             Console.WriteLine("\nEnter id:");
             int addid = int.Parse(Console.ReadLine());
             Console.WriteLine("\nEnter name:");
            string addname = Console.ReadLine();
            Console.WriteLine("\nEnter designation:");
            string designation = Console.ReadLine();
            string adddesignation = Console.ReadLine();
            person.Add(new Employee(addname, addid, designation));
           
           
            }

            return person ;
        }
        public List<Employee> UpdateEmployee(List<Employee> person)
        {
            isFound = false;
            Console.WriteLine("\nEnter the Employee id that you want to update:");
            int existid =int.Parse(Console.ReadLine());
            for (int i = 0; i < person.Count; i++)
            {
                if (existid == person[i].Eid)
                {
                    Console.WriteLine("Yes, this employee is present");
                    Console.WriteLine("\nEnter the option that you want to update:");
                    string[] update = ["update id","update name","update designation"];
                    for(int j = 1; j<=update.Length; j++)
                    {
                        Console.WriteLine($"{j}.{update}");
                    }
                    int Option=int.Parse(Console.ReadLine());
                    switch (Option)
                    {
                        case 1:
                            Console.WriteLine("Enter new id:");
                            int newid = int.Parse(Console.ReadLine());
                            for (int k = 1; k <= person.Count; k++)
                            {
                                if ((person[k].Eid) == newid)
                                {
                                    Console.WriteLine("This id is already existing,enter new id:");
                                    isFound = true;
                                    break;
                                }
                            }
                            if (isFound == false)
                            {
                                person.Add(person[i]);
                            }

                            break;
                    }


                    fruits.RemoveAt(i);
                    fruits.Insert(i, title);
                    isFound = true;
                    break;

                }

            }
            if (isFound == false)
            {
                
            }
            return person;
        }

        public List<string> DeleteEmployee(List<string> fruits)
        {
            isFound = false;
            Console.WriteLine("Enter the fruit that you want to Delete");
            string oldfruit = Console.ReadLine();
            for (int i = 0; i < fruits.Count; i++)
            {
                if (oldfruit.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                {
                    Console.WriteLine("fruit is present");
                    fruits.RemoveAt(i);
                    isFound = true;
                    break;
                }

            }
            if (isFound == false)
            {
                Console.WriteLine("Make sure that the fruit is present");
            }
            return fruits;
        }
       


    }
}


    

