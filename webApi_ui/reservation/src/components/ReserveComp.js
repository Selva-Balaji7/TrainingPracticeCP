import react from "react";
const ReserveComp = () => {
 return(
   <div>
    <h1>Welcome to makemytrip all Reservation</h1>
    <br/>
    <table class="table table-info table-sm table-striped-columns table m-3">
    <thead>
      <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody class="table-group-divder">
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Delhi</td>
            <td>Mumbai</td>
           <td><button type="button" class="btn btn-primary">Update</button></td> 
           <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Smith</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td><button type="button" class="btn btn-primary">Update</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
            <td>3</td>
            <td>David</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td><button type="button" class="btn btn-primary">Update</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
    </tbody>


    </table>
    
    
    
    </div>





 );

}
export default ReserveComp;