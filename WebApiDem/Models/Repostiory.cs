using Microsoft.AspNetCore.DataProtection.Repositories;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.SignalR.Protocol;


namespace WebApiDem.Models;

public class Repository : IRespository
{
    // private Dictionary<int, Reservation> items;
    private  ReservationContext context;
    public Repository(ReservationContext context)
    {
        this.context = context;
        //items = new Dictionary<int, Reservation>();

        //new List<Reservation>
        //{
        // new Reservation{Id=1,Name="Parag",StartLocation="pune",EndLocation="chennai"},
        // new Reservation{Id=2,Name="Prachi",StartLocation="Delhi",EndLocation="chennai"},
        // new Reservation{Id=3,Name="Manas",StartLocation="chennai",EndLocation="pune"},
        // new Reservation{Id=4,Name="Deesha",StartLocation="pune",EndLocation="chennai"},
        //}.ForEach(r => AddReservation(r));
    }

   // public Reservation this[int id]=> items.ContainsKey(id)? items[id]:null;

    public IEnumerable<Reservation> Reservations=>context.Reservations;

    public Reservation AddReservation(Reservation reservation)
    {
        //if (reservation.Id == 0)
        //{
        //    int key = items.Count;
        //    while (items.ContainsKey(key)) { key++; };
        //    reservation.Id = key;
        //}
        //items[reservation.Id] = reservation;
        DbSave(reservation);
        return reservation;
    }
    public async void DbSave(Reservation reservation)
    {
        context.Reservations.Add(reservation);
        await context.SaveChangesAsync();
    }
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
