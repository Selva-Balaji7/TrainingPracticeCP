import mycss from "./mycss.module.css"
import "./External.css"
 const CssComp=()=>{
    let circle={
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid red":"5px solid green",
        margin:"auto"
    }
    return(
        <div>
        //1.use of internal css
          <h1 style={{color:'blue',backgroundColor:"aqua"}}>This is css component</h1>
          <p style={circle}>hi</p>
          //use of external css
        <div className='txtPrimary'>Hello selva </div>
        <div className='txtDanger'>Hello Rupesh</div>
        // use of module css
                <div className={mycss.special}></div> 
                </div>
    )
        
    
}
export default CssComp;