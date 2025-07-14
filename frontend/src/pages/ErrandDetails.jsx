import React from 'react';
import { useParams } from 'react-router-dom';

const ErrandDetails = () => {
  const { id } = useParams();

  return (
    <div className="aws-card">
      <div className="aws-card-header">
        <h1 className="aws-card-title">Errand Details</h1>
        <p className="aws-card-subtitle">View and manage errand #{id}</p>
      </div>
      <div className="aws-card-body">
        <p>Errand details page coming soon...</p>
      </div>
    </div>
  );
};

export default ErrandDetails;
