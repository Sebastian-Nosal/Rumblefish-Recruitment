import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import MovieCard from "../presentation/movieCard"
//import {recommendations as movies} from '../mock/db.json'
import { Action } from "../types/model.d"
export default function MoviesContainer()
{
  const {movies, handler} = useContext(AppContext)
  const [currentMovie,setCurrentMovie] = useState(0);

  useEffect(()=>{
    if(movies.length>0) setCurrentMovie(movies.length);
    else setCurrentMovie(0);
  },[movies])

  function decide(action:Action)
  {
    if(movies[currentMovie-1])
    {
      handler(action,movies[currentMovie-1].id)
    }
  }

  return (<div className="w-full h-[90vh] relative flex justify-center items-center md:items-start over">
    <div className="lg:top-12 md:top-4 relative w-full h-full md:h-0 ">
      {movies.map((movie,idx)=>
        (<MovieCard 
          title={movie.title}
          summary={movie.summary}
          imageURL={movie.imageURL}
          rating={movie.rating}
          idx={idx}
          key={movie.id}
          onSwipe={()=>handler(Action.Reject,movie.id)}
        />))}
    </div>

    <div className="fixed z-0 text-7xl text-zinc-500/50 font-mono font-semibold top-[35%] md:top-[40%] bottom-[45%] text-center select-none">
      {movies.length?"":"THAT'S ALL"}
    </div>
    <div className="w-[100vw] md:w-2/3 lg:w-3/4 flex flex-col md:flex-row p-4 fixed bottom-20 md:bottom-4">
      <button 
        className="bg-green-600 text-white font-bold h-full font-mono text-2xl w-full p-4 rounded mb-2 disabled:bg-gray-500 hover:bg-green-700 md:w-1/2 m4-2"
        disabled={!currentMovie}
        onClick={()=>decide(Action.Accept)}>
        Accept
      </button>
      <button 
        className="bg-red-600 text-white font-bold h-full font-mono text-2xl w-full p-4 rounded hidden sm:block  disabled:bg-gray-500 hover:bg-red-700 md:w-1/2 ms-4"
        disabled={!currentMovie}
        onClick={()=>decide(Action.Reject)}>
        Reject
      </button>
    </div>
  </div>)
}