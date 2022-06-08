import { useState } from 'react';
import S from './style.module.css';

const Checkbox = ({ register, labelText, fieldName }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={S.Checkbox}>
      <input
        type='checkbox'
        className={S.CheckboxInput}
        {...register(fieldName)}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label className={S.CheckboxLabel}>{labelText}</label>
    </div>
  );
};

export default Checkbox;
