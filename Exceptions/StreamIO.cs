using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    internal class StreamIO
    {
        public void FileWrite()
        {

            FileInfo f =new FileInfo(@"C:\DummyFolder\folder1\file.txt");
            if (f.Exists == true) 
            f.Delete();

            FileStream fs = new FileStream(@"C:\DummyFolder\folder1\file.txt", FileMode.Create, FileAccess.Write);
            
            StreamWriter sw=new StreamWriter(fs);
            sw.WriteLine("Hi");
            sw.WriteLine("file created");
            sw.Close();
            Console.WriteLine("file created");


        }

        
    }
}
