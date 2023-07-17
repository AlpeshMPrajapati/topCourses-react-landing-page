import React, { useState } from 'react'
import Card from './Card'


const Cards = (props) => {
  let courses = props.courses;
  let category= props.category;

  const[likedCourses,setLikedCourses] = useState([]);


  function getAllCourses(){
    if(category === 'All'){
      let allCourses = [];

      Object.values(courses).forEach((arr)=>{
        arr.forEach((course)=>{
          allCourses.push(course)
        })
      })
      return allCourses;
    }
    else{
      //specific category data pass
      return courses[category];
    }
  }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getAllCourses().length === 0 ?(<div className='relative top-[200px] text-3xl font-bold text-white'>No Data Found</div>) :
      (getAllCourses().map((course)=>{
        return <Card key={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
      }))}
    </div>
  )
}

export default Cards