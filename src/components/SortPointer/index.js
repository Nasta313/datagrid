import React from 'react';

const SortPointer = ({ sortDirection, type }) => {
  
  return <span className={`icon-${type}-${sortDirection}`}></span>
}

export default SortPointer;