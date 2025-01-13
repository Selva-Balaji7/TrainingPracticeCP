namespace WebApiDem.Models
{
    public interface IRepository
    {
        Reservation AddReservation(Reservation reservation);
        Reservation UpdateReservation(Reservation reservation);

        public void DeleteReservation(int id);

        public IEnumerable<Reservation> Reservation { get; }

        public Reservation this[int id] { get; }
    }


}



