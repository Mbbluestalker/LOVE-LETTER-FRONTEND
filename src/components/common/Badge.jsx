const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false,
  ...props
}) => {
  const variants = {
    default: 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 shadow-sm',
    primary: 'bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 shadow-sm shadow-primary-500/20',
    secondary: 'bg-gradient-to-r from-secondary-100 to-secondary-50 text-secondary-800 shadow-sm shadow-secondary-500/20',
    accent: 'bg-gradient-to-r from-accent-100 to-accent-50 text-accent-800 shadow-sm shadow-accent-500/20',
    success: 'bg-gradient-to-r from-success-light to-success/20 text-success-dark shadow-sm shadow-success/20',
    warning: 'bg-gradient-to-r from-warning-light to-warning/20 text-warning-dark shadow-sm shadow-warning/20',
    error: 'bg-gradient-to-r from-error-light to-error/20 text-error-dark shadow-sm shadow-error/20',
    info: 'bg-gradient-to-r from-info-light to-info/20 text-info-dark shadow-sm shadow-info/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
      )}
      {children}
    </span>
  );
};

export default Badge;
