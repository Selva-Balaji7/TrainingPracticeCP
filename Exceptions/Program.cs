
using ExceptionsApp;
using System;
using System.IO;
using System.Data;
using namespace1;
using Exceptions;

namespace ExceptionApp
{
    //delegate int mydelegatetype(int a,int b);
    internal class Program
    {


        //public delegate void Calc(int a, int b);

        private static void Main(String[] args)
        {

            //StreamIO s = new StreamIO();
            //s.FileWrite();
            //Directoryclass dc = new Directoryclass();
            //dc.DirectoryMethod();
            //SystemFile f = new SystemFile();
            //f.FileInfo();
            //SystemDirectory d = new SystemDirectory();
            //d.directory();


            //--------------------------------------------------------------------------
            //Counter.Increment ci = new Counter.Increment();
            //ci.doIncrement();
            //-------------------------------------------------------------------------------------------------------------------
            //Subscriber s = new Subscriber();
            //s.dowork();

            //----------------------------------------------------------------------------------------
            //Subscriber1 s1 = new Subscriber1();
            //s1.connect();

            AttendanceSubscriber As = new AttendanceSubscriber();
            As.connect();

            //-------------------------------------------------------------------------------------------------------
            //Calc d;
            //Calculator c = new Calculator();
            //d = c.Add;
            //d(20, 20);
            //d = c.Subtract;
            //d(20, 20);
            //------------------------------------------------------------------------------------------
            //try
            //{
            //    Console.WriteLine("Enter first number:");
            //    int a = Convert.ToInt32(Console.ReadLine());
            //    Console.WriteLine("Enter second number:");
            //    int b = Convert.ToInt32(Console.ReadLine());
            //    int c = a / b;
            //    Console.WriteLine("Quotient is" + c);
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.Message);


            //}
            //finally {
            //    Console.WriteLine("Finished");
            //}




        }
    }
}