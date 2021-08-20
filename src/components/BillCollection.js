import React from 'react';
import BillCard from "./BillCard"

export default function BillCollection({bills, doClick, fireBill}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map((bill) => <BillCard bill={bill} key={bill.id} doClick={doClick} fireBill={fireBill}/>)}
      </div>
    </div>
  );
}
