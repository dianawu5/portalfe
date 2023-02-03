import { Form,Modal} from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

const ViewBill = ({info}) => {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const defaultData = info;
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <a type="link" onClick={showModal}>
            View
        </a>
        <Modal title="View Bill Details" open={isModalOpen} onCancel={handleModalCancel} footer={null}>
            <Form labelCol={{span: 6}} wrapperCol={{span: 18}} 
                style={{maxWidth: 600}} size="middle"
            >
            <FormItem name="invoiceId" label="Invoice#">
                    <text style={{padding: "0px"}}>{defaultData.invoiceId}</text>
                </FormItem>
                <FormItem name="invoiceDate" label="Invoice Date">
                    <text style={{padding: "0px"}}>{defaultData.invoiceDate}</text>
                </FormItem>
                <FormItem name="dueDate" label="Due Date">
                    <text style={{padding: "0px"}}>{defaultData.dueDate}</text>
                </FormItem>
                <Form.Item name="invoiceAmount" label="Invoice Amount" >
                    <text style={{padding: "0px"}}>$ {defaultData.invoiceAmount}</text>
                </Form.Item>
                <FormItem name="status" label="Status">
                    <text style={{padding: "0px"}}>{defaultData.status}</text>
                </FormItem>
                <Form.Item name="description" label="Description" >
                    <text style={{padding: "0px", height: 150}}>{defaultData.description}</text>
                </Form.Item>
            </Form>
        </Modal>
        </>
    );
};
export default ViewBill;