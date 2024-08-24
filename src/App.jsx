
import Hero from "./Hero.jsx"
import Workout from "./workout.jsx"
import Generator from "./Generator.jsx"
import Chest from "./chest.jsx"
import Shoulder from "./shoulder.jsx"
import UPpage from "./up.jsx"
function App() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
     from-slate-800 to-slate-950 text-white text-sm '>
      <Hero/>
      <Generator/>
      <Chest/>
      <Shoulder/>
      <UPpage/>
    </main>
  )
}
export default App