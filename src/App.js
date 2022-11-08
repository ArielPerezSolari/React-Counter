import React from "react";
import "./style.css";
import {useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const date = new Date()
  const [hour, setHour] = useState({
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  });
 
  return (
    <div>
        <h1>counter : {count}</h1>
        <h2>time : {hour.h}: {hour.m}: {hour.s} </h2>
        <button onClick={()=>{
          setCount(count +1)
          setHour({
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
          });
        }}></button>
    </div>
  );
}
