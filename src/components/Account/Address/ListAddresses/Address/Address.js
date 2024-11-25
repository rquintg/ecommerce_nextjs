import {useState} from "react";
import {Button, Icon} from "semantic-ui-react";
import {BasicModal, Confirm} from "@/components/Shared";
import {Address as AddressCtrl} from "@/api";
import {AddressForm} from '../../AddressForm';
import styles from './Address.module.scss';


const addressCtrl = new AddressCtrl();

export function Address (props){
    const {addressId, address, onReload} = props;

    const [showEdit, setShowEdit] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);
    const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);


    const onDelete = async () => {
        try {
            await addressCtrl.delete(addressId);
            onReload();
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
            <div className={styles.address}>
                <div>
                    <p className={styles.title}>{address.title}: </p>
                    <p className={styles.addressInfo}>
                        {address.name}, {address.address}, {address.state}, {address.city}, {address.zip}, {" "}
                        {address.postal_code}
                    </p>
                </div>

                <div className={styles.actions}>
                    <Button primary icon onClick={openCloseEdit}>
                        <Icon name="pencil"/>
                    </Button>
                    <Button primary icon onClick={openCloseConfirm}>
                        <Icon name="delete"/>
                    </Button>
                </div>
            </div>

            <Confirm
                open={showConfirm}
                onCancel={openCloseConfirm}
                onConfirm={onDelete}
                content={`¿Estás seguro de eliminar la dirección ${address.title}?`}
            />

            <BasicModal show={showEdit}
                        onClose={openCloseEdit}
                        title="Editar dirección"
            >
                <AddressForm onClose={openCloseEdit}
                             onReload={onReload}
                             addressId={addressId}
                             address={address}
                />
            </BasicModal>
        </>
    )
}