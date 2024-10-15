import Link from "next/link";
import {Icon, Image} from "semantic-ui-react";
import {useAuth} from '@/Hooks';
import {useRouter} from "next/router";

import styles from "./JoinLayout.module.scss";

export  function JoinLayout (props) {
    const {children} = props;
    const {user} = useAuth();
    const router = useRouter();

    if (user) router.push('/');
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Link href="/">
                    <Image src="/images/logo.png"alt="img"/>
                </Link>

                <Link href="/">
                    <Icon className="close" />
                </Link>
            </div>

            <div className={styles.blockLeft}>{children}</div>

            <div className={styles.blockRight}/>
        </div>
    )
}