import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Home</h1>
      <Link to="new-user">Novo Usuário</Link>
      <Outlet />
      {/* <Routes>
        <Route path="new-user" element={<p>Seja Bem-vindo, novo usuário!</p>} />
      </Routes> */}
    </section>
  );
};

export default Welcome;
