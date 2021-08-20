import React from 'react';
import BillCard from "./BillCard"

export default function BillsCast({bills, doClick, fireBill}) {
  // Your code here

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {bills.map((bill) => <BillCard bill={bill} key={bill.id} doClick={doClick} fireBill={fireBill}/>)}
        </div>
      </div>
    </div>
  );
}

