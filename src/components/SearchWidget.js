import React, { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const SearchWidget = () => {
  const { dispatch } = useContext(WidgetContext);

  const handleSearch = (e) => {
    dispatch({ type: 'SEARCH_WIDGET', payload: { searchTerm: e.target.value } });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Widgets..." 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchWidget;
