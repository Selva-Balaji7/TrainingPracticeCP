
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace OopsDemo
//{
//    class Employee : Company
//    {
//        private int eid;
//        private string fname;
//        private int yob; // Writeonly
//        private double salary;
//        private int age; //Readonly

//        public int Eid
//        {
//            get { return eid; } 
//            set { 
//                eid = value; 
//            }

//        }
//        public string Fname
//        {
//            get { return fname; }
//            set { fname = value; }

//        }
//        public int Yob
//        {
//            set
//            {
//                yob = value;
//                age = 2024 - yob;

//                if (age < 18)
//                {
//                    Console.WriteLine("you are not allowed to be registered");

//                }
//                else
//                {
//                    Console.WriteLine("you are eligible to register");
//                }

//            }

//        }

//        public int Age
//        {
//            get
//            {
//                return age;
//            }
//        }


//        public double Salary
//        {
//            get { return salary; }
//            set { salary = value; }

//        }
//        public Employee(int id, string name) : base(id, name)
//        {

//        }

//        public string displayEmpDetails()
//        {
//            base.displayCompanyDetails();
//            return eid+" "+fname + " is having a age of " + age + " with a salary of " + salary;
//        }
//    }
//}





