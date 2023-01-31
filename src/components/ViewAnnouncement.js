import { Modal} from "antd";
import { useState } from "react";

const ViewAnnouncement = ({info}) => {
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
            View
        </a>
        <Modal title="View Announcement" open={isModalOpen} onCancel={handleModalCancel} footer={null}>
            <h1>this is an announcement</h1>
            <p>
                {info.title}
            </p>
        </Modal>
        </>
    );
}
export default ViewAnnouncement;