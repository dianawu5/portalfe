import React from 'react';
import requestsList from '../mock-bills.json';
import { Button, message, Space, Table, Popconfirm, Modal,} from 'antd';
import { useEffect, useState } from 'react';
import ViewRequest from './ViewRequest';
import PayBill from './PayBill';
import ViewBill from './ViewBill';

const Bills = () => {

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
          text: "Paid",
          value:"Paid",
        },
        {
          text:"Unpaid",
            value:"Unpaid",
        },
        {
          text:"In Process",
            value:"In Process",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: 'Action',
      key: 'action',
      width: 250,

      render: (_, record) => {
        if(record.status === "Unpaid") {
            return <PayBill info={record} />
        } else if(record.status === "Paid") {
            return <ViewBill info={record} />
        }
      }
    },
  ];

    return(
        <div>
        <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"20px" }}>
            Bills
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>
                <div style={{ padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}>
                    <div style={{ fontSize: 18, fontWeight: 600,padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}
                    >
                        Payment
                    </div>
                    <Table columns={columns} dataSource={data} size="small" />
                </div>
            </div>
        </div>
    );
}
export default Bills;