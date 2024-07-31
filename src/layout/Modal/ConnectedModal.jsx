import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import { closeModal } from "../../redux/modalSlice";
import styles from "./Modal.module.css";

const ConnectedModal = () => {
  const { t } = useTranslation();
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal isOpen={isOpen} onClose={() => dispatch(closeModal())}>
      <h2 className={styles.modalH2}>{t('Congratul')}</h2>
      <p className={styles.modalP}>
        {t('orderSuccessMessage')}
      </p>
    </Modal>
  );
};

export default ConnectedModal;
