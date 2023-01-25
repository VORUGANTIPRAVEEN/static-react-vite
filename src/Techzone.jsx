import React, { useEffect, useState } from 'react'
import msg from './techmessages.json'
export default function Techzone() {
    const[Messages,setMessages]=useState(["error"]);
    useEffect(()=>{
        setMessages(msg.data.items)
    },[Messages])
    console.log("messages ",Messages)
  return (
    <div>
      techZone Messages 
      <div>
        {  Messages.map((val)=>{
              console.log("inside map",val)
              return <div key={val.id}>
                <div>Message id:{val.id}</div>
                <div>Message subject:{val.subject}</div>
                <div>body</div>
                <div dangerouslySetInnerHTML={{__html:val.body}}></div>
                <hr/>
              </div>
            })
        }
      </div>
    </div>
  )
}
