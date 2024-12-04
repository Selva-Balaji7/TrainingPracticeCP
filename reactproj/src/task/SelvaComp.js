const SelvaComp=(props)=>{
   return (
      <div>
          <h2>Hi this is selva</h2>
          <p>My name is:<strong>{props.fname}</strong> {props.salary}
            {props.address} {props.gender} {props.post}
          </p>

      </div>
     
   )
}
export default SelvaComp;