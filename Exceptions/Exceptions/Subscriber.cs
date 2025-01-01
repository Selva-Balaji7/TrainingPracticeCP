//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace ExceptionsApp
//{
//    internal class Subscriber
//    {
//        public void dowork()
//        { 
//          publisher p = new publisher();
//            //p.myevent += delegate (int a, int b)
//            //{
//            //    int result = a + b;
//            //    Console.WriteLine("sum of" + a + "+" + b + "=" + result);
//            //};
//            p.myevent +=(a, b) => (a + b);//lambda expressions
//            p.myevent += (a, b) => (a + b);
//            p.increment();
//        }
//    }
//}
