import React from 'react';

const ProspectCard = ({ prospect }) => (
  <div className="p-4 border rounded shadow-sm">
    <h2 className="text-xl font-bold">{prospect.companyName}</h2>
    <p>{prospect.companySummary}</p>
    <p><strong>Location:</strong> {prospect.location}</p>
    <p><strong>Valuation:</strong> {prospect.valuation}</p>
  </div>
);

export default ProspectCard;
