import React, { lazy, Suspense } from 'react'
import Recap from '../../components/Recap'
import GlobalStats from '../../components/GlobalStats'
import './Home.css'

const Home = () => {
  return (
    <div className='container-home'>
      <div className='container-home-recap'>
        <Recap />
      </div>
      <div className='container-home-globalstats'>
          <GlobalStats />
      </div>
    </div>
  )
}

export default Home