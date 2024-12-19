import React from 'react';

interface LabelInputProps {
  label: string;
  id: string;
  type?: string; // Optional, defaults to text
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  className?: string;
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
      />
    </div>
  );
};

export default LabelInput;
