import React from "react";

const Messages = ({ msg }) => {
console.log('msg is',msg)
  return (
    <div>id:{msg.id}</div>
  );
};

export default Messages;
