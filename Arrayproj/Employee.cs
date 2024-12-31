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
            int id = int.Parse(Console.ReadLine());
            for (int i = 0; i < person.Count; i++)
            {
                if (id == person[i].Eid)
                {
                    Console.WriteLine("this employee name already existing, add new one");
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
            person.Add(new Employee(addname, addid, designation));
            string adddesignation = Console.ReadLine();
           
            }

            return person ;
        }
        public List<string> UpdateEmployee(List<string> fruits)
        {
            isFound = false;
            Console.WriteLine("Enter the fruit that you want to modify");
            string oldfruit = Console.ReadLine();
            for (int i = 0; i < fruits.Count; i++)
            {
                if (oldfruit.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                {
                    Console.WriteLine("fruit is present");
                    Console.WriteLine("Enter the new fruit name:");
                    string newfruit = Console.ReadLine();
                    string title = TitleCase(newfruit);
                    //int index = fruits.IndexOf(fruits[i]);
                    fruits.RemoveAt(i);
                    fruits.Insert(i, title);
                    isFound = true;
                    break;

                }

            }
            if (isFound == false)
            {
                Console.WriteLine("Entered fruit not present");
            }
            return fruits;
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


    

