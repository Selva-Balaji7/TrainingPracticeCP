// See https://aka.ms/new-console-template for more information
using System;
using System.Net.Http.Headers;

namespace Inheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            int total = 3;

            Person[] persons = new Person[total];
            for (int i = 0; i < total; i++)
            {
                if (i == 0)
                {
                    persons[i] = new Teacher(Console.ReadLine());
                }
                else
                {
                    persons[i] = new Student(Console.ReadLine());
                }

            }
            for(int i=0;i<total;i++)
            {
                if (i == 0) {
                   
                    ((Teacher)persons[i]).Explain();
                }
                else{
                    ((Student)persons[i]).Study();
                }
            }
        }

    }

}

