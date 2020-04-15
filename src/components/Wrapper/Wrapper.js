import React from 'react';

const Wrapper = ({ children, tittle }) => (
  <div>
    <h2>{tittle}</h2>
    {children}
  </div>
);

export default Wrapper;
