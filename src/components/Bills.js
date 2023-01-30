import React from 'react';
import requestsList from '../mock-bills.json';
import { Button, message, Space, Table, Popconfirm, Modal,} from 'antd';
import { useEffect, useState } from 'react';
import PayBill from './PayBill';

const Bills = () => {

    const[data, setData] = useState(requestsList);
    const unpaidTotalAmount = data.filter(data => data.status == "unpaid").map( data => data.invoiceAmount ).reduce((a,b)=> a + b, 0);

      // to define each column
    const columns = [
    {
      title: 'Invoice#',
      dataIndex: 'invoiceId',
      key: 'invoiceId',
      width: 120,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
    },
    {
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate',
    },
    {
        title: 'Invoice',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Amount',
        dataIndex: 'invoiceAmount',
        key: 'invoiceAmount',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: 120,
      filters:[
        {
          text: "paid",
          value:"paid",
        },
        {
          text:"unpaid",
            value:"unpaid",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: 'Action',
      key: 'action',
      width: 250,

      render: (_, record) => {
        if(record.status === "unpaid") {
            return <PayBill info={record} />
        } 
      }
    },
  ];

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

    return(
        <div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"20px" }}>
            View Bills
            <div style={{padding: "5px"}} align="end">
                    <p>Outstanding Balance</p>
                    <p>{formatter.format(unpaidTotalAmount)}</p>
                </div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>
                <div style={{ padding:"20px",backgroundColor:"rgba(55, 88, 70,.1)"}}>
                    <Table columns={columns} dataSource={data} size="small" />
                </div>
            </div>
        </div>
    );
}
export default Bills;