import { createContext, useEffect, useState } from 'react'
import { ContextType } from './types/components';
import { Action, ErrorNotification, Movie } from './types/model';
import { ApiCallError, getMovies, putDecision } from './hooks_and_utils/apiHandler';
import Factory from './hooks_and_utils/factory';
import NavPanel from './layout/navpanel';
import MainPanel from './layout/mainpanel';


const contextDefaults:ContextType = {
  loading:true,
  movies: [],
  handler: ()=>{},
  error: null,
  setMode: ()=>{},
  mode:false
} 
export const AppContext = createContext(contextDefaults);

export default function App ():React.JSX.Element {
  const [movies,setMovies] = useState<Movie[]>([]);
  const [loading,setLoading] = useState(true);
  const [mode,setMode] = useState<boolean>(false)
  const [err,setErr] = useState<ErrorNotification|null>(null);

  useEffect(()=>{
    try {
      setLoading(true);
      getMovies()
        .then(newMovies=>{
          setMovies(newMovies)
          setLoading(false)
        })
        .catch(err=>{
          if(err instanceof ApiCallError) {
            setErr(Factory.createErrorNotification(err.errorCode,err.message))
          }
          console.log(err);
        })
    }
    catch(err) {
      if(err instanceof ApiCallError) {
        setErr(Factory.createErrorNotification(err.errorCode,err.message))
      }
      console.log(err);
    }
  },[])

  useEffect(()=>{
    document.body.classList.toggle("dark")
  },[mode,setMode])

  function switchMode(){
    setMode(!mode)
  }

  function handler(action:Action,id:string) {
    let selectedElement: Movie | undefined;
    const tmp: Movie[] = movies.filter(el => {
      if (el.id === id) {
        selectedElement = el;
        return false;
      }
      return true; 
    });
    setMovies(tmp);
    if(selectedElement)
    {
      setLoading(true);
      putDecision(action,selectedElement)
        .then(data=>{
          setLoading(false)
          if(!data) {
            setErr(Factory.createErrorNotification("400","Error during sending request."))
          }
        })
        .catch(err=>{
          setLoading(false)
          let notification:ErrorNotification;
          if(err instanceof ApiCallError){
            notification = Factory.createErrorNotification(err.errorCode,err.message)
          }
          else {
            notification = Factory.createErrorNotification("0","Unknown");
          }
          setErr(notification)
        })
    }
  }

  return (
    <AppContext.Provider value={{handler:handler,movies:movies,error:err,loading:loading, setMode:switchMode,mode:mode}}>
      <div className="w-[100vw] max-h-[100vh] h-[100vh] flex flex-col md:flex-row-reverse overflow-hidden">
        <MainPanel/>
        <NavPanel/>
      </div>

    </AppContext.Provider>
  )
}