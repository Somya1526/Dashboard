import React from 'react';
import CategoryList from './CategoryList';
import AddWidgetForm from './AddWidgetForm';
import SearchWidget from './SearchWidget';

const Dashboard = () => {
  return (
    <div>
      <h1>Widget Dashboard</h1>
      <SearchWidget />
      <CategoryList />
      {/* Assuming AddWidgetForm will be used to add a widget to the first category for simplicity */}
      <AddWidgetForm categoryId={1} />
    </div>
  );
};

export default Dashboard;
