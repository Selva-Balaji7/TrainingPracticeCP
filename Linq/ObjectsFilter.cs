using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqBasics
{
    public class ObjectFilter
    {
        public int studentId { get; set; }
        public string studentName { get; set; } = null!;
        public int studentMark { get; set; }


        public void pass<T>(List<T> filter,List<T>passedStudents)where T:ObjectFilter
        {

            for (int i = 0; i < filter.Count; i++)
            {
                T o = filter[i];
                if (o.studentMark >= 35)
                {
                    passedStudents.Add(o);
                }
            }

            foreach(T filteredObject in passedStudents)
            {
                Console.WriteLine($"{filteredObject.studentId}");
                Console.WriteLine($"{filteredObject.studentName}");
                Console.WriteLine($"{filteredObject.studentMark}");

            }
        }
    }

}
