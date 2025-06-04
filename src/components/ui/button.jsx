export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition text-sm disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);
