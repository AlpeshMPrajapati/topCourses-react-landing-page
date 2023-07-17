import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {imgData,filterData} from './data'

const App = () => {
  const[courses,setCourses] =useState(imgData);
  const[category,setCategory] = useState(filterData[0].title)

  return (
    <div className='max-h-screen flex flex-col bg-[#3a385a]'>
      <div>
        <Navbar/>
      </div>
      <div className=' bg-[#3a385a]'>

        <div>
          <Filter filterData = {filterData} category={category} setCategory={setCategory} />
        </div>
        
        
        <div className='w-[11/12] max-w-[1000px] mx-auto flex flex-wrap justify-center items-center'>
          <Cards courses = {courses} category={category} />
        </div>
      </div>
  
    </div>
  )
}

export default App