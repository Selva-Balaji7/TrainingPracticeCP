using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    namespace Banking
    {
        partial class BankAccount
        {
            public int acctno = 1234;
            public string actname = "john";
            public double cbalance = 100000;

            public void Deposit(double amount)
            {
                cbalance += amount;
            }
        }
    }
}
