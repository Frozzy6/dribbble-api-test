import React from 'react';

const Wrap = props => {
  const { className, children } = props;

  return (
    <div className={"wrap" + (className ? " " + className : "")}>
      {children}
    </div>
  )
}

export default Wrap;
