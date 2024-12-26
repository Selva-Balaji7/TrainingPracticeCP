using System;

namespace OopsDemo
{
	class Student
	{
		public int sid;
		public string sname;
		public static string collegename = "chennai IIT";
		public string cname = "Engeering";
		public const int semester = 6;
		public readonly int NoofMonths = 12;


		public Student(int sid, string sname)
		{
			this.sid = sid;
			this.sname = sname;
		}

	}
}
