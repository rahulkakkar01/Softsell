import React from 'react';

export const Checkbox = React.forwardRef(({ className = '', ...props }, ref) => (
  <input
    type="checkbox"
    ref={ref}
    className={`form-checkbox h-4 w-4 text-primary border-gray-300 rounded ${className}`}
    {...props}
  />
));