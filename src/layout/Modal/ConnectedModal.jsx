// components/ConnectedModal.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import { closeModal } from "../../redux/modalSlice";
import styles from "./Modal.module.css";

const ConnectedModal = () => {
  const { isOpen, title } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onClose={() => dispatch(closeModal())}>
      <h2 className={styles.modalH2}>{title}</h2>
      <p className={styles.modalP}>
        Your order has been successfully placed on the website. <br /> <br />
        A manager will contact you shortly to confirm your order.
      </p>
    </Modal>
  );
};

export default ConnectedModal;
