import { Table } from 'antd';

const Announcements = () => {
    let announcement = useAnnouncementList()
      
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
      ];

    return(
        <div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"30px" }}>
                Announcements
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>
            <Table dataSource={announcement} columns={columns} />;
            </div>
        </div>
    );
}

const useAnnouncementList = () => {
    const dataSource = [
        {
          date: '1',
          title: 'Mike',
        },
        {
          date: '1',
          title: 'Mike',
        },
      ];

    return dataSource
}

export default Announcements;