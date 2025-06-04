export const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow p-0 ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-2 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-2 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm ${className}`}>{children}</p>
);
