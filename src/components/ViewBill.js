import { Form,Modal} from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import React from 'react';

const ViewBill = ({info}) => {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const defaultData = info;
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <>
        <a type="link" onClick={showModal}>
            View Invoice
        </a>
        <Modal title="View Request Details" open={isModalOpen} onCancel={handleModalCancel} footer={null}>
            <Form labelCol={{span: 6}} wrapperCol={{span: 18}}
                style={{maxWidth: 600}} size="middle"
            >
                <FormItem name="invoiceId" label="Invoice#">
                    <text style={{padding: "0px"}}>{defaultData.invoiceId}</text>
                </FormItem>
                <FormItem name="date" label="Submit Date">
                    <text style={{padding: "0px"}}>{defaultData.date}</text>
                </FormItem>
                <FormItem name="status" label="Status">
                    <text style={{padding: "0px"}}>{defaultData.status}</text>
                </FormItem>
                <Form.Item name="title" label="Title" >
                    <text style={{padding: "0px"}}>{defaultData.title}</text>
                </Form.Item>
            </Form>
        </Modal>
        </>
    );
}
export default ViewBill;
