const initialState = {
    prospects: [],
    loading: false,
    error: null,
  };
  
  export default function prospectReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_PROSPECTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_PROSPECTS_SUCCESS':
        return { ...state, loading: false, prospects: action.payload };
      case 'FETCH_PROSPECTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  