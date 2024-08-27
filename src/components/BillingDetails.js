import React from 'react';
import { useLocation } from 'react-router-dom';

function BillingDetails() {
    const location = useLocation();
    const { bill } = location.state || {};
    //const [bills, setBills] = useState([]);

    // useEffect(() => {
    //     const fetchBills = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/bills');
    //             setBills(response.data);
    //         } catch (err) {
    //             console.error('Error fetching billing details:', err);
    //         }
    //     };
    //     fetchBills();
    // }, []);

    if (!bill) {
        return <div>No billing details available.</div>;
    }

    return (
        <div>
            <div>
                <div style={{float:'left'}}>
                <h2>Billing Details</h2>
                <p>Prop: <b>S.Ravikumar,B.E</b></p>
                <p>Mobile No: <b>9944647358, 9842240923</b></p>
                </div>
                <div style={{float:'right'}}>
                    <p>License Number: <b>1234/DPI/2018</b></p>
                    <p>Address: <b>V.kottavur, Nallampalli</b></p>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>No.of Seedlings</th>
                        <th>Rate of Seedling</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={bill.id}>
                        <td>{bill.id}</td>
                        <td>{bill.customer_name}</td>
                        <td>{bill.seedling_count}</td>
                        <td>{bill.seedling_rate}</td>
                        <td>{bill.amount}</td>
                        <td>{bill.description}</td>
                        <td className='print-btn-right'>{bill.date}</td>
                        <td className='print-button'><button onClick={() => window.print()}>Print</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BillingDetails;
