using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shape
{
    public class Location
    {
        protected double x, y{get;set;}
        public Location(double x, double y)
        {
            this.x = x;
            this.y = y;
        }
    }
    public abstract class Shape
    {
       protected Location c;
      public Shape(double x, double y)
        {
        c = new Location(x, y);
        }

      public abstract double Area();
      public abstract double Perimeter();

        public override string ToString()
        {
            return $"Location :({c.x},{c.y})";
        }
       

    }
    class Rectangle : Shape 
    {
        protected double side1, side2;
     public Rectangle(double side1,double side2):base(double x,double y)
     {
         this.double= side1;
         this.double= side2;
     }
    public double Area()
    {
        return side1 * side2

     }
    public double Perimeter()
    {
        return 2 * (side1 + side2);
    }
    public override string ToString()
    { 
        return $"Rectangle side1={side1},side2={side2},area={Area()},perimeter={Perimeter()}"
    }
}
    class Circle : Shape
    
    protected double radius;
    public Circle(int radius):base(double x,double y)
    {
    this.double= radius;
    }
    public double Area()
    {
    return Math.PI * radius * radius;
    }
    public double Perimeter()
    {
    return Math.PI * 2 * r;
    }
    public override string ToString()
    {
    return $"Area radius={radius}, area={Area()},perimeter={Perimeter()}"
    }
        
   }


