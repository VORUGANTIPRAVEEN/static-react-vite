import React from 'react'

const User=({id,name,key})=>{
  console.log(id)
  return (
    <div key={key}>
        <span>id:{id}</span>
        <span>Name:{name}</span>
    </div>
  )
}
export default User;
