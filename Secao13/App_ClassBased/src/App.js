import UserFinder from "./components/UserFinder";
import UsersContext from "./context/users-context";

function App() {
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Pam" },
    { id: "u3", name: "Lucy" },
  ];

  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <div>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
