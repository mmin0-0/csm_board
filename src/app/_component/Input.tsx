import { ChangeEventHandler } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import * as style from '@/app/styles/component/input.css';

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
