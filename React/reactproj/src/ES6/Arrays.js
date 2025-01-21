import React from 'react'

const Arrays = (props) => {
    
    const mylist=props.list
    // document.write(mylist);
    const myitems=mylist.map((items,index) => 
        `<li key=${index}>${items}</li>`
)

    return (
        <div>
        <h2>my list</h2>
        
        <ul>{myitems}</ul>
        
          
        </div>
    )
}
export default Arrays;
