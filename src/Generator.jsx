import img from './pngwing.com.png'
import Chest from './chest'
import Shoulder from './shoulder'
function Generator(){
  return(
    <div className='min-h-96 lg:min-w-screen lg:min-h-screen flex flex-col'id="genrev">
      <div className=' place-self-center text-2xl md:text-3xl lg:text-5xl my-5 min-w-96'>Witch muscle are we training today</div>
      <br/>
      <div className='flex flex-row items-center justify-center '>
      <div className='my-10 '>
      <button className='w-14 md:w-24 lg:w-36  mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'
      onClick={()=>{document.getElementById("chestgev").scrollIntoView({behavior: "smooth"})}}>Chest</p></button>
      <button className='w-16 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'
      onClick={()=>{document.getElementById("shouldgev").scrollIntoView({behavior: "smooth"})}}><p className='text-sm md:text-3xl lg:text-4xl'>Soulder</p></button>
      <br/><br/>
      <button className='w-14 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'>Back</p></button>
      <button className='w-14 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'>Bicep</p></button>
      </div>
      <img src={img} className=' size-1/4 place-content-center hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2' ></img>
      <div className=' my-10 '>
      <button className='w-14 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'>Tricep</p></button>
      <button className='w-14 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'>Legs</p></button>
      <br/><br/>
      <button className='w-14 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'>Home train</p></button>
      <button className='w-14 md:w-24 lg:w-36 mx-1 md:mx-4 border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200'><p className='text-sm md:text-3xl lg:text-4xl'>Rest</p></button>
      </div>
      </div></div>
    
  )
}
export default Generator