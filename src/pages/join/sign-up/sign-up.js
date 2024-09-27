import {JoinLayout} from '@/layouts';
import {RegisterForm} from "@/components/Auth";
import Link from "next/link";

import styles from './sign-up.module.scss';

export default function SignUp() {
    return (
        <>
            <JoinLayout>
                <div className={styles.signUp}>
                    <h3>Crea tu Cuenta</h3>
                    <RegisterForm />

                    <div className={styles.actions}>
                        <Link href="/join/sign-in">Atras</Link>
                    </div>
                </div>
            </JoinLayout>
        </>
    );
}