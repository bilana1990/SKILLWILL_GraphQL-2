import React from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';

const App: React.FC = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserList />
      <h2>User Detail</h2>
      <UserDetail userId={1} />
    </div>
  );
};

export default App;
