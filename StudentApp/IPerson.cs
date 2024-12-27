namespace StudentApp
{
    internal interface IPerson
    {
        string pname { get; set; }
        char gender { get; set; }

        public void showDetails();
        
    }
}