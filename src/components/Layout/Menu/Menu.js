import {Image, Icon, Input} from 'semantic-ui-react'
import {useEffect, useState} from "react";
import Link from 'next/link'
import {map} from 'lodash'
import {Platform} from '@/api'
import styles from './Menu.module.scss';

const platformCtrl = new Platform();

export function Menu (props) {
    const {isOpenSearch} = props

    const [platforms, setPlatforms] = useState(null)
    console.log(platforms)

    useEffect(() => {
        (async () => {
            try {
                const response = await platformCtrl.getAll();
               setPlatforms(response.data)

            }catch (e) {
                console.error(e)
            }
        })()

    }, [])

    return (
        <div className={styles.platforms}>
            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/game/${platform.attributes.slug}`}>
                    <Image src={platform.attributes.icon.data.attributes.url} />
                    {platform.attributes.title}
                </Link>

            ))}
        </div>
    )
}