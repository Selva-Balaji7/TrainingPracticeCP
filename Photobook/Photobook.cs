// See https://aka.ms/new-console-template for more information
using System;


namespace photobook
{
  internal class Photobook
 {
    protected int numpages;

    public Photobook()
    {
        this.numpages = 16;
    }
    public Photobook(int pgno)
    {
        this.numpages = pgno;
    }
    public int GetNumberPages()
    { 
     return this.numpages;
    }


 }
class BigphotoBook : Photobook
{
   

    public BigphotoBook()
    {
        this.numpages = 64;
    }

}


    internal class PhotobookTest
    {
      public static void Main(string[] args)
      {
       
       Photobook ph = new Photobook();
       Console.WriteLine(ph.GetNumberPages());
       Photobook ph1 = new Photobook(24);
       Console.WriteLine(ph1.GetNumberPages());
       BigphotoBook book= new BigphotoBook();
       Console.WriteLine(book.GetNumberPages());
     
      }

    }


}
