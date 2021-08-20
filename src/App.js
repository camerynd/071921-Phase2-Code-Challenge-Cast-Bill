import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  //start here with your code for step one
  const [bills, setBills] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bills')
    .then(r => r.json())
    .then(data => setBills(data))
  }, [])

  function castBill(bill) {
    setBills(bills.map((billy) => billy.id === bill.id ? { ...billy, casted: true} : billy))
  }

  function removeBillFromCast(bill) {
    setBills(bills.map((billy) => billy.id === bill.id ? { ...billy, casted: false} : billy))
  }

  function fireBill(bill) {
    setBills(bills.filter((billy) => billy.id !== bill.id))
  }

  return (
    <div>
      <BillsCast bills={bills.filter((bill) => bill.casted)} doClick={removeBillFromCast} fireBill={fireBill} />
      <BillCollection bills={bills} doClick={castBill} fireBill={fireBill} />
    </div>
  );
}
