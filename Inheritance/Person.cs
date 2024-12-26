using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance
{
     class Person
    {
       public string Name { get; set; }
        public Person(string name)
        {
            Name = name;
        }
        public override string ToString()
        {
            return Name;
        }
    }
    class Student : Person
    {
        public Student(string name): base(name)
        {
            Name = name;
        }
        public void Study()
        {
            Console.WriteLine("study");
        }
    }
    class Teacher : Person
    {
        public Teacher(string name) : base(name)
        {
            Name = name;
        }
        public void Explain()
        {
            Console.WriteLine("Explain");
        }
    }
    
    
}
