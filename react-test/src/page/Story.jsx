import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

export default function Story() {
  const {name} = useParams(); 
  const {state} = useContext(DataContext);
  const {datalist} = state;

  const fruit = datalist.find((d)=>(d.name === name))
  return (
    <div>
        <h2>{name}-Story</h2>
        <img style={{width:"400px", height:"300px"}}src={fruit.picture} alt="" />
        <p>{fruit.detail}</p>
    </div>
  )
}
