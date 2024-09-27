import {JoinLayout} from '@/layouts';

import styles from './sign-in.module.scss';

export default function SignIn() {
    return (
        <>
            <JoinLayout >
                <div className={styles.signIn}>
                    <h3>Iniciar Sesion</h3>
                </div>
            </JoinLayout>
        </>
    );
}