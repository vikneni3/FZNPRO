import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProspects } from '../store/actions/prospectActions';
import ProspectCard from '../components/ProspectCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { prospects, loading, error } = useSelector(state => state.prospects);

  useEffect(() => {
    dispatch(fetchProspects());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prospects.map(prospect => (
          <ProspectCard key={prospect.id} prospect={prospect} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
