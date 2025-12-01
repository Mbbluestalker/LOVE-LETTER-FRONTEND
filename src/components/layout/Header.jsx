import Input from '../common/Input';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-2xl shadow-sm border-b border-white/20 sticky top-0 z-40">
      <div className="px-8 py-2.5 flex items-center justify-between">
        {/* Left side - Breadcrumb or page info can go here */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Welcome back!</h2>
          <p className="text-sm text-gray-500">Here's what's happening today</p>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="hidden md:block">
            <Input
              type="text"
              placeholder="Search..."
              icon={
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
          </div>

          {/* Notifications */}
          <button className="relative p-3 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all shadow-sm hover:shadow-md group">
            <svg className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full animate-pulse"></span>
          </button>

          {/* User profile */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-200/50">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></span>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">admin@loveletter.com</p>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
