<<<<<<< HEAD
import React from "react";

const Notification = ({ message }) => {
  if (message.type === null || message.content === null) {
    return null;
  }
  return <div className={message.type}>{message.content}</div>;
=======
const Notification = ({ info }) => {
  if (!info.message) {
    return;
  }

  const style = {
    color: info.type === "error" ? "red" : "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={style}>{info.message}</div>;
>>>>>>> 3716055c2e1ef5b4adcd7ff7c58a4f98d4b9b912
};

export default Notification;
