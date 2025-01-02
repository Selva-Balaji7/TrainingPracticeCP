using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    public delegate void mydelegate (string student);
    internal class AttendancePublisher
    {
        public event mydelegate eventhandler;
        
        public void RaiseEvent(string student)
        {
            eventhandler(student);
        }
    }
    class AttendanceSubscriber
    {
        public bool isName = false;
        public void ShowMessage(string student) {
            
            string[] BannedStudents = ["Jack", "Mathew", "Steven"];

            for (int i = 0; i < BannedStudents.Length; i++) {

                if (student.Equals(BannedStudents[i], StringComparison.OrdinalIgnoreCase))
                {
                    Console.WriteLine($"{BannedStudents[i]}, is banned student!");
                    isName = true;
                }
              
            }
            if (isName == false) {
                Console.WriteLine($"Welcome {student}");
            }
        }

        public void Administrative(string student) {
            if (isName == true)
            {
                Console.WriteLine("This is mail to the administrator that Banned student attending online class!");
            }
        }
        public void connect() {

            AttendancePublisher Ap = new AttendancePublisher();
            Console.WriteLine("Enter the student name:");
            string student=Console.ReadLine();
            Ap.eventhandler += ShowMessage;
            Ap.eventhandler += Administrative;
            Ap.RaiseEvent(student);
        }


    }
}
