const FuncComp= (props)=>{
    return(
        <div>
            <h2>
                This is Class Component
            </h2>
            <p>
            My name is <strong>{props.fname}</strong>, I am :<strong>{props.post}</strong>
            </p>

        </div>
    )

    } 

export default FuncComp;