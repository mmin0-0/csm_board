import { ChangeEventHandler } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import * as style from '@/app/styles/component/input.css';

type TextInputProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};
export const TextInput  = ({children, className, id, name, defaultValue, value, onChange, placeholder, required, disabled}:TextInputProps) => {
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

type TextareaProps = {
  children: React.ReactNode;
  id: string;
  name?: string;
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};
export const Textarea = ({children, id, name, className, defaultValue, value, onChange, placeholder, required, disabled}:TextareaProps) => {
  return (
    <div className={style.InputWrap}>
      <label htmlFor={id} className={className}>{children}</label>
      <TextareaAutosize id={id} name={name} defaultValue={defaultValue} value={value} onChange={onChange} placeholder={placeholder} required={required} disabled={disabled} />
    </div>
  )
};