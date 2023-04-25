import React from 'react';
import Card from '@/components/Card'

import s from './style.module.less';

const property = () => {

  return <div className={s.property}>
    <div className={s.topWrap}>
      <div className={s.title}>
        资产管家
      </div>
      <div className={s.total}>
        <div>净资产</div>
        <div className={s.num}>314939.39</div>
      </div>
      <div className={s.depart}>
        <div className={s.income}>
          资产
          <div>314939.39</div>
        </div>
        <div>|</div>
        <div className={s.debt}>
          负债
          <div>0.00</div>
        </div>
      </div>
    </div>
    <Card/>
  </div>
}

export default property
