using System;


namespace OopsDemo
{
    internal class Company
    {
        private int cid;
        private string cname;

        public Company(int id, string name)
        {
            this.cid = id;
            this.cname = name;
        }
        public void displayCompanyDetails()
        {
            Console.WriteLine("Company Registration Number:" + this.cid);
            Console.WriteLine("Company Name:" + this.cname);
        }
    }
}
