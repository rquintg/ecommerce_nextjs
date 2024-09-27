import {JoinLayout} from '@/layouts';

import styles from './sign-up.module.scss';

export default function SignUp() {
    return (
        <>
            <JoinLayout>
                <div className={styles.signUp}>
                    <h3>Registrarse</h3>
                </div>
            </JoinLayout>
        </>
    );
}