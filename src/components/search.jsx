import React, { useEffect } from 'react'
import 'boxicons'
import useLocation from '../hooks/useLocation'

const Search = () => {
    const handleSubmit = (e) => {
      const search = e.target.locationId.value
      e.preventDefault()
      console.log(e.target.locationId.value)
    }
    
    //handleClick(location)

  return (
    <div>
      <form className='flex gap-5 justify-between mx-6 my-3 border border-green-500' onSubmit={handleSubmit}>
        <input id='locationId' type="text" placeholder='Type a location Id...' className='bg-transparent px-3'/>
        <button  className='bg-green-800 px-6'>Search<box-icon name='search-alt-2' color='white'></box-icon></button>
      </form>
    </div>
  )
}

export default Search
