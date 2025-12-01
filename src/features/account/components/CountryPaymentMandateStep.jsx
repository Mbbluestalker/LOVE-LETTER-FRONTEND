import Input from '../../../components/common/Input';

const CountryPaymentMandateStep = ({ onAddMandateApprovers }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Country Payment Mandate Section */}
      <div className="space-y-6">
        <div className="border-2 border-gray-200 rounded-3xl p-8 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <Input
              label="For this amount (local $):"
              type="text"
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm text-gray-500 italic">Bank name & account number</label>
                <button
                  onClick={onAddMandateApprovers}
                  className="text-xs text-gray-700 hover:text-gray-900 font-medium"
                >
                  + Add mandate approvers
                </button>
              </div>
              <Input
                type="text"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <Input
              label="For this amount (local $): Or less than:"
              type="text"
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm text-gray-500 italic">Bank name & account number</label>
                <button
                  onClick={onAddMandateApprovers}
                  className="text-xs text-gray-700 hover:text-gray-900 font-medium"
                >
                  + Add mandate approvers
                </button>
              </div>
              <Input
                type="text"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <Input
              label="For this amount (local $): Greater than:"
              type="text"
            />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm text-gray-500 italic">Bank name & account number</label>
                <button
                  onClick={onAddMandateApprovers}
                  className="text-xs text-gray-700 hover:text-gray-900 font-medium"
                >
                  + Add mandate approvers
                </button>
              </div>
              <Input
                type="text"
              />
            </div>
          </div>
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
              placeholder="Write general notes to let your subordinate different officers be aware of any general situation in relation to subscription"
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
              placeholder="You can elaborate the form to write separate specific notes for each of the amount bands to be fulfilled for subscription"
              className="w-full text-sm text-gray-600 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPaymentMandateStep;
