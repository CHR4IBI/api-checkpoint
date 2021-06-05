import React from "react";
import styled from "styled-components";
import "./UserCard.css";

const UserCard = ({ name, id, address, email, phone, username, website }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <h2>Username : {username}</h2>
            <h2>Phone : {phone}</h2>
            <h2>Email : {email}</h2>
            <h2>Adress : {address}</h2>
            <h2>Website : {website}</h2>
          </div>
        </div>
        <div className="face face2">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
