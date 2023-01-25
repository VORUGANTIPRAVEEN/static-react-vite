import React from "react";
import { Card } from "react-bootstrap";
import avatar from "../src/assets/men.png";
const UserCard = ({ user }) => {
  const arr = ["Info"];
  return (
    <div>
      {arr.map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2">
          <Card.Header>
            {" "}
            <img src={avatar} alt="avatar" style={{ width: "200px" }} />{" "}
          </Card.Header>
          <Card.Body style={{ height: "180px" }}>
            <Card.Title>{user.name} </Card.Title>
            <Card.Text>
              Address: {user.address.suite} {user.address.street}{" "}
              {user.address.city}
            </Card.Text>
            <Card.Text>Phone number: {user.phone}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserCard;
