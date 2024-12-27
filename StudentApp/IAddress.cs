using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApp
{
    internal interface IAddress
    {
        string City { get; set; }
        string State { get; set; }
        int Zipcode { get; set; }

        public string showAddress();

    }
}
