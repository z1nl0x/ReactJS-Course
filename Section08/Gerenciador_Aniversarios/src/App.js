import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Card from "./components/UI/Card";
import styles from "./components/Users/UsersList.module.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uBirthDate) => {
    const birthDateArray = uBirthDate.split("-");

    setUsersList((prevListState) => {
      return [
        ...prevListState,
        {
          name: uName,
          birthDate: birthDateArray,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const removeUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList.filter((user) => user.id !== userId)];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 ? (
        <UsersList users={usersList} onRemove={removeUserHandler} />
      ) : (
        <Card className={styles.users}>
          <p>Nenhuma pessoa adicionada ainda.</p>
        </Card>
      )}
    </div>
  );
}

export default App;
