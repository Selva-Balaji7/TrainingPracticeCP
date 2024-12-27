// See https://aka.ms/new-console-template for more information
using System;

namespace StudentApp
{
    class Program
    {
        private static void Main(string[] args)
        {

            //StudentApp.Banking.BankAccount ba = new Banking.BankAccount();
            //Console.WriteLine("Curent Balance{0}",ba.cbalance);
            //ba.Deposit(10000);
            //Console.WriteLine("After Depositing 10000 Current Balance {0}",ba.cbalance);
            //ba.Withdraw(5000);
            //Console.WriteLine("After Withdrawing 5000 Current Balance {0}", ba.cbalance);
            //Console.WriteLine("Student Application Management System");
            Student s1 = new Student();
            s1.rollno = Student.incrementid();
            s1.pname = "selva balaji";
            s1.gender = 'M';
            s1.City = "Kanchipuram";
            s1.State = "Tamilnadu";
            s1.Zipcode = 631501;
            s1.mobile = 7812805662;
            s1.email = "tharunbalaji1807@gmail.com";
            s1.showDetails();
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine(s1.showAddress());
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine(s1.showContact());
            Console.WriteLine("======================================================");
            //Console.WriteLine("Rollno:" + s1.rollno);
            //Console.WriteLine("Name:" + s1.name);
            //Console.WriteLine("Gender:" + s1.gender);
            //Student s2 = new Student();
            //s2.rollno = Student.incrementid();
            //s2.name = "Prachi";
            //s2.gender = 'F';
            //Console.WriteLine("Rollno:" + s2.rollno);
            //Console.WriteLine("Name:" + s2.name);
            //Console.WriteLine("Gender:" + s2.gender);
            //s1.displayDetails(sname:"tharun", gender:'M');
            Faculty f1 = new Faculty();
            f1.rollno = Faculty.incrementid();
            f1.pname = "Tharun balaji";
            f1.gender = 'M';
            f1.City = "Chennai";
            f1.State = "Tamilnadu";
            f1.Zipcode = 600028;
            f1.mobile = 7856621280;
            f1.email = "selvabalaji1803@gmail.com";
            f1.showDetails();
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine(f1.showAddress());
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine(f1.showContact());
            Console.WriteLine("---------------------------------------------------");
            Console.ReadLine();

        }
    }
}
