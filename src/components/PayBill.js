import { Button,Form,Input,Select,Modal,message, Space,} from "antd";
import { useState } from "react";
import { payBill } from "../utils";
import React from 'react';

const PayBill = ({info}) => {
    const [loading, setLoading] = useState(false);
    const[isModalOpen, setIsModalOpen]=useState(false);
    const defaultData = info;
    const openModal = () => {
        setIsModalOpen(true);
    };
    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    const onFormSubmit = async(invoiceId) =>{
        setLoading(false);
        try {
            await payBill(invoiceId);
            message.success("Request is updated successfully!");
            setIsModalOpen(false);
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
        <a type="link" onClick={openModal}>
            Make Payment
        </a>
        <Modal title="Make Payment" open={isModalOpen} onCancel={handleModalCancel} destroyOnClose={true} footer={null}>
        </Modal>
        </>
    );
};
export default PayBill;