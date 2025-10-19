const Card = ({
  children,
  title,
  subtitle,
  actions,
  className = '',
  padding = true,
  hover = false,
  ...props
}) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 ${hover ? 'hover:shadow-2xl hover:scale-[1.02] transition-all duration-300' : 'transition-shadow'} ${className}`}
      {...props}
    >
      {(title || subtitle || actions) && (
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 font-display">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}

      <div className={padding ? 'p-6' : ''}>
        {children}
      </div>
    </div>
  );
};

export default Card;
