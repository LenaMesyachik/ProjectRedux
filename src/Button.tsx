import s from "./App.module.css";
import React, {ChangeEvent} from "react";

export type ButtonPropsType={
    name: string,
    className?: string,
    /*callback:(value:number)=>void*/
}
export const Button  = (props:ButtonPropsType) => {

  /* const handler =  (e: ChangeEvent<HTMLInputElement>) => {
       props.callback(e.currentTarget.valueAsNumber)}


    return (
    <button className={props.className} onClick={handler}>{props.name}</button>*/
   /* )*/
}