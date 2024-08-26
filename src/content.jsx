
import './style.css'
import search from '../src/assets/icons8-search-50.png'
import lence from '../src/assets/7123028_lens_google_icon.png'
import mice from '../src/assets/7123011_google_mic_icon.png'



function Content(){
    return(
        <>
        <div className='content'> 
       <h1>Google</h1>
         <div className='search'>
          <div className="sicon">
            <img className='img1' src={search} alt="" />
          </div>
         <div className='.input'><input type="text" /></div> 
          <div className="icons">
            <img className='img2' src={mice} alt="" />
            <img className='img2'  src={lence} alt="" /> 
          </div>
         </div>
         <div className='text'>
          <div className='txt1'>Google search</div>
          <div className='txt1'>I'am Feeling Lucky</div>
         </div>
         <div className='lang'>
          <h4>Google offered in: &nbsp;<span className='lang1'>हिन्दी &nbsp;বাংলা &nbsp; తెలుగు &nbsp; मराठी &nbsp; தமிழ் &nbsp;  ગુજરાતી &nbsp; ಕನ್ನಡ &nbsp; മലയാളം &nbsp; ਪੰਜਾਬੀ</span> </h4>
         </div>
     </div>
     </>
    )
}

export default Content