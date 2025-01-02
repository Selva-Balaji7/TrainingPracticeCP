using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Exceptions
{
    public delegate void mydelegatetypename(string username);
    public class Publisher1
    {

        public event mydelegatetypename myevent;

        public void raiseevent(string username)
        {
            myevent(username); //raise event
        }
    }
    internal class Subscriber1
    {
        public void subscribedmethod(string username)
        {
            Console.WriteLine("Hello to " + username);
        }
        public void connect()
        {
            Publisher1 pc = new Publisher1();
            pc.myevent += subscribedmethod;
            pc.raiseevent("Scott");
            pc.raiseevent("Allen");
        }
    }


}