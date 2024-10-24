export type Movie = {
  id:string,
  imageURL: string;
  title:string;
  summary:string;
  rating:number;
}

export enum Action {
  Accept = "Accept",
  Reject = "Reject",
}

export enum Url {
  getMovies = "http://localhost:3001/recommendations",
  rejectMovie = "https://backend-domain.example/recommendations/<id>/reject",
  acceptMovie = "https://backend-domain.example/recommendations/<id>/accept",
}

export interface ErrorNotification {
  header:string,
  description: string,
  type: "Client-Side"|"Server-Side"|"Unknown",
  details?: string
}