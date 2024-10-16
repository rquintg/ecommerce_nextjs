import { Button } from 'semantic-ui-react'
import {useAuth} from '@/Hooks';

export default function index() {
    const {user, logout} = useAuth();

    console.log(user);

  return (
    <div>
        <h2>Games shop</h2>

        <Button primary> Ir al login </Button>

        {
            user ? (
                <div>
                    <h3> Bienvenido {user.firstname} {user.lastname} </h3>
                    <Button onClick={logout}> Cerrar sesión </Button>
                </div>
            ) : (
                <div>
                    <a href="/join/sign-in">
                        Iniciar sesión
                    </a>
                </div>
            )
        }
    </div>
  );
}