using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinqBasics
{
    internal class LinqDemo
    {
          public  void DataList() {

            List<int> a = new List<int> { 4, 12, 31, 42, 56, 73, 68, 79, 90, 100 };
            List<int> b = new List<int>();

            b = (from item in a where (item % 2 == 0) select item).ToList();

            foreach (int item in b)
            { 
            Console.WriteLine(item);
            }
            Console.ReadKey();
        }
     

    }
}
