import './style.css'
import lab from '../src/assets/icons8-lab-48.png'
import app from '../src/assets/58420938_9343386.png'
import profile from '../src/assets/pic3.jpg'
function Navbar(){
    return(
        <>
        <div className='nav'>
       <div className='about'>
        <span>About</span>
        <span>Store</span>
       </div>
       <div className='gmail'>
       <span>Gmail</span>
       <span>Images</span>
       <img className='img2' src={lab} alt="" />
       <img  className='img1' src={app} alt="" />
       <img  className='img3' src={profile} alt="" />

       </div>
     </div>
     </>
    )
}

export default Navbar