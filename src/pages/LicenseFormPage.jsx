// filepath: c:\Users\Rahul Kakkar\Desktop\Credex\softsell-site\src\components\LicenseForm.jsx
import React, { useState } from 'react';
import { Button, Input, Textarea } from './ui'; // Adjust the import based on your UI library

const LicenseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">License Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="licenseType" className="block text-sm font-medium">License Type</label>
          <Input id="licenseType" name="licenseType" value={formData.licenseType} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default LicenseForm;