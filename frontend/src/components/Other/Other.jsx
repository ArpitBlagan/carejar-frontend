import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom"
import { Puff } from 'react-loading-icons'
import cal from '../../images/calendar.svg'
import thumb from '../../images/thumb.svg'
import tick from '../../images/tick.svg'
import axios from 'axios'
import {motion} from 'framer-motion'
const Other = () => {
  const location=useLocation().state;
  const navigate=useNavigate();
  const [load,setL]=useState(true);
  const [items,setI]=useState([]);
  const getData=async()=>{
    const data=await axios.post('https://carejar.onrender.com/api/v1/doctors',
    {category:location.title});
    console.log(data);setL(false);
    setI(data.data);
  }
  useEffect(()=>{
    getData()
  },[]);
  return (
    <div>
      <div>
        <button className="p-3 left-1 top-1 rounded-md bg-black text-white fixed z-10"
          onClick={(e)=>{
            e.preventDefault();
            navigate("/");
          }}
        >Home</button>
      </div>
      <div>
          {load?
            <div className="flex justify-center items-center h-[600px]" >
            <div><Puff stroke="#000" strokeOpacity={.125} /></div>
            </div>
          :
            items.map((ele,index)=>{
              return <div className="flex m-10 shadow-xl p-2 relative">
                <div className="relative">
                  <img src={ele.image} className="h-[250px] w-[250px] rounded-full object-cover"/>
                  <div className="absolute bottom-8 right-5 bg-white rounded-full"><img src={tick} height="30px" width="30px" className=" object-fill"/></div>
                </div>
                <div className="flex">
                  <div className="m-3">
                    <h1 className="text-blue-500 text-xl">DR. {ele.name}</h1>
                    <p className="text-gray-500">{ele.category}</p>
                    <p className="text-gray-500">{ele.description}</p>
                    <p className="mt-5">{ele.location}</p>
                    <p className="text-gray-500 mt-3">₹{ele.price} consultating fee at clinic</p>
                    <div className="mt-5 underline flex  py-2"><div className="bg-green-500 flex justify-around text-semibold mr-5 p-1"><img src={thumb} height="20px" width="20px"/><p>0%</p></div> <p>{ele.reviews.length} Paitent Stories</p></div>
                  </div>
                  <div >
                    <h1 className="absolute bottom-20 right-8 text-green-600 font-semibold flex"><img className="mr-2" height='20px' width='20px' src={cal}/> Available Today</h1>
                    <motion.button 
                    initial={{scale:0.8}}
                    whileHover={{scale:1}}
                    className="absolute bottom-3 right-7 px-3 text-center p-1 bg-blue-500 text-white font-sm rounded-md">Book Appointment <br/>
                    <span className="font-xs">No Booking Fee</span></motion.button>
                  </div>
                </div>
              </div>
            })
          }
      </div>
    </div>
  )
}

export default Other