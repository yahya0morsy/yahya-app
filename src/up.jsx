import Hero from "./Hero"
function UPpage(){
    return(
        <div className='border-2 border-slate-700 position: fixed text-sm md:text-lg lg:text-2xl text-white font-bold bg-slate-600 hover:bg-sky-900 shadow-sm shadow-white bottom-2 right-2'><button onClick={()=>{document.getElementById("top").scrollIntoView({behavior: "smooth"})}}>Up page</button></div>
    )
}
export default UPpage