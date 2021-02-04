// Write your Character component here
import React from "react";
import Styled from 'styled-components'





const Styledcard = Styled.div`
    color : #6cac6c;
    padding:1px;
    margin:30px;
    background-color: #d3dfe6;	
    width:30%;

    &:hover{
        background-color :#1b6f20;
        color:#53abee;
        text-shadow:2px 2px #6cac6c;
        

    }
`




const Character = (props) => {
    const {name , image, gender,species,origin,status} = props.rickmortyObj
    return(
    <div>
    <Styledcard>
        <h1>{name}</h1>
        <img src={image} alt="picture" />
        <h3>Gender:  {gender}</h3>
        <h3>Species: {species}</h3>
        <h3>Origin: {origin.name}</h3>
        <h3>Status: {status}</h3>
    </Styledcard>
    </div>
    )


}

export default Character