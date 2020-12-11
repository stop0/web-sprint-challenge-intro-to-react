// Write your Character component here
import React from "react";
import Styled from 'styled-components'





const Styledcard = Styled.div`
 
    color : #ffe7b1;
    padding:1px;
    margin:30px;
    background-color: #403e44;	

    &:hover{
        background-color :#fbc34a;
        color:#403e44;
    }
`




const Character = (props) => {
    const {name , height, mass, gender,eye_color,skin_color,hair_color} = props.starwars
    return(
    <div>
    <Styledcard>
        <h1>{name}</h1>
        <h3>Height : {height} cm</h3>
        <h3>Weight : {mass} kilograms </h3>
        <h3>Gender : {gender}</h3>
        <h3>Skin Color : {skin_color}</h3>
        <h3>Eye Color : {eye_color}</h3>
        <h3>Hair Color : {hair_color}</h3>
    </Styledcard>
    </div>
    )


}

export default Character