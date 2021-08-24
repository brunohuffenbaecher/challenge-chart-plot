import React from 'react';

import css from './footer.module.css';

export default function Footer({ generateChart }) {
  const handleClick = () => {
    generateChart();
  };

  return (
    <div className={css.footerDiv}>
      <button className={css.btn} onClick={handleClick}>
        GENERATE CHART
      </button>
    </div>
  );
}
