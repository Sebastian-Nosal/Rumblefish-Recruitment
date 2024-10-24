import /*axios,*/ {/*AxiosRequestConfig, AxiosResponse, */ isAxiosError } from 'axios';
import { Action, Movie, Url } from '../types/model.d';
import {recommendations} from "../mock/db.json"

export async function getMovies()//: Promise<Movie[]>
{
  //const requestConfig:AxiosRequestConfig = {};
  try {
    //const {data}:{data:Movie[]} = await axios.get(Url.getMovies,requestConfig) 
    const data = await Promise.resolve(recommendations)
    return data
  }
  catch(err){
    if(isAxiosError(err)){
      throw new ApiCallError("Cannot fetch data from backend",err.code||"501",Url.acceptMovie)
    }
    throw new ApiCallError("Unknown Error","0");
  }
}

export async function putDecision(action:Action,movie:Movie): Promise<boolean> {
  let url:string = "";
  /*
    const requestBody = {
      ...movie 
    }
    const requestConfig:AxiosRequestConfig = {}; 
  */
  if(action === Action.Accept) {
    url = Url.acceptMovie;
  }
  else if (action === Action.Reject) {
    url = Url.rejectMovie;
  }
  else {
    throw new ApiCallError("Unknown action","400");
  }
  if(url.includes("<id>")&&movie.id) {
    url = url.replace("<id>",movie.id);
  }
  else {
    throw new ApiCallError("Improper URL","400");
  }
  try {
    //const {status}:AxiosResponse= await axios.put(url,requestBody,requestConfig);
    const status = await Promise.resolve(200);
    if(status>=200&&status<=299) return true;
    else return false;
  }
  catch(err)
  {
    if(isAxiosError(err))
    {
      const status = (err.status||0).toString();
      throw new ApiCallError(err.message,status,url);
    }
    throw new ApiCallError("Unknown Error","0");
  }
}

export class ApiCallError extends Error {
  errorCode: string;
  url?: string;

  constructor(message:string,errorCode:string,url?:string)
  {
    super(message);
    this.name = "ApiCallError";
    this.errorCode = errorCode;
    this.url = url;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}