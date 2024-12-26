namespace StudentApp
{
    internal interface IContact
    {
        long mobile { get; set; }
        string email { get; set; }

        public string showContact();
      
    }
}