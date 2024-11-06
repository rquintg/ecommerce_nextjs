import {Image, Icon, Input} from 'semantic-ui-react'
import {useEffect, useState} from "react";
import Link from 'next/link'
import {map} from 'lodash'
import classNames from "classnames";
import {Platform} from '@/api'
import styles from './Menu.module.scss';
import {log} from "next/dist/server/typescript/utils";

const platformCtrl = new Platform();

export function Menu (props) {
    const {isOpenSearch} = props
    const [platforms, setPlatforms] = useState(null)
    const [showSearch, setShowSearch] = useState(false)
    const openCloseSearch = () => setShowSearch((prevState) => !prevState);

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

            <button className={styles.search}
                    onClick={openCloseSearch}>
                <Icon name="search"/>
            </button>

            <div className={classNames(styles.inputContainer, {[styles.active]: showSearch })}>
                <Input id="search-games"
                       placeholder="Buscar Juegos..."
                       className={styles.input}
                       focus={true}
                />
                <Icon name="close"
                      className={styles.closeInput}
                      onClick={openCloseSearch}
                />
            </div>
        </div>
    )
}