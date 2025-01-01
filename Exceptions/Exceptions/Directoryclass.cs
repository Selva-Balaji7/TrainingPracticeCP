using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    internal class Directoryclass
    {

        public void DirectoryMethod() {

    
            {
                if (Directory.Exists(@"C:\DummyFolder") == true)
                {
                    Directory.Delete(@"C:\DummyFolder", true);
                }
                if (Directory.Exists(@"C:\folder1") == true)
                {
                    Directory.Delete(@"C:\folder1", true);
                }
                Directory.CreateDirectory(@"C:\DummyFolder\folder1");
                Console.WriteLine("folder1 created");
                Console.WriteLine("folder1 exists: " + Directory.Exists(@"C:\folder1"));
                //Output: True
                Directory.Delete(@"C:DummyFolder\folder1");
                Console.WriteLine("folder1 deleted");
                Console.WriteLine("folder1 exists: " + Directory.Exists(@"C:\folder1"));
                //Output: False
           
            Directory.CreateDirectory(@"C:\DummyFolder\folder2");
                Console.WriteLine("folder2 created");
                Directory.Move(@"C:\DummyFolder\folder1", @"C:\DummyFolder2\folder2");
                Console.WriteLine("folder1 moved as folder2");
                Console.ReadKey();
            }
        }
    }



}
    }
}
