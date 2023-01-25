import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
import UserCard from "./UserCard";
import { Spinner } from "react-bootstrap";
import Error from "./Error";
const UserList = () => {
  const [listOFUsers, setListOFUsers] = useState([]);
  const [bg, setBg] = useState(true);
  const [isLaoding, setIsLaoding] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const Url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(Url)
      .then((repense) => {
        setListOFUsers(repense.data);
        setIsLaoding(false);
        setBg(true);
      })
      .catch((error) => {
        setIsLaoding(false);
        setBg(false);
      });
  };
  return (
    <div className="serList">
      {isLaoding ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <div>
          {!bg ? (
            <Error />
          ) : (
            <div>
              <h1>Users List</h1>
              <div>
                <div className="Cards">
                  {listOFUsers.map((el) => (
                    <UserCard user={el} key={el.id} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default UserList;
