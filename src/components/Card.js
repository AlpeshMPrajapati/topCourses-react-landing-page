import React from 'react'
import { toast } from 'react-toastify';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehle like hua pada hai
      setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
      toast.warning('like removed');
    }
    else{
      //pehle se like nahi hai
      if(likedCourses.length === 0 ){
        setLikedCourses([course.id])
      }
      else{
        //non-empty array
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success('Liked Successfully')
    }
  }

  return (
    <div className='w-[240px] bg-[#282c3fef] bg-opacity-80 text-white rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.imgUrl} alt="" className='w-[100%] h-[200px]' />
        <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-8px] grid place-items-center cursor-pointer'>
          {
            likedCourses.includes(course.id) ?(<FcLike onClick={clickHandler} fontSize="1.55rem"/>):(<FcLikePlaceholder onClick={clickHandler} fontSize="1.55rem"/>)
          }
           
        </div>
      </div>
      <div className='py-4 px-3'>
        <p className='font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2'>
          {
            course.description.length > 100 ? (course.description.substr(0,100)+"..."):(course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card