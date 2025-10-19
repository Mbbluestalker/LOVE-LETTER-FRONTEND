const ReviewStep = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-gray-900 font-display">Review Your Information</h3>
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-primary-50/50 to-white/50 rounded-xl p-6 border border-primary-200/50">
          <h4 className="font-semibold text-gray-900 mb-4 font-display">Personal Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">First Name</p>
              <p className="font-medium text-gray-900">John</p>
            </div>
            <div>
              <p className="text-gray-500">Last Name</p>
              <p className="font-medium text-gray-900">Doe</p>
            </div>
            <div>
              <p className="text-gray-500">Date of Birth</p>
              <p className="font-medium text-gray-900">01/15/1990</p>
            </div>
            <div>
              <p className="text-gray-500">Gender</p>
              <p className="font-medium text-gray-900">Male</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary-50/50 to-white/50 rounded-xl p-6 border border-secondary-200/50">
          <h4 className="font-semibold text-gray-900 mb-4 font-display">Contact Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium text-gray-900">john.doe@example.com</p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-500">Address</p>
              <p className="font-medium text-gray-900">123 Main St, New York, NY 10001</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-50/50 to-white/50 rounded-xl p-6 border border-accent-200/50">
          <h4 className="font-semibold text-gray-900 mb-4 font-display">Preferences</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Contact Method</p>
              <p className="font-medium text-gray-900">Email</p>
            </div>
            <div>
              <p className="text-gray-500">Language</p>
              <p className="font-medium text-gray-900">English</p>
            </div>
            <div>
              <p className="text-gray-500">Email Notifications</p>
              <p className="font-medium text-gray-900">Enabled</p>
            </div>
            <div>
              <p className="text-gray-500">SMS Notifications</p>
              <p className="font-medium text-gray-900">Disabled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
