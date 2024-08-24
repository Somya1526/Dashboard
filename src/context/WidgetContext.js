import React, { createContext, useReducer } from 'react';

const WidgetContext = createContext();

const initialState = {
  categories: [
    {
      id: 1,
      name: "Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "This is widget 1 text" },
        { id: 2, name: "Widget 2", text: "This is widget 2 text" }
      ]
    },
  ],
  searchTerm: ''
};

const widgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
            : category
        )
      };
    case 'SEARCH_WIDGET':
      return {
        ...state,
        searchTerm: action.payload.searchTerm
      };
    default:
      return state;
  }
};

const WidgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(widgetReducer, initialState);

  return (
    <WidgetContext.Provider value={{ state, dispatch }}>
      {children}
    </WidgetContext.Provider>
  );
};

export { WidgetContext, WidgetProvider };
