import { Routes, Route } from 'react-router-dom'
import { useRecap } from './hooks/coinsHooks'
import NavBar from './components/NavBar'
import Home from './routes/Home'
import './App.css'
import Footer from './components/Footer'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const LazyAllCoins = lazy(() => import('./routes/AllCoins'))
const LazyCoin = lazy(() => import('./routes/Coin'))

function App() {
  const { recapLoading } = useRecap()
  
  return (
    <div className="App">
       <NavBar />
       <div style={{marginTop:'6rem',marginBottom:'2rem'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={
            <Suspense fallback={<Loader height='80vh' />}>
              <LazyAllCoins />
            </Suspense>
          } />
          <Route path='/coin/:id' element={
            <Suspense fallback={<Loader height='80vh' />}>
              <LazyCoin />
            </Suspense>
          } />
        </Routes>
       </div>
       <Footer />
    </div>
  )
}

export default App
