import { Button, message, Space, Table, Popconfirm, Modal,} from 'antd';
import { useEffect, useState } from 'react';
import { deleteRequest } from '../utils';
import NewRequestButton from './NewRequestButton';
import requestsList from '../mock-data.json';
import ViewRequest from './ViewRequest';
import EditRequest from './EditRequest';


/* Similar to LoginForm.js & App.js, 
in Maintenance there should be 

(2) in the return block, <NewRequestButton onSubmitSuccess={handleSuccess}/>

in NewRequestButton.js, there should be 
(1) const NewRequestButton = (onSubmitSuccess) => {}
and 
(2) try{ await newRequest(data); onSubmitSuccess(); ....} catch(){} finally{}
}

*/

const Maintenance = () => {

  const[data, setData]=useState(requestsList);

  // to define each column
  const columns = [
    {
      title: 'Submit Date',
      dataIndex: 'date',
      key: 'date',
      width: 120,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: 120,
      filters:[
        {
          text: "open",
          value:"open",
        },
        {
          text:"closed",
            value:"closed",
        },
        {
          text:"approved",
            value:"approved",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: 'Action',
      key: 'action',
      width: 180,

      render: (_, record) =>
        record.status === "Open" ? (
          <Space size="large">
            <ViewRequest info={record} />
            <EditRequest info={record} />
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.requestId)}>
              <a style={{ fontSize: 14, fontWeight: 600, padding: 0 }}>Delete</a>
            </Popconfirm>
          </Space>
      ) : (<ViewRequest info={record} />),
    },
  ];

  const handleDelete = (requestId) => {
    const newData = data.filter((item) => item.requestId !== requestId);
    setData(newData);
  };


    return(
        <div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"20px" }}>
            Maintenance
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>
                <div style={{padding: "10px"}} align="end">
                  <NewRequestButton />
                </div>
                <div style={{ padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}>
                    <div style={{ fontSize: 18, fontWeight: 600,padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}
                    >
                        Requests Status
                    </div>
                    <Table columns={columns} dataSource={data} size="small" />
                </div>
            </div>
        </div>
    );
}

export default Maintenance;

/* once connected to the server use this coding

  const[loading, setLoading] = useState();
  useEffect(() => {
    handleGetData();  
  },[]); 

  const handleGetData() = async() => {
    setLoading(true);
    try {
      const resp const resp = await getRequests();
      setData(resp);
    } catch(error) {
      message.error(error.message);
    } finally {
      setLoading(false);
  }

  const handleDelete = async(requestId) => {
    setLoading(true); 
    try{
      await deleteRequest(requestId);
      message.success("You delete a reqeust successfully!");
      handleGetData();
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);  
    }
  };


  for <EditRequest info={record}/>
  should changed to <EditRequest info={record} onEditSuccess={handleGetData}/>

  for <NewRequestButton />
  should changed to <NewRequestButton onSubmitSuccess={handleGetData}/>
*/ 