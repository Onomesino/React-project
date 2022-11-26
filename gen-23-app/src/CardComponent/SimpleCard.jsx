 import React, { Component } from "react";
 import Description from "./Description";
 import Title from "./Title";
 import Image from "./Image";


class SimpleCard extends Component{
   render() {
     return (
       <>
        <Title />
       <Image />
       <Description profession = "Developer" /> 
       </>
     )
   }
 }
 export default SimpleCard