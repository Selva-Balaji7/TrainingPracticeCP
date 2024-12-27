using System;


namespace StudentApp
{
     class Faculty:IPerson,IAddress,IContact
    {

        public int rollno { get; set; }
        public string pname { get; set; }
        public char gender { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public int Zipcode { get; set; }
        public long mobile { get; set; }

        public string email { get; set; }
        public static int id = 1;
        public void showDetails()
        {
            if (rollno > 0)
            {
                Console.WriteLine("Roll no:" + rollno);
            }
            if (pname != null)
            {
                Console.WriteLine("Pname:" + pname);
            }
            if (gender != ' ')
            {
                Console.WriteLine("Gender:" + gender);
            }


        }
        public static int incrementid()
        {
            return ++id;
        }
        public string showAddress()
        {
            return $"Address is City:{City}, State:{State}, Zipcode:{Zipcode}";
        }
        public string showContact()
        {
            return $"Contact is Mobile:{mobile}, Email:{email}";
        }





    }
}
