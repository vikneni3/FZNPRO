import { fetchProspects as fetchProspectsApi } from '../../api/api';

export const fetchProspects = () => async dispatch => {
  dispatch({ type: 'FETCH_PROSPECTS_REQUEST' });
  try {
    const prospects = await fetchProspectsApi();
    dispatch({ type: 'FETCH_PROSPECTS_SUCCESS', payload: prospects });
  } catch (error) {
    dispatch({ type: 'FETCH_PROSPECTS_FAILURE', payload: error.message });
  }
};
