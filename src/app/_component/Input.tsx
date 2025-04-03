'use client';
import React from "react";
import { ChangeEventHandler, useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import * as style from '@/app/styles/component/input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputDefaultProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

interface TextInputProps extends InputDefaultProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
export const TextInput = ({ children, className, id, name, defaultValue, value, onChange, placeholder, required, disabled }: TextInputProps) => {
  return (
    <div className={style.InputWrap}>
      <label htmlFor={id} className={className}>{children}</label>
      <input
        type="text"
        id={id}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  )
};

interface DateInputProps extends InputDefaultProps {
  dataPlaceholder?: string;
  areaRequired?: boolean;
};
export const DateInput = ({ children, className, id, name, defaultValue, value, dataPlaceholder, required, areaRequired, disabled }: DateInputProps) => {
  return (
    <div className={style.InputWrap}>
      <label htmlFor={id} className={className}>{children}</label>
      <input
        type="date"
        id={id}
        name={name}
        defaultValue={defaultValue}
        value={value}
        data-placeholder={dataPlaceholder}
        required={required}
        area-required={areaRequired}
        disabled={disabled}
      />
    </div>
  )
};

interface PwInputProps extends InputDefaultProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export const PwInput = ({ children, className, id, name, defaultValue, value, onChange, placeholder, required, disabled }: PwInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleEye = () => {setShowPassword(!showPassword)};

  return (
    <div className={style.InputWrap}>
      <label htmlFor={id} className={className}>{children}</label>
      <div className={style.InputGroup}>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
        <span className={style.Eye} onClick={toggleEye}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      </div>
    </div>
  )
};

export const FileInput = ({ children, className, id, name, defaultValue, value, onChange, placeholder, required, disabled }: TextInputProps) => {
  return (
    <div className={style.InputWrap}>
      <label htmlFor={id} className={className}>{children}</label>
      <input
        type="file"
        id={id}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  )
};

interface TextareaProps extends InputDefaultProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
export const Textarea = ({ children, id, name, className, defaultValue, value, onChange, placeholder, required, disabled }: TextareaProps) => {
  return (
    <div className={style.InputWrap}>
      <label htmlFor={id} className={className}>{children}</label>
      <TextareaAutosize id={id} name={name} defaultValue={defaultValue} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} />
    </div>
  )
};
