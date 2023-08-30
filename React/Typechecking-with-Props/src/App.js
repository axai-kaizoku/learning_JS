import React from "react";
import "./App.css";
import users from "./userDb";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="app">
      {users.map(({ id, name, designation, isAdmin, photo }) => (
        <UserCard
          key={id}
          name={name}
          designation={designation}
          isAdmin={isAdmin}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default App;
