import { ErrorNotification } from "../types/model";
import content from '../assets/content.json'

export default class Factory {
  static createErrorNotification(code:string,message:string) : ErrorNotification {
    let type:"Client-Side" | "Server-Side" | "Unknown";
    let header:string = "";
    let description:string = "";
    switch (true) {
    case /^[4][0-9]{2}$/.test(code):
      type= "Client-Side";
      header = content.errors.client.header; 
      description = content.errors.client.message;
      break;
    case /^[5][0-9]{2}$/.test(code):
      type= "Server-Side";
      header = content.errors.server.header; 
      description = content.errors.server.message;
      break;
    default:
      type= "Unknown";
      header = content.errors.unknown.header; 
      description = content.errors.unknown.message;
    }

    const newErrorNotification: ErrorNotification  = {
      header:header,
      description: description,
      type: type,
      details: message
    }
    return newErrorNotification;
  }
}