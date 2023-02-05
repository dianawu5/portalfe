import { message, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAnnouncements } from '../utils';
import ViewAnnouncement from './ViewAnnouncement';
import resp from '../announcements-mock-data.json';


const Announcements = () => {
    // let announcement = useAnnouncementList();

    // console.log(announcement);

    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState(resp);

    // useEffect(() => {
    //   handleGetData();
    // }, []);

    // const handleGetData = async() => {
    //   setLoading(true);
    //   try{
    //     const resp = await getAnnouncements();
    //     setData(resp || []);
    //   } catch (error) {
    //     message.error(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Action',
        key: 'action',
        width: 180,
  
        render: (_, record) => <ViewAnnouncement info={record}/>
      },
    ];

    return(
        <div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"30px" }}>
                Announcements
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>
            <Table dataSource={data} columns={columns} />
            </div>
        </div>
    );
}

// const useAnnouncementList = () => {

//   const [announcementList, setAnnouncementList] = useState([]);
//   useEffect(() => {
//     import('../announcements-mock-data.json')
//     .then(lst => setAnnouncementList(lst.default))
//   }, []);

//   return announcementList
// }

export default Announcements;