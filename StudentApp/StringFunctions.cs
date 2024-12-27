using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class StringFunctions
    {
        string name = "Selva S Balaji";
        string msg = "welcome";
        string city1= "kanchipuram";
        string city2 = "Kanchipuram";

        public void showStringMethods()
        {

            //Console.WriteLine("Actual string:{0}", name);
            //Console.WriteLine("trimmed string:{0}", name.Trim());
            //Console.WriteLine("lowercase:{0}", name.ToLower());
            //Console.WriteLine("Uppercase:{0}", name.ToUpper());
            //Console.WriteLine("string at this index:{0}", name[0]);
            //Console.WriteLine("substring:{0}", name.Substring(1));
            //Console.WriteLine("substring:{0}", name.Substring(1,4));
            //Console.WriteLine("remove:{0}", name.Remove(1, 4));
            //Console.WriteLine("startswith:{0}", name.StartsWith("Selva"));
            //Console.WriteLine("endswith:{0}", name.EndsWith("Balaji"));
            //Console.WriteLine("contains:{0}", name.Contains("Balaji"));
            //Console.WriteLine("equals:{0}", name.Equals("msg"));
            //Console.WriteLine("equals method:" + city1.Equals(city2,StringComparison.OrdinalIgnoreCase));
            //Console.WriteLine("indexof:{0}", name.IndexOf(" "));
            //Console.WriteLine("lastindexof:{0}", name.LastIndexOf(" "));
            char[] ch = city1.ToCharArray();
            foreach(char c in ch) Console.WriteLine(c);
            string[] s1 = name.Split(' ');
            foreach(string s in s1) Console.WriteLine(s);
            Console.WriteLine(string.Join("",s1));
            Console.WriteLine(string.Join(",", s1));//using separator
            Console.WriteLine("Enter the name:");
            Console.WriteLine("Replace:" + name.Replace("Selva", "Tharun", StringComparison.OrdinalIgnoreCase));
            //string uname = Console.ReadLine();
            //string[] s2 = uname.Split(' ');
            //for (int i = 0; i < s2.Length; i++)
            //{
            //     s2[i] = s2[i].ToLower().Replace(s2[i][0].ToString(), s2[i][0].ToString().ToUpper());
            //    Console.WriteLine(s2[i] + uname.Substring(1));
            //}


            







        }

    }
}
