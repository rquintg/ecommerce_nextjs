import {Tab} from 'semantic-ui-react';
import {useRouter} from 'next/router';
import {BasicLayout} from "@/layouts";
import {useAuth} from '@/Hooks'
import {Info, Settings, Address} from "@/components/Account";
import {Separator} from '@/components/Shared'

import styles from './account.module.scss';

export default function AccountPage() {

    const {user, logout} = useAuth();
    const router = useRouter();

    if (!user) {
        router.push("/").then(() => {
            console.log('Redirección exitosa');
        }).catch((error) => {
            console.error('Error en la redirección:', error);
        });
        return null;
    }


    const panes = [
        {
            menuItem: 'Mis pedidos',
            render: () => (
                <Tab.Pane attached={false}>
                    <p>Mis pedidos...</p>
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Lista de deseos',
            render: () => (
                <Tab.Pane attached={false}>
                    <p>Lista de desos...</p>
                </Tab.Pane>
            )
        },
        {
            menuItem: 'Direcciones',
            render: () => (
                <Tab.Pane attached={false}>
                    <Address.AddAddress/>
                    <Address.ListAddresses/>
                    <Separator height={80}/>
                </Tab.Pane>
            )
        },
        {
            menuItem: {
                key: 20,
                icon: 'settings',
                content: 'Ajustes',
            },
            render: () => (
                <Tab.Pane attached={false}>
                    <Settings.ChangeNameForm/>
                    <div className={styles.containerForms}>
                        <Settings.ChangeEmailForm/>
                        <Settings.ChangePasswordForm/>
                    </div>
                    <Separator height={80}/>
                </Tab.Pane>
            )
        },
        {
            menuItem: {
                key: 21,
                icon: 'log out',
                content: '',
                onClick: logout,
            },
        },
    ]

  return (
    <>
        <BasicLayout isContainer relative>
           <Info/>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} className={styles.tabs} />
        </BasicLayout>
    </>
  );
}