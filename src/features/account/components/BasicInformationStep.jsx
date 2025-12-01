import Input from '../../../components/common/Input';

const BasicInformationStep = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Organization Details Section */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <span className="inline-block px-6 py-2 border-2 border-gray-300 rounded-full text-xs font-medium text-gray-600 tracking-wider uppercase">
            Organization Details
          </span>
        </div>

        <div className="border-2 border-gray-200 rounded-3xl p-8 space-y-6">
          {/* Row 1: Organization Name and Superadmin Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Organization Name"
              type="text"
              placeholder="Heart Connect Ltd"
            />
            <Input
              label="Superadmin Name"
              type="text"
            />
          </div>

          {/* Row 2: Designate Contact Number and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Designate Contact Number"
              type="tel"
            />
            <Input
              label="Designate Contact Email"
              type="email"
            />
          </div>

          {/* Row 3: HQ Address with helper text */}
          <div>
            <div className="mb-2">
              <span className="block text-sm text-gray-500 italic">HQ Address</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-400">Add your company's domain address suffix here</span>
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <Input
              type="text"
            />
          </div>
        </div>
      </div>

      {/* Payment Receipt Instructions Section */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <span className="inline-block px-6 py-2 border-2 border-gray-300 rounded-full text-xs font-medium text-gray-600 tracking-wider uppercase">
            Payment Receipt Instructions
          </span>
        </div>

        <div className="border-2 border-gray-200 rounded-3xl p-8 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Use general account"
              type="text"
              placeholder="WEMA BANK LIMITED/MABEL-O..."
            />
            <Input
              label="Bank name & account number"
              type="text"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="For singular liability"
              type="text"
              placeholder="WEMA BANK LIMITED/MABEL-O..."
            />
            <Input
              label="Bank name & account number"
              type="text"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="For shared liability"
              type="text"
              placeholder="WEMA BANK LIMITED/MABEL-O..."
            />
            <Input
              label="Bank name & account number"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* Product: Pure Third Party Section */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <span className="inline-block px-6 py-2 border-2 border-gray-300 rounded-full text-xs font-medium text-gray-600 tracking-wider uppercase">
            Product: Pure Third Party
          </span>
        </div>

        <div className="border-2 border-gray-200 rounded-3xl p-8">
          <p className="text-center text-sm text-gray-700">Brown Card-enabled by default</p>
        </div>
      </div>

      {/* Notes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Notes */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-6 py-2 border-2 border-gray-300 rounded-full text-xs font-medium text-gray-600 tracking-wider uppercase">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              General Notes
            </span>
          </div>
          <div className="border-2 border-gray-200 rounded-3xl p-6">
            <textarea
              rows="8"
              placeholder="Write general notes to let paying client parties know what they should be generally aware of before paying"
              className="w-full text-sm text-gray-600 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* Specific Notes */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-6 py-2 border-2 border-gray-300 rounded-full text-xs font-medium text-gray-600 tracking-wider uppercase">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              Specific Notes
            </span>
          </div>
          <div className="border-2 border-gray-200 rounded-3xl p-6">
            <textarea
              rows="8"
              placeholder="You can elaborate the form to write separate specific notes for each of singular and shared liability with respect to paying client parties"
              className="w-full text-sm text-gray-600 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationStep;
