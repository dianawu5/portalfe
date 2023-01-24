import { Modal } from "antd";
import { useState } from "react";

const ViewRequest = ({info}) => {
    const[isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleModalCancel = () => {
        setIsModalOpen(false);
    };
    const renderContent = () => {
        const id = info.requestId;
        return (
            <>
            <div>{id}</div>
            <div>{info.title}</div>
            </>
        );
    }
    return(
        <>
        <a type="link" onClick={showModal}>
            View
        </a>
        <Modal title="View Request Details" open={isModalOpen} onCancel={handleModalCancel} footer={null}>
            {renderContent()}
        </Modal>
        </>
    );
}
export default ViewRequest;