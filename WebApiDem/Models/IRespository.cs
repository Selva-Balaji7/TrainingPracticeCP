namespace WebApiDem.Models
{
    public interface IRespository
    {
        Reservation AddReservation(Reservation reservation);
        Reservation UpdateReservation(Reservation reservation);

        public void DeleteReservation(int id);

        IEnumerable<Reservation> Reservation { get; }

        Reservation this[int id] { get; }
    }
}
