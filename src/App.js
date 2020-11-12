import React from 'react';
import { BrowserRouter , } from 'react-router-dom';

import { ExchangeRateContextProvider } from './context/ExchangeRateContext';

import RootRouter from './routers/RootRouter';


function App() {
  return(
    <ExchangeRateContextProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ExchangeRateContextProvider>
  );
}

export default App;
