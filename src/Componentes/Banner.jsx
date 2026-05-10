import Container from './Container'
import Logo1 from '../assets/Logo 1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Border.png'
import Btn from './Btn'
import link from'../assets/link.png'
import { FaPlay } from "react-icons/fa";
import React, { useEffect, useState } from 'react'


const CountDowntBox = ({number,text})=>{
  return(
    <div className="flex w-31 h-29.75 rounded-[20px] bg-white/10 items-center justify-center flex-col">
       <h1 className="text-[40px] font-bold">{number}</h1>
       <p>{text}</p>
    </div>
  )
}

const CountDown=({targetDate})=>{
  const  calculateTimeLeft =()=>{
    const difference = new Date (targetDate) - new Date()
    if(difference>0){
      return{
        day:Math.floor(difference/(1000*60*60*24)),
        hours:Math.floor(difference/(1000*60*60)%24),
        minutes:Math.floor(difference/(1000*60)%60),
        seconds:Math.floor((difference/1000)%60),
      }
    }
    return{
      days:0,
      hours:0,
      minutes:0,
      seconds:0,
    }
  }
  const [timeLeft,setTimeLeft] = useState(calculateTimeLeft())
  

  useEffect(()=>{
    const timer = setInterval(()=>{
       setTimeLeft(calculateTimeLeft)
  },1000)
  return()=> clearInterval(timer)

    },[])
    
   
  return(
    <div className="flex gap-7.5 justify-center mt-10">
                <CountDowntBox number={timeLeft.day} text="Days"/>
                <CountDowntBox number={timeLeft.hours} text="Hours"/>
                <CountDowntBox number={timeLeft.minutes} text="Minutes"/>
                <CountDowntBox number={timeLeft.seconds} text="Seconds"/>               
     </div>
  )
}


const Banner = () => {

// const [time,setTime] = useState({
//   days:0,
//   hours:0,
//   minutes:0,
//   seconds:0,
// })

// let days=0
// let hours=0
// let minutes=0
// let seconds=0

// useEffect(()=>{
// const timeInterval = setInterval(()=>{
//     seconds++
//   setTime({
//   days,
//   hours,
//   minutes,
//   seconds,
// })

// },1000)
// return()=> timeInterval
// },[])

  return (
    <div className="bg-[url(./assets/Background.png)] bg-cover bg-center bg-no-repeat py-37.5 text-white">
        <Container>
            <div className='py-37.5 w-250 text-center mx-auto'>
              <div className='flex w-60.5 bg-[#ffffff10] backdrop-blur-[20px] py-2.5 text-[14px] font-semibold rounded-full mx-auto'>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <p>Ideas that spark change.</p>
              </div>
                <h1 className='text-[76px] leading-20.5 font-extrabold w-290.75 py-5 '>Connecting Minds to Shape Tomorrow's Big Ideas</h1>
                <p className='leading-6.25 w-183.25 mx-auto pb-10'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—exchanging ideas that spark growth, innovation, and meaningful change.</p>
                <div className='flex items-center mx-auto text-center ml-80'>
                  <Btn>Explore Schedule</Btn>
                  <button className='flex pl-10 items-center'>
                    <span className='px-5 py-5 rounded-full bg-primary border-4'>
                      <FaPlay />
                    </span>
                    <span className='pl-5'>
                      <p>Watch Video</p>
                    </span>

                  </button>                 
                </div>               
            </div>            
             <div>
              <div>
                <h1 className='text-[20px] font-bold leading-5.75 w-110 mx-auto'>Upcoming Speaker Reveal - Don't Miss Out</h1>              
              </div>
              <CountDown targetDate={"2027-06-30T23:59:59"}/>
          </div>
                      
        </Container>
      
    </div>
  )
}

export default Banner
