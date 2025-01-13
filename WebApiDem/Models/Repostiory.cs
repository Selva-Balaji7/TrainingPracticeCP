/*
 * using WebApiDem.Controllers;

namespace WebApiDem.Models;

public class Repository : IRepository
{
     private Dictionary<int, Reservation> items;
    private  ReservationContext context;
    public Repository(ReservationContext context)
    {
        this.context = context;
        items = new Dictionary<int, Reservation>();

        new List<Reservation>
        {
         new Reservation{Id=1,Name="Parag",StartLocation="pune",EndLocation="chennai"},
         new Reservation{Id=2,Name="Prachi",StartLocation="Delhi",EndLocation="chennai"},
         new Reservation{Id=3,Name="Manas",StartLocation="chennai",EndLocation="pune"},
         new Reservation{Id=4,Name="Deesha",StartLocation="pune",EndLocation="chennai"},
        }.ForEach(r => AddReservation(r));
    }


    // public Reservation this[int id] => throw new NotImplementedException();

    public Reservation this[int id]=> context.ContainsKey(id)? items[id]:null;
    //public Reservation this[int id] =>GetReservation(id);
    //public IEnumerable<Reservation> Reservation=>context.Reservations;

    //public IEnumerable<Reservation> Reservation => throw new NotImplementedException();

    //private Reservation GetReservation(int id)
    //{
    //    foreach (Reservation res in context.Reservations)
    //    {
    //        if (res.Id == id) return res;
    //    }
    //    return null;
    //}
    public Reservation AddReservation(Reservation reservation)
    {
        if (reservation.Id == 0)
        {
            int key = items.Count;
            while (items.ContainsKey(key)) { key++; };
            reservation.Id = key;
        }
        items[reservation.Id] = reservation;
        //DbSave(reservation);
        //return reservation;
    }
    //public async void DbSave(Reservation reservation)
    //{
    //    context.Reservations.Add(reservation);
    //    await context.SaveChangesAsync():
        
    //}
    public void DeleteReservation(int id)
    {
        foreach (Reservation res in context.Reservations)
        {
            if (res.Id == id)
            {
                context.Reservations.Remove(res);
            }
        }
    }

    public Reservation UpdateReservation(Reservation reservation)
    {
        return AddReservation(reservation);
    }


}
*/


using Microsoft.AspNetCore.DataProtection.KeyManagement;

namespace WebApiDem.Models
{
    public class Repository : IRepository
    {
        private Dictionary<int, Reservation> items;

        public Repository()
        {
            items = new Dictionary<int, Reservation>();
            new List<Reservation>() {
                new Reservation() {Id = 1, Name= "Anbu", StartLocation="Chennai", EndLocation="Mumbai" },
                new Reservation() {Id = 2, Name= "Ajay", StartLocation="Kanayakumari", EndLocation="Mumbai" },
                new Reservation() {Id = 3, Name= "Manoj", StartLocation="Chennai", EndLocation="madurai" },
                new Reservation() {Id = 4, Name= "Sanjay", StartLocation="Chennai", EndLocation="Thiruchi" },
            }.ForEach(r => AddReservation(r));
        }

        public Reservation this[int id] => items.ContainsKey(id) ? items[id] : null;

        public IEnumerable<Reservation> Reservation => items.Values;

    public Reservation AddReservation(Reservation reservation)
        {
            if (reservation.Id == 0)
            {
                int key = items.Count;
                while (items.ContainsKey(reservation.Id))
                {
                    Console.WriteLine("While condition is true");
                    key++;
                }
                reservation.Id = key;
            }
            items[reservation.Id] = reservation;
            return reservation;
        }

        public void DeleteReservation(int id)
        {
            items.Remove(id);
        }

        public Reservation UpdateReservation(Reservation reservation)
        {
            return AddReservation(reservation);
        }
    }
}