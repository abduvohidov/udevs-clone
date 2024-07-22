"use-client"
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./input-text.module.scss";
import { useState } from "react";

interface IInputText {
  labelText: string;
  type?: string;
  className?: string
}

export const InputText = ({ type = "text", labelText, className}: IInputText) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if(!value.length) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(true);
    }
  };

  return (
    <>
      {isFocused && !value && (
        <p className={cls.RequiredMessage}>Заполните поле</p>
      )}
      <div className={classNames([cls.InputWrapper, className])}>
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
      </div>
    </>
  );
};
