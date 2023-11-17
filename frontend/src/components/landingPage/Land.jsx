import style from './style.module.css'
import {motion} from 'framer-motion'
import img2 from '../../images/img2.jpg';
import {useNavigate} from 'react-router-dom';
const Land = () => {
    const navigate=useNavigate();
    const arr=[{title:'Dentist',desc:"Teething problem?Schedule a dental checkup",img:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        ,{title:'Gynecologist',desc:"Explore for women's health, pregrancy and infertility treatments",img:"https://plus.unsplash.com/premium_photo-1661606399669-c84a614fb976?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        ,{title:'Dietitian',desc:"Get guidence on eating right, weight managment and sports nutrition",img:"https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]
  return (
    <div className={style.head}>
        <motion.div 
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration:1}}
        className={style.glass}>
            <motion.h1
                initial={{scale:0.7}}
                whileHover={{
                    scale:1,
                    
                }}
            >CAREJAR</motion.h1>
        </motion.div>
        <div className={style.text}>
            <div className={style.content}>
                <motion.h1
                    initial={{opacity:0,scale:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{duration:1,delay:0.3}}
                >Collective well-being uplifts society and <br/>we uplift 
                collective health.</motion.h1>
                <motion.p
                    initial={{opacity:0,scale:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{duration:1,delay:1}}
                >Nothing is more Important than your Health.<br/> <br/>Not Feeling Well 
                <br/>Book an appointment with our professional Doctors</motion.p>
                <a href="#book"><motion.button 
                    initial={{
                        scale:0.8,y:-100
                    }}
                    animate={{y:0}}
                    transition={{delay:1,duration:1}}
                    whileHover={{
                        scale:1,
                        color:'white',
                        background: 'black'
                    }}
                >Book</motion.button></a>
            </div>
        </div>
        <div >
            <div id="book" style={{padding:'20px'}}>
                <h1 style={{fontSize:'40px'}}>Book an appointment for an in-clinic consultation</h1>
                <p>Find experienced Doctors across all specialties</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center mt-10">
                {arr.map((ele,index)=>{
                    return <motion.div 
                        initial={{opacity:0.4,scale:0.4}}
                        whileInView={{
                            opacity:1,scale:1
                        }}
                        transition={{duration:0.5+1}}
                        key={index} className=' shadow-md flex flex-col cursor-pointer' onClick={(e)=>{
                        e.preventDefault();
                        navigate("/other",{state:{title:ele.title}})
                    }}>
                        <div className='w-full  flex justify-center'><img style={{objectFit:'cover'}} src={ele.img} width='300px' height='300px'/></div>
                        <h3 className='text-xl p-2'>{ele.title}</h3>
                        <p className='p-2'>{ele.desc}</p>
                    </motion.div>
                })}</div>
                <motion.div 
                    initial={{opacity:0,scale:0}}
                    whileInView={{
                        opacity:1,scale:1
                    }}
                    transition={{duration:3}}
                    className='flex justify-center m-10 text-3xl'>Oops That's it for Now...</motion.div>
            </div>
        </div>
    </div>
)}

export default Land;