import { Button, Icon } from "semantic-ui-react";
import styles from "./Address.module.scss";
import { AddressForm } from "../../AddressForm";
import { BasicModal } from "@/components/Shared";
import { useState } from "react";

export function Address(props) {
    const { addressId, address, onReload } = props;
    const [showEdit, setShowEdit] = useState(false); 

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);
    
  return (
    <>
      <div className={styles.address}>
        <div>
            <p className={styles.title}>{address.title}</p>
            <p className={styles.address.addressInfo}>
                {address.name},  
                {address.address},  
                {address.city}, {" "}
                {address.postal_code}
            </p>
        </div>

        <div className={styles.actions}>
            <Button primary icon onClick={openCloseEdit}>
                <Icon name="pencil"/>
            </Button>
            <Button primary icon>
                <Icon name="delete"/>
            </Button>
        </div>
      </div>

      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressId={addressId}
          address={address}
        />
      </BasicModal>
    </>
  )
}
