using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal class Stringtask3
    {
        public void showSentence()
        {
            string str = "She sells sea shells on the sea shore";
            string[] str1 = str.Split(" ");
            int count = 0;
            foreach (string word in str1) count++;
            Console.WriteLine($"Total Word Count:{count}");

            string str2 = str.Replace(" ", "");
            Console.WriteLine(str2);
            int len = str2.Length;
            Console.WriteLine($"Letter Count:{len}");

            char[] ch = str2.ToCharArray();
            int count1 = 0;
            for (int i = 0; i < ch.Length; i++)
            {
             if (ch[i]=='s')
                {
                    //Console.WriteLine(ch[i]);
                    count1++;
                }
            }
            Console.WriteLine($"Total No of occurances of s:{count1}");
        }
       
    }
}
