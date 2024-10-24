import { Action, ErrorNotification, Movie } from "./model"

export type ContextType = {
  movies: Movie[],                 
  handler: (action: Action, id: string) => void,
  loading: boolean,
  error: ErrorNotification|null,
  setMode: ()=>void
  mode: boolean
}