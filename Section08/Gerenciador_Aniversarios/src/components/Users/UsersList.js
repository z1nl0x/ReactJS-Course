import React from "react";

import Card from "../UI/Card";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} - Data de Nascimento:{" "}
              {`${user.birthDate[2]}/${user.birthDate[1]}/${user.birthDate[0]}`}
              <button
                type="button"
                className={styles["btn-remover"]}
                onClick={() => props.onRemove(user.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
