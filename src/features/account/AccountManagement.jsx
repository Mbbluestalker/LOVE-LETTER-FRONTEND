import { useState } from 'react';
import { Button } from '../../components/common';
import {
  BasicInformationStep,
  CountryPaymentMandateStep,
  BrownCardPaymentStep,
  ReviewStep,
  MandateApproversModal,
} from './components';

const AccountManagement = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [showMandateModal, setShowMandateModal] = useState(false);
  const [approvers, setApprovers] = useState([
    { id: 1, firstName: '', lastName: '', phoneNumber: '', email: '', requiresOne: false },
  ]);

  const steps = [
    { number: 1, title: 'Basic Information', description: 'Account setup' },
    { number: 2, title: 'Country Payment Mandate', description: 'Payment details' },
    { number: 3, title: 'Brown Card Payment', description: 'Brown card details' },
    { number: 4, title: 'Review', description: 'Confirm details' },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addApprover = () => {
    const newId = approvers.length + 1;
    setApprovers([
      ...approvers,
      { id: newId, firstName: '', lastName: '', phoneNumber: '', email: '', requiresOne: false },
    ]);
  };

  const removeApprover = (id) => {
    if (approvers.length > 1) {
      setApprovers(approvers.filter((approver) => approver.id !== id));
    }
  };

  const updateApprover = (id, field, value) => {
    setApprovers(
      approvers.map((approver) =>
        approver.id === id ? { ...approver, [field]: value } : approver
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 font-display">Account Setup</h2>
      </div>

      {/* Stepper Container */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 p-8">
        {/* Stepper Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                {/* Step Circle */}
                <div className="flex flex-col items-center relative">
                  <div
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center font-semibold transition-all duration-300 shadow-lg
                      ${
                        currentStep === step.number
                          ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white scale-110 shadow-primary-500/50'
                          : currentStep > step.number
                          ? 'bg-gradient-to-r from-success to-success-dark text-white shadow-success/30'
                          : 'bg-gray-100 text-gray-400'
                      }
                    `}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-4 rounded-full bg-gray-200 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                        currentStep > step.number
                          ? 'w-full bg-gradient-to-r from-success to-success-dark'
                          : 'w-0 bg-gradient-to-r from-primary-600 to-primary-500'
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          {currentStep === 1 && <BasicInformationStep />}
          {currentStep === 2 && (
            <CountryPaymentMandateStep onAddMandateApprovers={() => setShowMandateModal(true)} />
          )}
          {currentStep === 3 && (
            <BrownCardPaymentStep onAddMandateApprovers={() => setShowMandateModal(true)} />
          )}
          {currentStep === 4 && <ReviewStep />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200/50">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>

          <div className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <Button variant="primary" onClick={handleNext}>
              Next Step
            </Button>
          ) : (
            <Button variant="primary" onClick={() => alert('Setup Complete!')}>
              Complete Setup
            </Button>
          )}
        </div>
      </div>

      {/* Add Mandate Approvers Modal */}
      <MandateApproversModal
        isOpen={showMandateModal}
        onClose={() => setShowMandateModal(false)}
        approvers={approvers}
        onAddApprover={addApprover}
        onRemoveApprover={removeApprover}
        onUpdateApprover={updateApprover}
      />
    </div>
  );
};

export default AccountManagement;
