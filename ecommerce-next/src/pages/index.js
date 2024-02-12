import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";

export default function Index() {

  const { user, layout } = useAuth();
  
  console.log(user);
  return (
    <div>
      <h2>Games Shop</h2>

      <Button primary>Ir a loggin</Button>
    

      {user ? (
        <div>
          <p>
            Hola, {user.firstname} {user.lastname}
          </p>
          <Button>Cerrar sesión</Button>
        </div>
      ) : (
        <div/>
      )}
    </div>

  );
}
