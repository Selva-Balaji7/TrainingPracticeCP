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

        long Zipcode { get; set; }

        public string showAddress();

    }
}
