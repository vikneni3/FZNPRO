import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProspectDetail = () => {
  const { id } = useParams();
  const prospect = useSelector(state => state.prospects.prospects.find(p => p.id === id));

  if (!prospect) {
    return <p>Prospect not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{prospect.companyName}</h1>
      <p>{prospect.companySummary}</p>
      <p><strong>Location:</strong> {prospect.location}</p>
      <p><strong>Valuation:</strong> {prospect.valuation}</p>
      <p><strong>Funding:</strong> {prospect.funding}</p>
      <p><strong>Recent Developments:</strong> {prospect.recentDevelopments}</p>
      <p><strong>Products:</strong> {prospect.products}</p>
    </div>
  );
}

export default ProspectDetail;
