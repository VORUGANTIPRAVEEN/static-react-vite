import React, { useEffect, useState } from 'react'
import Messages from './Messages';
import one from './One.json'
export default function Static() {
    const[data,setdata]=useState(["null"])
    useEffect(()=>{
      setdata(one.Messages);
    },[])
    console.log(data);
  return (
    <div>
        <h1>Static Messages here</h1>
        {
            data.map((meta)=>{
              return<div key={meta.id}>
                <span>id: {meta.id}</span><br />
                <span>subject: {meta.subject}</span><br />
                <span>body: {meta.body}</span><br />
                <span>view count: {meta.body}</span><br />
              </div>  
            })
        } 
    </div>
  )
}
