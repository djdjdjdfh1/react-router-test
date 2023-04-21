import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'
import '../css/main.css'

export default function StoryList() {
  const {state} = useContext(DataContext);

  return (
    <div>
      <h1>StoryList</h1>
      <div className="storylist">
      {
        state.datalist.map((d, i)=>(
          <Link to={`/storylist/${d.name}`}>{d.name}story</Link>
          ))
        }
      </div>
      <Outlet />
    </div>
  )
}
