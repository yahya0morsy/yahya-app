import fraise from './Dumbbell front raise.jpeg'
import sraise from './Seated Dumbbell Press.jpeg'
import fpull from './Cable Face Pull.jpeg'
import cab from './cable 3adawia.jpeg'
import lcab from './Standing Low to High Cable Fly.jpeg'
import ham from './Hammer Strength Bench Press.jpeg'
function Shoulder(){
    return(
        <div className=' my-10 min-h-96 lg:min-w-screen lg:min-h-screen  bg-gradient-to-r from-slate-700 to-slate-900 mx-2 shadow-lg shadow-white' id="shouldgev">
            <p className='text-sm md:text-2xl: lg:text-5xl flex flex-row place-content-center'>Shoulder workout</p>
            <div className="flex flex-row items-end my-5 mx-2 min-w-10">
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={fraise} className='w-4/6 bg-white'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Dumbbell front raise</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={sraise} className='w-5/6  bg-white'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Seated Dumbbell Press</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={fpull} className='w-5/6  bg-white'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Cable Face Pull</label></div>

            </div>

            <div className="flex flex-row items-end my-5 mx-2  min-w-10">
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={cab} className='w-2/3'></img><br/><label className='text-xs md:text-base lg:text-2xl '>Standing Cable Fly</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={lcab} className='w-5/6'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Standing Low to High Cable Fly</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={ham} className='w-2/3'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Hammer Strength Bench Press</label></div>

            </div>

        </div>
    )
}
export default Shoulder