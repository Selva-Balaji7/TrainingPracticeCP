using System;

namespace Arrayproj
{

	class task1
	{
		public void showArrayUser()
		{
			int[] num = { 10, 20, 30, 40, 50 };
			Console.WriteLine("Enter the number:");
			int num1 =Convert.ToInt32(Console.ReadLine());
			int count = 0;
			for (int i = 0; i < num.Length; i++)
			{

				if (num[i] == num1)
				{
					Console.WriteLine("number is present");
					break;
				}
				else
				{
					count++;
				}
			}

            if(count==num.Length) 
            {
                Console.WriteLine("number is not present");
            }
        }
	}
}
