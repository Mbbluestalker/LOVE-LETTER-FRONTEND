import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/dashboard' && location.pathname === '/') return true;
    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      badge: '5',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      path: '/users',
      label: 'Users',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      path: '/account',
      label: 'Account',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      path: '/demo',
      label: 'Components',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-72 bg-gradient-to-b from-gray-50/80 via-white/60 to-gray-50/80 backdrop-blur-2xl border-r border-white/20 h-screen fixed left-0 top-0 shadow-xl overflow-y-auto z-30">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200/50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-md opacity-50"></div>
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 p-3 rounded-2xl shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-display leading-tight">Love Letter</h1>
            <p className="text-xs text-gray-500 mt-0.5">Insurance Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-6 space-y-2 pb-48">
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">Main Menu</p>
        </div>

        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 overflow-hidden ${
                active
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {/* Active background with gradient */}
              {active && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 rounded-2xl blur-xl opacity-50"></div>
                </>
              )}

              {/* Hover background */}
              {!active && (
                <div className="absolute inset-0 bg-white/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"></div>
              )}

              {/* Icon container */}
              <div className={`relative z-10 p-2 rounded-xl transition-all ${
                active
                  ? 'bg-white/20'
                  : 'bg-gray-100 group-hover:bg-primary-50 group-hover:scale-110'
              }`}>
                <div className={active ? 'text-white' : 'text-gray-600 group-hover:text-primary-600'}>
                  {item.icon}
                </div>
              </div>

              {/* Label */}
              <span className={`relative z-10 font-medium text-sm ${
                active ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
              }`}>
                {item.label}
              </span>

              {/* Badge */}
              {item.badge && (
                <span className={`relative z-10 ml-auto px-2 py-0.5 rounded-full text-xs font-semibold ${
                  active
                    ? 'bg-white/20 text-white'
                    : 'bg-primary-100 text-primary-700'
                }`}>
                  {item.badge}
                </span>
              )}

              {/* Active indicator */}
              {active && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-l-full"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom card */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
          <div className="relative z-10">
            <h3 className="text-white font-bold text-sm mb-1">Need Help?</h3>
            <p className="text-white/80 text-xs mb-3">Check our documentation</p>
            <button className="bg-white text-primary-600 px-4 py-2 rounded-xl text-xs font-semibold hover:shadow-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
