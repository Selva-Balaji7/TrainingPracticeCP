using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Threading.Tasks;

namespace ExceptionsApp
{
    internal class SystemFile
    {
        public void FileInfo()
        {
            FileInfo f = new FileInfo(@"C:\Users\selva.balaji\Desktop\appium\test.txt");
            Console.WriteLine("Exists: " + f.Exists);
            if (f.Exists)
            {
                Console.WriteLine("Full name: " + f.FullName);
                Console.WriteLine("Name: " + f.Name);
                Console.WriteLine("Directory name: " + f.DirectoryName);
                Console.WriteLine("Extension: " + f.Extension);
                Console.WriteLine("Creation date and time: " + f.CreationTime);
                Console.WriteLine("Modification date and time: " +
               f.LastWriteTime);
                Console.WriteLine("Access date and time: " + f.LastAccessTime);
                Console.WriteLine("Length: " + f.Length + " bytes");
                // f.CopyTo(@"C:\Users\selva.balaji\Desktop\.NET\testcopy.txt");
                //f.Delete();
               // f.MoveTo(@"C:\Users\selva.balaji\Desktop\appium\testmoveto.txt");
                Console.ReadKey();
            }
        }
    }

}

