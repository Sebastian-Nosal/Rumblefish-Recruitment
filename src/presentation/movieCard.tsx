import { useState, TouchEvent } from "react";
import useMedia from "../hooks_and_utils/useMedia";

type propType = {
  title: string;
  summary: string;
  imageURL: string;
  rating: number;
  idx: number;
  onSwipe: () => void;
};

export default function MovieCard({title,summary,imageURL,rating,idx,onSwipe}: propType) {
  const [startPos, setStartPos] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [summaryVisibility,setSummaryVisibility] = useState<boolean>(false);
  const isMobile: boolean = useMedia("(max-width: 768px)");
  const isMedium: boolean = useMedia("(max-width: 1280px)");

  const handleSwitchVisibility = () => {
    setSummaryVisibility(!summaryVisibility)
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setStartPos(touch.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (startPos !== null) {
      const touch = e.touches[0];
      const diffX = touch.clientX - startPos;
      setTranslateX(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(translateX) > 100) {
      setIsVisible(false);
      onSwipe();
    } else {
      setTranslateX(0);
    }
    setStartPos(null);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setStartPos(e.clientX);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (startPos !== null) {
      const diffX = e.clientX - startPos;
      setTranslateX(diffX);
    }
  };

  const handleDragEnd = () => {
    if (Math.abs(translateX) > 10) {
      setIsVisible(false);
      onSwipe();
    } else {
      setTranslateX(0);
    }
    setStartPos(null);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`absolute  max-h-[80vh] mx-auto z-${ 
        10 * (idx - 5)
      }  transition-all ease-out duration-300 transform-none top-0 bottom-0 left-0 right-0 `}
      style={{
        transform: `translateX(${translateX}px) translateY(${
          isMedium ? 0 : 5 * idx
        }px)`,
        right: isMobile ? 0 : 6 * idx,
      }}
      draggable={true}
      onTouchStart={(ev) => handleTouchStart(ev)}
      onTouchMove={(ev) => handleTouchMove(ev)}
      onTouchEnd={handleTouchEnd}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      <div className={`relative w-5/6 md:w-3/4 lg:1/2 xl:w-1/3 aspect-video mx-auto mt-4 rounded-lg p-4`}>
        
        <div className="relative border border-zinc-800 rounded-lg">
          <div className="rounded-lg">
            <img src={imageURL} alt={title} className=" w-auto object-fill rounded-lg"/>
          </div>
          <div className={"absolute rounded-b-lg bottom-0 bg-zinc-700/90 h-2/5 w-full p-4 text-gray-100 "+ (summaryVisibility?"h-2/5":"h-0 hidden")}>
            <span className="text-xl">Summary:</span>
            <p>{summary}</p>
            <button 
              onClick={()=>handleSwitchVisibility()}
              className="absolute top-2 right-2 ">&#10006;</button>
          </div>
          <div className="absolute bottom-2 right-2">
            <button 
              onClick={()=>handleSwitchVisibility()}
              className={"block border-2 w-[40px] h-[40px] rounded-full border-gray-100 bg-gray-400/40 text-gray-100 text-2xl text-center "+ (summaryVisibility?"hidden":"block")}>
                i
            </button>
          </div>
          <div className="absolute top-0 w-full text-zinc-800  ">
            <div className="bg-gradient-to-tr from-yellow-400 to-amber-500 p-2 text-center rounded-t-lg shadow-xl">
              <h1 className="text-2xl font-bold font-mono">{title}</h1>
            </div>
           
            <div className="bg-white/80 text-gray-800 font-bold text-2xl p-4  text-center rounded-b-xl w-[4rem] mr-4 ml-auto">
              {rating}
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
  );
}
