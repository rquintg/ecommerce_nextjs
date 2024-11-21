import { useEffect, useState } from 'react';
import {map} from 'lodash';
import {Address as AddressCtrl } from '@/api';
import {useAuth} from '@/Hooks';
import {Address} from './Address';

import styles from './ListAddresses.module.scss';

const addressCtrl = new AddressCtrl();

export function ListAddresses (props){

    const {reload, onReload} = props;

    const [addresses, setAddresses] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        (async ()=> {
            try {
                const response = await addressCtrl.getAll(user.id);
                setAddresses(response.data);
            } catch (error) {
                console.error('Error al obtener las direcciones:', error);
            }
        })()

    }, [reload]);

    if(!addresses.length){
        return (
            <div>
                <h2>No tienes direcciones registradas...</h2>
            </div>
        )
    }

    return (
        <div className={styles.addresses}>
            {map(addresses, (address) => (
                <Address key={address.id}
                         addressId={address.id}
                         address={address.attributes}
                         onReload={onReload}
                />
            ))}
        </div>
    )
}