import React from 'react'
import Sidenavbar from '../../components/Sidenavbar/Sidenavbar'
import HomePage from '../../components/HomePage/HomePage'
import './Home.css'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
      <Sidenavbar sideNavbar={sideNavbar}/>
      <HomePage sideNavbar={sideNavbar}/>
    </div>
  )
}

export default Home
