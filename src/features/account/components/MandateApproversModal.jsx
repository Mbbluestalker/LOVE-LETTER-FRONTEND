import { Button, Modal } from '../../../components/common';

const MandateApproversModal = ({
  isOpen,
  onClose,
  approvers,
  onAddApprover,
  onRemoveApprover,
  onUpdateApprover,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      showCloseButton={false}
    >
      <div className="space-y-6">
        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center font-display">
          Add Mandate Approvers
        </h2>

        {/* Instructions */}
        <p className="text-sm text-gray-600 text-center">
          Type and enter name, phone number and email address of approver(s)
        </p>

        {/* Approvers Table */}
        <div className="border-2 border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">
                  First Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">
                  Last Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">
                  Phone Number
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">
                  Email
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-600">
                  This mandate requires one
                </th>
                <th className="px-3 py-3 text-center text-xs font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {approvers.map((approver) => (
                <tr key={approver.id}>
                  <td className="px-3 py-3">
                    <input
                      type="text"
                      value={approver.firstName}
                      onChange={(e) =>
                        onUpdateApprover(approver.id, 'firstName', e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="text"
                      value={approver.lastName}
                      onChange={(e) =>
                        onUpdateApprover(approver.id, 'lastName', e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="tel"
                      value={approver.phoneNumber}
                      onChange={(e) =>
                        onUpdateApprover(approver.id, 'phoneNumber', e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="email"
                      value={approver.email}
                      onChange={(e) =>
                        onUpdateApprover(approver.id, 'email', e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={approver.requiresOne}
                      onChange={(e) =>
                        onUpdateApprover(approver.id, 'requiresOne', e.target.checked)
                      }
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={onAddApprover}
                        className="w-6 h-6 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                        title="Add approver"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button
                        onClick={() => onRemoveApprover(approver.id)}
                        className="w-6 h-6 bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors"
                        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                        title="Remove approver"
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="space-y-3 text-xs text-gray-600">
          <p>• The email address must be registered and assigned email address of the officer at the company, otherwise the system would reject the entry.</p>
          <p>• The members' expiration date would automatically apply to all approvers, otherwise you set edit to custom for each of them if that is the choice of company approval policy.</p>
        </div>

        {/* Colored Information Links */}
        <div className="space-y-3 text-xs">
          <p className="text-teal-600">
            Clicking on the green round rectangle leads to a text page requesting which of the approvers is responsible for locking the amount after it's agreed upon; it could be any of them or the superadmin.
          </p>
          <p className="text-orange-600">
            Clicking on the brown triangle leads to a text page requesting which of the approvers it is desired to be closing the transaction after it's agreed upon; it could be any of them or the superadmin.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={onClose}
          >
            Save Approvers
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MandateApproversModal;
