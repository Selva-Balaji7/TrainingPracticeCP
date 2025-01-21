            import React from 'react'

            const Destructing = () => {

            let vehicles=['yamaha','audi','ashok leyland']
            const [bike,car,truck]=vehicles
            console.log(bike,car,truck)
            
               // not necessary
                // vehicles.forEach((items)=>
                // {
                //  console.log(items);
                // }

                // )
                
            return (
                    <div>
                    <h2>destructing</h2>
                    <p>
                     Bike:{bike}<br/>
                     car:{car}<br/>
                     truck:{truck}<br/>
                    </p>
                    </div>
                )
            }
            export default Destructing;
