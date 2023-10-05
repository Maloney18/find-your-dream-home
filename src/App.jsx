import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { populate } from './db/features/db'
import data from './data.json'
import LandingPage from './components/landingPage'
import { Routes, Route } from 'react-router-dom'
import PropDetails from './components/propDetails'

function App() {
  const dispatch = useDispatch()
  const {loading} = useSelector(store => store.db)

  useEffect( () => {
    dispatch(populate(data))
  }, [])
  
  return (
    <>
      <Routes>
        <Route path='/' element={loading && <LandingPage />} />
        <Route path='/property/:id' element={<PropDetails /> } />
      </Routes>
    </>
  )
}

export default App
