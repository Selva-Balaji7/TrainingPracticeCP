using System;

namespace StudentApp
{             
    public class Stringtask1
    {
        public void TitlecaseReverse()
        {
            string uname = Console.ReadLine();

            string[] str = uname.Split(' ');
            string str1 = "";
            for (int i = 0; i < str.Length; i++)
            {
                str[i] = str[i].ToLower().Replace(str[i][0].ToString(), str[i][0].ToString().ToUpper());
                str1+=str[i];
                if (i < str.Length - 1)
                {
                    str1 += " ";
                }
            }

            Console.WriteLine(str1);
            char[] ch = str1.ToCharArray();
            string revstr = "";
            for (int i = ch.Length - 1; i >= 0; i--)
            {
                revstr += ch[i].ToString();
            }
            Console.WriteLine(revstr);
            Console.ReadLine();
        }
    }
}
