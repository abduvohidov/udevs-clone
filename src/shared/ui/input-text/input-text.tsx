import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./input-text.module.scss";
import { useState } from "react";

interface IInputText {
  labelText: string;
  type?: string;
  className?: string | undefined;
}

export const InputText = ({ type = "text", labelText, className }: IInputText) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      if (!value) {
        setIsFocused(true);
      }
    };

  return (
    <>
    {isFocused && !value && (
        <h4 className={cls.RequiredMessage}>Заполните поле</h4>
      )}
    <div className={cls.InputWrapper}>
      <input
        className={classNames([cls.Input, cls.InputText])}
        type={type}
        autoComplete="off"
        placeholder=""
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setValue(e.target.value)}
      />
      <label className={cls.InputLabel}>{labelText}</label>
    </div></>
  );
};
