import { useContext } from "react"
import { AppContext } from "../App"
import Loading from "../presentation/loading";
import MoviesContainer from "../container/moviesContainer";
import ErrorContainer from "../container/errorContainer";

export default function MainPanel()
{
  const {loading} = useContext(AppContext);
  return (<div className="w-full h-[90vh] relative md:h-[100vh] md:w-2/3 lg:w-3/4 bg-gray-100 dark:bg-zinc-600 dark:text-gray-200 ">
    {loading?
      <Loading/>:
      <MoviesContainer/>}
    <ErrorContainer/>
  </div>)
}