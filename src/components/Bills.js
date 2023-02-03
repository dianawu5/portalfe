import { Space, Table} from 'antd';
import { useEffect, useState } from 'react';
import billData from "../mock-bills.json"
import ViewBill from './ViewBill';
import { payBill } from '../utils';

const Bills = () => {

    const[data, setData]=useState(billData);
    const unpaidTotalAmount = data.filter(data => data.status == "unpaid").map( data => data.invoiceAmount ).reduce((a,b)=> a + b, 0);

    const columns = [
        {
            title: 'Invoice#',
            dataIndex: 'invoiceId',
            key: 'invoiceId',
            width: 120,
            align: "center",
        },
        {
            title: 'Invoice Date',
            dataIndex: 'invoiceDate',
            key: 'invoiceDate',
        },
        {
            title:'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title:'Invoice Amount',
            dataIndex: 'invoiceAmount',
            key: 'invoiceAmount',
            render: (_,record) => 
                (
                    <Space size="large">
                        <text>$ {record.invoiceAmount}</text>
                    </Space>
                ),   
        },
        {
            title: 'Status',
            dataIndex:'status',
            key: 'status',
            width: 120,
            filters: [
                {
                    text: "unpaid",
                    value: "unpaid",
                },
                {
                    text: "paid",
                    value: "paid",
                }
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Action',
            key: 'action',
            width: 180,

            render: (_,record) => 
                record.status === "unpaid" ? (
                    <Space size="large">
                        <ViewBill info={record}/>
                        <a onClick={() => payBill(record.invoiceId)}>
                            Pay
                        </a>
                        </Space>
                ) : (<ViewBill info={record}/>),       
        },
    ];

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return(
        <div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingBottom:"30px" }}>
            Bills
            </div>
            <div style={{ fontSize: 20, fontWeight: 600,paddingLeft:"15%" }}>
                <div style={{padding: "10px"}} align="end">
                    <div >Outstanding Balance: {formatter.format(unpaidTotalAmount)}</div>
                </div>
                <div style={{ padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}>
                    <div style={{ fontSize: 18, fontWeight: 600,padding:"5px",backgroundColor:"rgba(55, 88, 70,.1)"}}
                    >
                        Invoices
                    </div>
                    <Table columns={columns} dataSource={data} size="small"/>
                </div>
            </div>
        </div>
    );
}
export default Bills;