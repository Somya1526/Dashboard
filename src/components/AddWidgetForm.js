import React, { useState, useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const AddWidgetForm = ({ categoryId }) => {
  const { dispatch } = useContext(WidgetContext);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const addWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    };
    dispatch({ type: 'ADD_WIDGET', payload: { categoryId, widget: newWidget } });
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Widget Name" 
        value={widgetName} 
        onChange={(e) => setWidgetName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Widget Text" 
        value={widgetText} 
        onChange={(e) => setWidgetText(e.target.value)} 
      />
      <button onClick={addWidget}>+ Add Widget</button>
    </div>
  );
};

export default AddWidgetForm;
