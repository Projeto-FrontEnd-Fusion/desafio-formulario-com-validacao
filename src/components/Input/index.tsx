import React from "react";

interface InputProps {
  placeholder: string;
  name: string;
  label: string;
  type: string;
  id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {props.label}
      </label>
      <input
        className='w-full p-2 border bg-transparent text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 autofill:text-gray-800'
        ref={ref}
        {...props}
        autoComplete="true"
      />
    </div>
  );
});

export default Input;
