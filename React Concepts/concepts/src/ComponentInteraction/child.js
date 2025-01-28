
const ChildComp= (props)=>{
    const{name,sal,manageState}=props;
    return(
        <div>
            <h2>
                This is child Class Component
            </h2>
            <p>Name:{name} and Salary:{sal}</p>
            <div style={{justifyContent:"center",display:"flex"}}>

                <h2 style={{display:"inline"}}  onMouseOver={manageState}>Change Data</h2>
            </div>
        </div>
    )

    } 

export default ChildComp;
