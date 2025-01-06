using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace LinqBasics
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            //LinqDemo lq = new LinqDemo();
            //lq.DataList();
            //List<Student> students = new List<Student>();
            //Student s = new Student();
            //Student s1 = new Student() { studentId = 1, studentName = "selva", studentMark = 98 };
            //Student s2 = new Student() { studentId = 2, studentName = "balaji", studentMark = 99 };
            //Student s3 = new Student() { studentId = 3, studentName = "Tharun", studentMark = 90 };
            //Student s4 = new Student() { studentId = 4, studentName = "shankar", studentMark = 95 };
            //students.Add(s1);
            //students.Add(s2);
            //students.Add(s3);
            //students.Add(s4);
            //s.Iterate(Students);
            ObjectFilter Of = new ObjectFilter();
            ObjectFilter o1, o2, o3;
            o1 = new ObjectFilter() { studentId = 5, studentName = "shiva", studentMark = 99};
            o2 = new ObjectFilter() { studentId = 6, studentName = "Ganesh", studentMark = 25 };
            o3 = new ObjectFilter() { studentId = 7, studentName = "Murugan", studentMark = 100 };
            List<ObjectFilter> filter = new List<ObjectFilter> { o1, o2, o3 };
            List<ObjectFilter> passedStudents = new List<ObjectFilter>();
            Of.pass(filter, passedStudents);
            Console.ReadLine();

           
        }
    }
}
