import { useState } from 'react';

const Cell = () => {
  const [active, setActive] = useState(false);

  const handleClickCell = () => {
    setActive(!active);
  };

  return <div className={`cell ${active ? 'active' : ''}`} onClick={handleClickCell} />;
};

export default Cell;
