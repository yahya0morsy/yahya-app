import Generator from "./Generator"
import { useRef } from "react"
function Hero(){
   const genrev = useRef<HTMLDivElement|null>(null)
    return(
     <div className='min-h-screen flex flex-col gap-10 
     items-center justify-center text-6xl font-semibold items-center mx-3.5' id="top">
        <div className="gap-4">
        <p className='text-sm md:2xl: lg:text-4xl flex flex-col items-center'>your online coatch</p>
        <h1 className="text-2xl md:text-4xl lg:text-6xl"><spam className='font-bold text-blue-600'>Grow</spam>muscles</h1>
        </div>
        <p className='text-xs sm:text-sm md:text-lg lg:text-2xl'>We’re thrilled to have you join our fitness community.
         Whether you’re just starting your fitness journey or you’re a seasoned athlete,
        our app is designed to help you achieve your goals and stay motivated.</p>
        <button className='border-2 border-blue-400 rounded-md py-2 px-2 blueshadow shadow-lg shadow-blue-700 duration-200' onClick={()=>{document.getElementById("genrev").scrollIntoView({behavior: "smooth"})}}><p className='text-lg md:text-4xl'>Start</p></button>
     </div>)
}
export default Hero