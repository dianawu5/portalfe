import { Button, Space, Table, Tag } from 'antd';
// to define each column
const columns = [
    {
      title: 'Submit Date',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      sorter: (a, b) => a.date - b.date,
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
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,

      render: (_, { status }) => (
        <>
          {status.map((recordStatus) => {
            let color = recordStatus === 'open' ? 'green' : 'lightgrey';
          
            
            return (
              <Tag color={color} key={recordStatus}>
                {recordStatus.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 180,

      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>
            <Space>
              Edit
            </Space>
          </a>
          <a>
            <Space>
              Delete
            </Space>
          </a>
        </Space>
      ),
    },
  ];

  // This is a fake data list for testing only. Need to contact backend and make sure the status is string[] type
const data=[
    {
      title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
        title:"roof is broken",
      date:"11/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
     title:"roof is broken",
      date:"12/01/2021",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
        title:"roof is broken",
      date:"02/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
        title:"roof is broken",
      date:"12/01/2022",
      description: "The roof is somehow broken. Please fix it.",
      status:['closed'],
    },
    {
        title:"roof is broken",
      date:"12/15/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['closed'],
    },
    {
        title:"roof is broken",
        date:"11/11/2020",
        description: "The roof is somehow broken. Please fix it.",
        status:['open'],
      },
      {
          title:"roof is broken",
        date:"12/10/2020",
        description: "The roof is somehow broken. Please fix it.",
        status:['open'],
      },
      {
       title:"roof is broken",
        date:"10/01/2020",
        description: "The roof is somehow broken. Please fix it.",
        status:['open'],
      },
      {
          title:"roof is broken",
        date:"12/01/2020",
        description: "The roof is somehow broken. Please fix it.",
        status:['open'],
      },
      {
          title:"roof is broken",
        date:"12/01/2020",
        description: "The roof is somehow broken. Please fix it.",
        status:['closed'],
      },
      {
          title:"roof is broken",
        date:"12/01/2020",
        description: "The roof is somehow broken. Please fix it.",
        status:['closed'],
      },
];


const Maintenance = () => {

    return(
        <div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"20px" }}>
            Maintenance
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>

                <div style={{padding: "10px"}} align="end">
                <Button type="primary" size="large">
                + New Maintenance Requst
                </Button>
                </div>
                <div style={{ padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}>
                    <div style={{ fontSize: 18, fontWeight: 600,padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}
                    >
                        Requests Status
                    </div>
                    <Table columns={columns} dataSource={data} size="small"/>
                </div>
            </div>
        </div>
    );
}
export default Maintenance;