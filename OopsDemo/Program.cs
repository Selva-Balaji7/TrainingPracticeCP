﻿using System;
namespace OopsDemo
{
     internal class Program
    {
        private static void Main(string[] args)
        {
            //Company comp = new Company(123, "Hematite");
            //comp.displayCompanyDetails();
            //Employee e = new Employee(123, "Changepond");
            //e.Eid = 1;
            //e.Fname = "parag";
            //e.Yob = 1980;
            //e.Salary = 100000;
            //Console.WriteLine(e.displayEmpDetails());

<<<<<<< HEAD
            //SavingsAccount c1 = new SavingsAccount();
            //c1.TotalAmount = 100000;
            //Console.WriteLine(c1.GetTotalAmount());
            //Console.WriteLine(c1.branchAddress());
            //Customer c3 = new SavingsAccount();
            //c3.TotalAmount = 120000;
            //Console.WriteLine(c3.GetTotalAmount());
            //Customer c2 = new CurrentAccount();
            //Console.WriteLine(c2.GetTotalAmount());
            //c2.TotalAmount = 150000;
            //CurrentAccount c4=new CurrentAccount();
            //c4.TotalAmount = 300000;
            //Console.WriteLine(c4.GetTotalAmount());

            Student s1 = new Student(7,"selva balaji");
            Console.WriteLine(s1.sid + " " + s1.sname + " " + Student.collegename + " " + s1.cname + " " + Student.semester);
            Student.collegename = "xyz COE";
            Console.WriteLine(Student.collegename);
            Console.ReadLine();
=======
            SavingsAccount c1 = new SavingsAccount();
            c1.TotalAmount = 100000;
            Console.WriteLine(c1.GetTotalAmount());
            Console.WriteLine(c1.branchAddress());
            Customer c3 = new SavingsAccount();
            c3.TotalAmount = 120000;
            Console.WriteLine(c3.GetTotalAmount());
            Customer c2 = new CurrentAccount();
            Console.WriteLine(c2.GetTotalAmount());
            c2.TotalAmount = 150000;
            CurrentAccount c4=new CurrentAccount();
            c4.TotalAmount = 300000;
            Console.WriteLine(c4.GetTotalAmount());
            //Console.ReadKey();
>>>>>>> d8165c791906bf8b38a573a50803d17805a686e8


           
        }
    }
}
