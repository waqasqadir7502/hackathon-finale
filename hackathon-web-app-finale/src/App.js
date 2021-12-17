import React from 'react';
import ContextProvider from './context/context';
import MyRoutes from './config/routes';


function App() {
  return (
    <div className="App">
    <ContextProvider>
      <MyRoutes/>
    </ContextProvider>
    </div>
  );
}

export default App;
