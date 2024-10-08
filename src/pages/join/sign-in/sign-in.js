import {JoinLayout} from '@/layouts';
import Link from "next/link";
import {LoginForm} from '@/components/Auth';

import styles from './sign-in.module.scss';

export default function SignIn() {
    return (
        <>
            <JoinLayout >
                <div className={styles.signIn}>
                    <h3>Iniciar Sesion</h3>
                    <LoginForm />

                    <div className={styles.actions}>
                        <Link href="/join/sign-up">
                            No tienes una cuenta?
                        </Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    );
}