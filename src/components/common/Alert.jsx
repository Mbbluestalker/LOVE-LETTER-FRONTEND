const Alert = ({
  type = 'info',
  title,
  message,
  onClose,
  className = '',
}) => {
  const types = {
    success: {
      bg: 'bg-success-light',
      border: 'border-success',
      icon: 'text-success-dark',
      text: 'text-success-dark',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    error: {
      bg: 'bg-error-light',
      border: 'border-error',
      icon: 'text-error-dark',
      text: 'text-error-dark',
      iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    warning: {
      bg: 'bg-warning-light',
      border: 'border-warning',
      icon: 'text-warning-dark',
      text: 'text-warning-dark',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    },
    info: {
      bg: 'bg-info-light',
      border: 'border-info',
      icon: 'text-info-dark',
      text: 'text-info-dark',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const style = types[type];

  return (
    <div
      className={`${style.bg} ${style.border} border-2 rounded-xl p-4 shadow-sm backdrop-blur-sm ${className}`}
      role="alert"
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className={`h-5 w-5 ${style.icon}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={style.iconPath}
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${style.text}`}>{title}</h3>
          )}
          {message && (
            <div className={`text-sm ${style.text} ${title ? 'mt-2' : ''}`}>
              {message}
            </div>
          )}
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <button
              onClick={onClose}
              className={`inline-flex rounded-xl p-2 ${style.icon} hover:bg-white/50 focus:outline-none transition-all duration-200`}
            >
              <span className="sr-only">Dismiss</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
