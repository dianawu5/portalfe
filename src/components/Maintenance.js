import { Button, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';

  // This is a fake data list for testing only. Need to contact backend and make sure the status is string[] type



const Maintenance = () => {

  const rows=[
    {
      requestId:"1",
      title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['approved'],
    },
    {
      requestId:"21",
        title:"roof is broken",
      date:"11/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"15",
     title:"roof is broken",
      date:"12/01/2021",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"12",
        title:"roof is broken",
      date:"02/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"13",
        title:"roof is broken",
      date:"12/01/2022",
      description: "The roof is somehow broken. Please fix it.",
      status:['closed'],
    },
    {
      requestId:"6",
        title:"roof is broken",
      date:"12/15/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['closed'],
    },
    {
      requestId:"10",
      title:"roof is broken",
      date:"11/11/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"4",
      title:"roof is broken",
      date:"12/10/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"18",
      title:"roof is broken",
      date:"10/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"31",
        title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['open'],
    },
    {
      requestId:"22",
        title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['closed'],
    },
    {
      requestId:"26",
        title:"roof is broken",
      date:"12/01/2020",
      description: "The roof is somehow broken. Please fix it.",
      status:['closed'],
    },
  ];

  const[data, setData]=useState(rows);
  

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
        {
          text:"approved",
            value:"approved",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,

      render: (_, { status }) => (
        <>
          {status.map((recordStatus) => {
            let color = recordStatus === 'closed' ? 'lightgrey' : (recordStatus === 'approved'?'blue':'green');

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

      render: (_,record) =>

        data.length >= 1 ? (
          <Space size="middle">
            <Button> View </Button>
            <Button> Edit </Button>
            <a onClick={() => handleDelete(record.requestId)}>Delete</a>
          </Space>
        ) : null
    },
  ];

// TODO
  const handleDelete = (requestId) => {
    const newData = data.filters((item) => item.requestId !== requestId);
    setData(newData);
  };

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