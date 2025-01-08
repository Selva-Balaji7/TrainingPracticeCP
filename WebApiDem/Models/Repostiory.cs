using Microsoft.AspNetCore.DataProtection.Repositories;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.SignalR.Protocol;

namespace WebApiDem.Models
{
    public class Repository : IRespository
    {
        private Dictionary<int, Reservation> items;
        public Repository()
        {
            items = new Dictionary<int, Reservation>();

            new List<Reservation>
            {
             new Reservation{Id=1,Name="Parag",StartLocation="pune",EndLocation="chennai"},
             new Reservation{Id=2,Name="Prachi",StartLocation="Delhi",EndLocation="chennai"},
             new Reservation{Id=3,Name="Manas",StartLocation="chennai",EndLocation="pune"},
             new Reservation{Id=4,Name="Deesha",StartLocation="pune",EndLocation="chennai"},
            }.ForEach(r => AddReservation(r));
        }
        public Reservation this[int id]=> items.ContainsKey(id)? items[id]:null;

        public IEnumerable<Reservation> Reservation=>items.Values;

        public Reservation AddReservation(Reservation reservation)
        {
            if (reservation.Id == 0)
            {
                int key = items.Count;
                while (items.ContainsKey(key)) { key++; };
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
