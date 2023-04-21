import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Residents = ({resident}) => {
    
    const [residentInfo, setResidentInfo] = useState()
    const [status, setStatus] = useState('live')
    
    useEffect(() => {
      axios.get(resident)
        .then((res)=>setResidentInfo(res.data))
        .catch((err)=>console.log(err))
}, [])
    return (
      <div className='m-auto'>
        <article className='my-6 max-w-xs border-green-500 border'>
        <div className="relative max-w-xs">
            <img src={residentInfo?.image} alt="" className='mx-auto border-green-500 border w-full'/>
            <h2 className='absolute bottom-0 left-1/4 bg-slate-950/50 m-2 px-6 py-1 border-green-500 border-2 flex gap-3'>
                <box-icon type='solid' name='circle' color={residentInfo?.status === 'Dead' ? 'red': residentInfo?.status === 'Alive' ? 'green' : 'gray'}></box-icon>
                <span className="">{residentInfo?.status}</span>
            </h2>
        </div>
        <h2 className='mt-2 text-center text-xl font-bold'>{residentInfo?.name}</h2>
        <table className='mx-2 text-sm'>
            <tbody>
            <tr>
                <td className='text-gray-600 pr-3'>Species</td>
                <td>{residentInfo?.species}</td>
            </tr>
            <tr>
                <td className='text-gray-600 pr-3'>Origin</td>
                <td>{residentInfo?.origin.name}</td>
            </tr>
            <tr>
                <td className='text-gray-600 pr-3 w-24'>Times apper</td>
                <td>{residentInfo?.episode.length}</td>
            </tr>
            </tbody>
        </table>
    </article>
      </div>
  )
}

export default Residents
