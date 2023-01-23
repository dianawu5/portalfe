import { Button, message, Space, Table, Popconfirm,} from 'antd';
import { useEffect, useState } from 'react';
import { deleteRequest } from '../utils';
import NewRequestButton from './NewRequestButton';


/* Similar to LoginForm.js & App.js, 
in Maintenance there should be 
(1) a function to refresh/reload the server data, such as const handleSuccess= () => {"code to reload updated data"}
(2) in the return block, <NewRequestButton onSubmitSuccess={handleSuccess}/>

in NewRequestButton.js, there should be 
(1) const NewRequestButton = (onSubmitSuccess) => {}
and 
(2) try{ await newRequest(data); onSubmitSuccess(); ....} catch(){} finally{}
}

*/

const Maintenance = () => {
  const requestsList = maintenanceList();
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
            <a>View</a>
            <a>Edit</a>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.requestId)}>
              <a>Delete</a>
            </Popconfirm>
          </Space>
      ) : (<a>View</a>),
    },
  ];

  const handleDelete = (requestId) => {
    const newData = data.filter((item) => item.requestId !== requestId);
    setData(newData);
  };

/* once connected to the server use this coding

  const[loading,setLoading] = useState(false);

  const[data, setData] = useState();
  useEffect(() => {
    getRequest().then(requests) => {setData(requests);} catch(error){message.error(error.message);}
  }, []);

  const handleDelete = async(requestId) => {
    setLoading(true); 
    try{
      await deleteRequest(requestId);
      message.success("You delete a reqeust successfully!");
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };
*/ 

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

// This is a fake data list for testing only.
const maintenanceList = () => {
  const reuestsList=[
    {
      requestId:"1",
      title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Approved",
    },
    {
      requestId:"21",
        title:"roof is broken",
      date:"11/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Approved",
    },
    {
      requestId:"15",
     title:"roof is broken",
      date:"12/01/2021",
      description: "The roof is somehow broken. Please fix it.",
      status:"Open",
    },
    {
      requestId:"12",
        title:"roof is broken",
      date:"02/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Open",
    },
    {
      requestId:"13",
        title:"roof is broken",
      date:"12/01/2022",
      description: "The roof is somehow broken. Please fix it.",
      status:"Closed",
    },
    {
      requestId:"6",
        title:"roof is broken",
      date:"12/15/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Closed",
    },
    {
      requestId:"10",
      title:"roof is broken",
      date:"11/11/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Open",
    },
    {
      requestId:"4",
      title:"roof is broken",
      date:"12/10/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Open",
    },
    {
      requestId:"18",
      title:"roof is broken",
      date:"10/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Open",
    },
    {
      requestId:"31",
        title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Open",
    },
    {
      requestId:"22",
        title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Closed",
    },
    {
      requestId:"26",
        title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:"Closed",
    },
  ];
  return reuestsList;
}

export default Maintenance;