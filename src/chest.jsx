import press from './pench press.png'
import ipress from './Incline Bench Press.png'
import deck from './Pec Dec.png'
import cab from './cable 3adawia.jpeg'
import lcab from './Standing Low to High Cable Fly.jpeg'
import ham from './Hammer Strength Bench Press.jpeg'
function Chest(){
    return(
        <div className='min-h-96 lg:min-w-screen lg:min-h-screen shadow-lg shadow-white bg-gradient-to-r from-slate-700 to-slate-900 mx-2' id="chestgev">
            <p className='text-sm md:text-2xl: lg:text-5xl flex flex-row place-content-center'>Chest workout</p>
            <div className="flex flex-row items-end my-5 mx-2 min-w-10">
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={press} className='w-5/6 bg-white'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Dumbbell Bench Press</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={ipress} className='w-5/6  bg-white'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Incline Bench Press</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={deck} className='w-5/6  bg-white'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Pec Deck</label></div>

            </div>

            <div className="flex flex-row items-end  my-5 mx-2 min-w-10">
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={cab} className='w-2/3'></img><br/><label className='text-xs md:text-base lg:text-2xl '>Standing Cable Fly</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={lcab} className='w-5/6'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Standing Low to High Cable Fly</label></div>
                <div className='flex flex-col items-center  hover:bg-white duration-500 rounded-md hover:translate-x-2 hover:translate-y-2 hover:text-black'><img src={ham} className='w-2/3'></img><br/><label className='text-xs md:text-base lg:text-2xl'>Hammer Strength Bench Press</label></div>

            </div>

        </div>
    )
}
export default Chest