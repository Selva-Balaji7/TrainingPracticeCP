using System;

namespace dotnetturtorials
{
	public class Employee
	{
		public int eid;
		public string name;
		public Employee()
		{
			this.eid = 2;
			this.name = "selva balaji";

		}
		public static void Main(string[] args)
		{
			Employee e = new Employee();
			Console.WriteLine(e.eid);
			Console.WriteLine(e.name);


		}
	}
}
