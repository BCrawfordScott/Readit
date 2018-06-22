import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          READIT BABY!!!!!
        </div>
      </HashRouter>
    </Provider>
  );
};

export default Root;
