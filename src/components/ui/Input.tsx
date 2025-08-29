import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export function Input({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  const baseStyles = 'block px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  const stateStyles = error 
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300 focus:border-[#3b82f6] focus:ring-[#3b82f6]';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedClassName = `${baseStyles} ${stateStyles} ${widthStyles} ${className}`.trim();
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={combinedClassName}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
