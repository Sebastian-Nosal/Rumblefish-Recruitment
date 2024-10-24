import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { ErrorNotification } from "../types/model";

export default function ErrorContainer()
{
  const {error} = useContext(AppContext);
  const [notification,setNotification] = useState<ErrorNotification|null>(null);

  useEffect(()=>{
    if(error)setNotification(error);
    else setNotification(null)
  },[error])

  if(notification != null) return <ErrorNote type={notification.type} description={notification.description} header={notification.header} hide={()=>setNotification(null)}/>
  else return <></>
}

function ErrorNote({type,description,header,hide}:{type:string,description:string,header:string,hide:()=>void}) {
  return(<div data-testid="error-note" className="fixed flex top-0 right-0 w-full md:bottom-6 md:right-2 md:top-auto md:w-1/4 p-4 bg-fireorange text-gray-100/80 shadow-lg md:rounded-lg">
    <div className="flex items-center text-3xl me-2 justify-center float-start w-1/4">
      <span className="border-2 w-14 text-center border-gray-100 rounded-full p-2 font-bold">!</span>
    </div>
    <div className="float-end w-3/4">
      <h1 className="text-xl">{type}</h1>
      <div className="text-lg font-semibold">{header}</div>
      <div className="text-lg">{description}</div>
      <div className="absolute right-2 top-2 cursor-pointer" onClick={()=>hide()}>&#10006;</div>
    </div>
    <div className="clear-both"></div>
  </div>)
}