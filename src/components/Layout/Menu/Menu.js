import {Image, Icon, Input} from 'semantic-ui-react'
import {useEffect, useState} from "react";
import {Platform} from '@/api'
import styles from './Menu.module.scss';

const platformCtrl = new Platform();

export function Menu (props) {
    const {isOpenSearch} = props

    const [platform, setPlatform] = useState(null)
    console.log(platform)

    useEffect(() => {
        (async () => {
            try {
                const response = await platformCtrl.getAll();
               setPlatform(response.data)

            }catch (e) {
                console.error(e)
            }
        })()

    }, [])

    return (
        <div>
            <h2>Menu</h2>
        </div>
    )
}