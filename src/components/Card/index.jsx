import React from 'react';
import cx from 'classnames';


import s from './style.module.less'

const card = () => {
  return <div className={s.card}>
    <div className={cx(s.topWrap, s.row)}>
      <div className={s.name}>储蓄卡</div>
      <div className={s.name}>54351.23</div>
    </div>
    <div className={cx(s.itemWrap, s.row)}>
      <div >
        <span className={s.img}>图片</span>
        <span className={s.name}>招商银行</span>
      </div>
      <div>14242.23</div>
    </div>
  </div>
}

export default card