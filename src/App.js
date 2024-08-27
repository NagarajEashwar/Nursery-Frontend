import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuButton from './components/MenuButton';
import BillingForm from './components/BillingForm';
import BillList from './components/BillList';
import BillingDetails from './components/BillingDetails';

function App() {
  return (
    <Router>
      <MenuButton />
      <div className="App">
        <h1 style={{margin:'0px'}}>Mariyammal Nursery</h1>
        <Routes>
          <Route path="/" element={<BillList />} />
          <Route path="/billing-details" element={<BillingDetails />} />
          <Route path="/billing-form" element={<BillingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
