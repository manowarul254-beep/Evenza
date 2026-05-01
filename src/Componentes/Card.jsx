import React from 'react'
import { CiStar } from "react-icons/ci";

const Card = () => {
  return (
    <div className='flex justify-between items-center py-6 text-[30px] font-bold leading-7.5 bg-primary text-white'>
      <CiStar/>
      <h1>Latest Updates</h1>
      <CiStar />
      <h1>New Announcements</h1>
      <CiStar />
      <h1>Workshop Alerts</h1>
      <CiStar />
      <h1>Live Notices</h1>
      <CiStar />
      <h1>Event Countdown</h1>
      <CiStar />
      <h1>Workshop Alerts</h1>
    </div>
  )
}

export default Card
