import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";

export default function Index() {

  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Games Shop</h2>

      <Button primary>Ir a loggin</Button>
    

      {user ? (
        <div>
          <p>
            Hola, {user.firstname} {user.lastname}
          </p>
          <Button onClick={logout}>Cerrar sesión</Button>
        </div>
      ) : (
        <div>
          <a href="/join/sign-in">
            Iniciar sesión
          </a>
        </div>
      )}
    </div>

  );
}
