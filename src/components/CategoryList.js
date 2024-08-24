import React, { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import WidgetList from './WidgetList';

const CategoryList = () => {
  const { state } = useContext(WidgetContext);

  return (
    <div>
      {state.categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <WidgetList category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
