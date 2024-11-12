import {useState} from 'react';
import {Button} from "semantic-ui-react";

import styles from './AddAddress.module.scss';
import {log} from "next/dist/server/typescript/utils";

export function AddAddress() {

    const [show, setShow] = useState(false);

    const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
          <Button primary
                  className={styles.addBtn}
                  onClick={onOpenClose}
          >
            Agregar dirección
          </Button>
    </>
  );
}