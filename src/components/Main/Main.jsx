import React from 'react'
import mainImg from '../../assets/undraw_working_remotely_re_6b3a.svg'
import './Main.css'

const Main = () => {
  return (
    <div className='mainSection'>
      <div className="leftside">
      <img src={mainImg} alt='mainimage'/>
      </div>
      <div className="rightside">
        <h1>"No great achiever ever succeeded without hard work"</h1>
      </div>
    </div>
  )
}

export default Main