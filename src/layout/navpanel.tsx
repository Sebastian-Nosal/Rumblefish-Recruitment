import { useContext } from "react"
import { AppContext } from "../App"

export default function NavPanel() {
  const {movies,mode,setMode} = useContext(AppContext)
  return (
    <div className="fixed bottom-0 md:static w-full md:w-1/3 lg:w-1/4 h-[10vh] md:h-[100vh]  md:bg-white md:shadow-md md:dark:bg-zinc-700 font-sans text-gray-800/70 dark:text-gray-100 m-0">
      <div className="flex h-full items-center justify-between px-8 bg-gradient-to-tr from-yellow-400 to-amber-500  text-gray-200 md:hidden">
        <span className="text-xl">Recomendations: {movies.length}</span>
        <span className="flex items-center"><strong className="px-2">Mode: </strong>
          <button className="border-gray-200 rounded-full border p-1" onClick={setMode}>{mode
            ?(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>)
            :(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>)}
          </button>
        </span>
      </div>
      <div className="hidden h-[100vh] md:block">
        <div className="flex h-1/10 bg-gradient-to-tr from-yellow-400 to-amber-500 justify-center items-center p-4">
          <h1 className="text-3xl font-semibold text-gray-100 text-center">Choose Movie to watch!</h1>
        </div>
        <div className="h-4/5 max-h-4/5">
          <div className="p-2 mx-auto grid grid-cols-2 lg:grid-cols-3 ">
            {movies.map(movie=>(
              <div key={movie.id} className="p-3">
                <img  className="shadow-xl rounded-md" src={movie.imageURL} alt={movie.title}/>
              </div>))}
          </div>
        </div>
        <div className="h-1/10 w-full">
          <div className="flex w-full px-4 justify-between items-end">
            <span className="text-xl">Recomendations: {movies.length}</span>
            <span className="flex items-center"><strong className="px-2">Mode: </strong>
              <button className="border-gray-200 rounded-full border p-1" onClick={setMode}>{mode
                ?(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>)
                :(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>)}
              </button>
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}