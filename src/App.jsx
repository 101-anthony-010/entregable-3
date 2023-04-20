import { useEffect, useState } from 'react'
import Content from './components/content'
import Location from './components/location'
import Search from './components/search'
import useLocation from './hooks/useLocation'
import axios from 'axios'

function App() {
  const numRandom = Math.floor(Math.random() * 126)
  const [location, setLocation] = useState()
  
  const handleSubmit = (e) => {
    const search = e.target.locationId.value
    e.preventDefault()

    axios.get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${numRandom}` //${numRandom} 
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="text-white">
    <div className='opacity-80'><img src="/title.png" alt="" /></div>
      <form className='flex gap-5 justify-center sm:justify-between sm:max-w-sm sm:mx-auto mx-2 my-3 border border-green-500' onSubmit={handleSubmit}>
        <input id='locationId' type="text" placeholder='Type a location Id...' className='bg-transparent px-3 w-full'/>
        <button className='bg-green-800 px-5 py-1 flex items-center justify-center'><box-icon name='search-alt-2' color='white'></box-icon></button>
      </form>
      <Location location={location}></Location>
      <Content location={location}></Content>
    </div>
  )
}

export default App
