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
             isFound = false;
            Console.Write("Enter the fruit that you want to add ");
                    string addfruit = Console.ReadLine();
                     string title=TitleCase(addfruit);
                    isFound = false;
                    for (int i = 0; i < fruits.Count; i++)
                    {
                        if (title.Equals(fruits[i], StringComparison.OrdinalIgnoreCase))
                        {
                            Console.WriteLine("this fruit already existing, add new one");
                            isFound = true;
                        }
                        
                    }
                if (isFound == false)
                {
                        fruits.Add(title);

                }

            return fruits;
                }
                 public List<string> UpdateFruit(List<string> fruits)
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
                             fruits.Insert(i,title);
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

                 public List<string> DeleteFruit(List<string> fruits)
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
                     public string TitleCase(string title)
                      {

                        title = title.ToLower().Replace(title[0].ToString(), title[0].ToString().ToUpper());


                        return title;
                       }







    }
}

