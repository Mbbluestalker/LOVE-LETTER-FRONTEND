import { useState } from 'react';
import {
  Button,
  Input,
  Select,
  Card,
  Modal,
  Table,
  Badge,
  Loader,
  Alert,
} from '../../components/common';

const ComponentDemo = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const tableColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <Badge variant={row.status}>{row.status}</Badge>,
    },
  ];

  const tableData = [
    { name: 'John Doe', email: 'john@example.com', status: 'success' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'warning' },
    { name: 'Bob Johnson', email: 'bob@example.com', status: 'error' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 font-display">Component Demo</h2>
      </div>

      {/* Alerts */}
      <Card title="Alerts">
        <div className="space-y-4">
          {showAlert && (
            <Alert
              type="success"
              title="Success"
              message="This is a success alert message"
              onClose={() => setShowAlert(false)}
            />
          )}
          <Alert
            type="error"
            title="Error"
            message="This is an error alert message"
          />
          <Alert
            type="warning"
            title="Warning"
            message="This is a warning alert message"
          />
          <Alert
            type="info"
            title="Information"
            message="This is an info alert message"
          />
        </div>
      </Card>

      {/* Buttons */}
      <Card title="Buttons">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="primary" size="sm">
            Small Button
          </Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
        </div>
      </Card>

      {/* Inputs */}
      <Card title="Input Fields">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Text Input"
            name="text"
            placeholder="Enter text"
            helperText="This is helper text"
          />
          <Input
            label="Email Input"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
          />
          <Input
            label="Password Input"
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <Input
            label="Input with Error"
            name="error"
            placeholder="Enter value"
            error="This field has an error"
          />
          <Input
            label="Disabled Input"
            name="disabled"
            placeholder="Disabled"
            disabled
          />
        </div>
      </Card>

      {/* Select */}
      <Card title="Select Dropdown">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Select an Option"
            name="select"
            placeholder="Choose one"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
          <Select
            label="Required Select"
            name="required"
            placeholder="Choose one"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            required
          />
          <Select
            label="Select with Error"
            name="error"
            placeholder="Choose one"
            options={[
              { value: 'option1', label: 'Option 1' },
            ]}
            error="Please select an option"
          />
          <Select
            label="Disabled Select"
            name="disabled"
            placeholder="Choose one"
            options={[
              { value: 'option1', label: 'Option 1' },
            ]}
            disabled
          />
        </div>
      </Card>

      {/* Badges */}
      <Card title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </Card>

      {/* Table */}
      <Card title="Table">
        <Table columns={tableColumns} data={tableData} striped hoverable />
      </Card>

      {/* Modal */}
      <Card title="Modal">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Example Modal"
          footer={
            <>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p className="text-gray-700">
            This is an example modal dialog. You can put any content here.
          </p>
        </Modal>
      </Card>

      {/* Loader */}
      <Card title="Loaders">
        <div className="flex flex-wrap gap-8 items-center">
          <div>
            <p className="text-sm text-gray-600 mb-2">Small</p>
            <Loader size="sm" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Medium</p>
            <Loader size="md" />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Large</p>
            <Loader size="lg" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ComponentDemo;
