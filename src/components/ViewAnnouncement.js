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
        <Modal title="Announcement" open={isModalOpen} onCancel={handleModalCancel} footer={null}>
            <h1>{info.title}</h1>
            <span>Category: {info.category}</span>
            <br></br>
            <span>Time: <time>{info.date}</time></span>
            <br></br>
            <br></br>
            <p>
                {info.description}
            </p>
        </Modal>
        </>
    );
}
export default ViewAnnouncement;