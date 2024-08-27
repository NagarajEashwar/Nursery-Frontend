import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BillingForm() {
    const navigate = useNavigate();
    const [customerName, setCustomerName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [seedlingRate, setSeedlingRate] = useState('');
    const [seedlingCount, setSeedlingCount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://nursery-backend-l38o.onrender.com/api/bills', {
                customerName,
                amount,
                date,
                description,
                seedlingCount,
                seedlingRate
            });
            console.log('Bill added successfully!', JSON.stringify(response));
            const bill = response?.data;
            navigate('/billing-details', { state: { bill } });
        } catch (err) {
            console.error(err);
        }
    };

    const handleFormFieldChanges = async (value, name) =>{
        if(name === 'amount'){
            setAmount(value);
        } else{
            if(name === 'seedling_count'){
                if(value != '' && seedlingRate != ''){
                    setAmount(value * seedlingRate);
                }
                setSeedlingCount(value);
            } else {
                if(value != '' && seedlingCount != ''){
                    setAmount(value * seedlingCount);
                }
                setSeedlingRate(value);
            }
        }
    }

    return (
       <div>
         <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Customer Name </label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Customer Name"
                    required
                />
            </div>
            <div className="form-field">
            <label>Seedling Name </label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Seedling Name"
                    required
                />
            </div>
            <div className="form-field">
            <label>Seedling Rate  </label>
                <input
                    type="number"
                    value={seedlingRate}
                    onChange={(e) => handleFormFieldChanges(e.target.value, 'seedling_rate')}
                    placeholder="Seedling Rate"
                    required
                />
            </div>
            <div className="form-field">
            <label>Number of Seedlings </label>
                <input
                    type="number"
                    value={seedlingCount}
                    onChange={(e) => handleFormFieldChanges(e.target.value, 'seedling_count')}
                    placeholder="Number of Seedlings"
                    required
                />
            </div>
            <div className="form-field">
            <label>Amount </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => handleFormFieldChanges(e.target.value, 'amount')}
                    placeholder="Amount"
                    required
                />
            </div>
            <div className="form-field">
            <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-field" style={{marginTop: '20px'}}>
                <button type="submit">Add Bill</button>
            </div>
        </form>
       </div>
    );
}

export default BillingForm;
