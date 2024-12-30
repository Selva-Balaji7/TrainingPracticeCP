using Microsoft.VisualBasic.FileIO;
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
    internal class Crud
    {
        public bool isFound = false;

        public void DisplayFruit(List<string> fruits)
        {
            foreach (string fruit in fruits)
            {
                Console.WriteLine($"{fruit}");
            }
        }

        public List<string> AddFruit(List<string> fruits)
                {
                   
                    Console.Write("Enter the fruit that you want to add ");
                    string addfruit = Console.ReadLine();
            //int count = 0;
                    isFound = false;
                    for (int i = 0; i < fruits.Count; i++)
                    {
                        if (addfruit.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                        {
                            Console.WriteLine("this fruit already existing, add new one");
                            isFound = true;
                        }
                        //else
                        //{
                        //    count++;
                        //}
                    }
                    //if (count == fruits.Count)
                if (isFound == false)
                {
                        fruits.Add(addfruit);

            }

            return fruits;
                }
                 public List<string> UpdateFruit(List<string> fruits)
                { 
                    Console.WriteLine("Enter the fruit that you want to modify");
                    string oldfruit = Console.ReadLine();
                    int count = 0;
                    for (int i = 0; i < fruits.Count; i++)
                    {
                        if (oldfruit.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                        {
                            Console.WriteLine("fruit is present");
                            Console.WriteLine("Enter the new fruit name:");
                            string newfruit = Console.ReadLine();
                            //int index = fruits.IndexOf(fruits[i]);
                            fruits.Insert(i,newfruit);
                            fruits.Remove(oldfruit);
                            Console.WriteLine("modified successfully");

                        }
                        else
                        {
                            count++;
                        }

                    }
                    if (count == fruits.Count)
                    {
                        Console.WriteLine("Entered fruit not preset");
                    }
                      return fruits;
                 }

                 public List<string> DeleteFruit(List<string> fruits)
                { 
                    Console.WriteLine("Enter the fruit that you want to Delete");
                    string oldfruit = Console.ReadLine();
                    int count = 0;
                    for (int i = 0; i < fruits.Count; i++)
                    {
                        if (oldfruit.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                        {
                            Console.WriteLine("fruit is present");
                            fruits.Remove(oldfruit);
                            Console.WriteLine("removed successfully");

                        }
                        else
                        {
                            count++;
                        }

                    }
                         if (count == fruits.Count)
                          {
                            Console.WriteLine("Entered fruit not preset");
                           }
                     return fruits;
                }
            
        

    }
}

