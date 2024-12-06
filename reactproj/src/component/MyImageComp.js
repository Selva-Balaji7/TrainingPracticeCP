import React  from "react";
import nature from "../assests/nature.jpg";
import himalayas from "../assests/himalayas.jpg";
import commonData from "../shared/constant/constantData";
const MyImageComp=()=>{
 return(
    <div>
        <h2>This is my image components</h2>
        <img src={nature} alt='nature' height='200px' width='200px'/>
        <img src={himalayas} alt='himalayas' height='200px' width='200px'/>
        <hr/>
        <img src={commonData.man} alt='man' height="200px" width="200px"/>
        <video src={commonData.vedio} controls height="200px" width="200px"></video>
    </div>
 )

}
export default MyImageComp