using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
     class Student : IPerson, IAddress, IContact
    {

        public int rollno { get; set; }
        public string pname { get; set; }
        public char gender { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public long Zipcode  { get; set; }
         
        public long mobile { get; set; }

        public string email { get; set; }

        public static int id = 0;
        public void showDetails()
        {
            if(rollno > 0)
            {
               Console.WriteLine("Roll no:" + rollno);
            }
            if (pname != null)
            {
                Console.WriteLine("Pname:" + pname);
            }
            if (gender != ' ')
            {
                Console.WriteLine("Gender:" + gender);
            }
                
            
        }
        public string showAddress()
        {
            return $"Address is City:{City}, State:{State}, Zipcode:{Zipcode}";
        }
        public string showContact()
        {
            return $"Contact is Mobile:{mobile}, Email:{email}";
        }

















        //public int rollno { get; set; }
        //public string name { get; set; }
        //public char gender { get; set; }
       

        public static int incrementid()
        {
            return ++id;
        }
        //public void displayDetails(int rollno = 0,string sname = "", char gender = ' ')
        //{
        //    if (rollno > 0)
        //    {
        //        Console.WriteLine("Roll no:" + rollno);
        //    }
        //    if (sname != "")
        //    {
        //        Console.WriteLine("Name of student:" + sname);
        //    }
        //    if (gender != ' ')
        //    {
        //        Console.WriteLine("Gender:" + gender);
        //    }
        //}

    }

}
