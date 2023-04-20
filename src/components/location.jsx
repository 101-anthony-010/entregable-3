import React, { useEffect } from 'react'
import useLocation from '../hooks/useLocation'
import axios from 'axios'

const Location = ({location}) => {

    useEffect(() => {
      axios.get(location?.residents[0])
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }, [])
    
    return (
    <div className='grid grid-cols-3 justify-items-center items-center text-xs mx-4 text-green-400/60'>
      <h2 className='font-bold text-2xl col-start-1 col-end-4'>Nombre: {location?.name}</h2>
      <h5><span className='font-bold'>Type: </span>{location?.type}</h5>
      <h5><span className='font-bold'>Dimension: </span>{location?.dimension}</h5>
      <h5><span className='font-bold'>Population: </span>{location?.residents.length}</h5>
    </div>
  )
}

export default Location
