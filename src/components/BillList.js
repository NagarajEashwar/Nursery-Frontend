import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BillList() {
    const navigate = useNavigate();
    const [bills, setBills] = useState([]);

    useEffect(() => {
        const fetchBills = async () => {
            try {
                const response = await axios.get('https://nursery-backend-l38o.onrender.com/api/bills');
                setBills(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchBills();
    }, []);

    const addNewBill = async (e) => {
        console.log("addNewBill: " + e);
        navigate('/billing-form');
    };

    const handleViewDetails = async (bill) => {
        console.log("viewBillDetails: " + bill);
        navigate('/billing-details', { state: { bill } });
    };

    return (
        <div>
            <div style={{textAlign:"right"}}><button onClick={addNewBill}>Add New Bill</button></div>
           <div style={{margin: '10px'}}>
           <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>No.of Seedlings</th>
                        <th>Rate of Seedling</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill) => (
                        <tr key={bill.id}>
                            <td>{bill.id}</td>
                            <td>{bill.customer_name}</td>
                            <td>{bill.seedling_count}</td>
                            <td>{bill.seedling_rate}</td>
                            <td>{bill.amount}</td>
                            <td>{bill.date}</td>
                            <td>{bill.description}</td>
                            <td><button onClick={() => handleViewDetails(bill)} >View Details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
        </div>
    );
}

export default BillList;
