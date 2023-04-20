import React, { useEffect, useState } from 'react'
import Residents from './residents'

const Content = ({location}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const RESIDENTS_PER_PAGE = 20
  const arrayPage = []
  const quantityPage = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)
  for (let i = 1; i <= quantityPage; i++){
    arrayPage.push(i)
  }
  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
  const endtCut = currentPage * RESIDENTS_PER_PAGE

  const residents = location?.residents;
  
  useEffect(() => {
    setCurrentPage(1)    
  }, [location])
  
  return (
    <>
    <section className='grid gap-6 p-4 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]'>
      {residents?.slice(startCut,endtCut).map((resident) => (
      <Residents key={resident} resident={resident}></Residents>
      ))}
    </section>
    <ul className='flex gap-6 mx-auto justify-center py-4'>
      {arrayPage.map(page => <li onClick={() => setCurrentPage(page)} className={`p-4 cursor-pointer rounded-md ${page === currentPage && "bg-green-800 text-white font-bold"}`} key={page}>{page}</li>)}
    </ul>
    </>
  )
}

export default Content
