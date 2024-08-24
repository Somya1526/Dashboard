import React, { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const WidgetList = ({ category }) => {
  const { dispatch } = useContext(WidgetContext);

  const removeWidget = (categoryId, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId } });
  };

  return (
    <div>
      {category.widgets.map(widget => (
        <div key={widget.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0' }}>
          <p><strong>{widget.name}</strong></p>
          <p>{widget.text}</p>
          <button onClick={() => removeWidget(category.id, widget.id)}>× Remove Widget</button>
        </div>
      ))}
    </div>
  );
};

export default WidgetList;
