// filepath: c:\Users\Rahul Kakkar\Desktop\Credex\softsell-site\src\components\LicenseForm.jsx
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

const LicenseForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    softwareName: '',
    softwareVersion: '',
    licenseType: '',
    numberOfSeats: '',
    licenseKey: '',
    originalPurchaseDate: '',
    expirationDate: '',
    transferable: '',
    proofOfPurchase: null,
    askingPrice: '',
    negotiable: false,
    availableRegion: '',
    softwareDescription: '',
    reasonForSelling: '',
    screenshot: null,
    fullName: '',
    email: '',
    phoneNumber: '',
    terms: false
  });

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onClose) onClose();
      window.location.href = '/';
    }, 2000); // 2 seconds before redirect
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-black/40 shadow-xl rounded-2xl w-full max-w-2xl h-[90vh] flex flex-col">
        {/* Move the close button here, outside the scrollable area */}
        <button
          className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-gray-200 rounded-full p-2"
          onClick={onClose}
          aria-label="Close form"
          type="button"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-2xl font-bold mb-6">Sell a Software License</h2>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-[60vh] animate-fadeIn">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-6 animate-scaleIn">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l3 3 7-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">Success!</h3>
              <p className="text-lg text-gray-700 text-center">
                Your license has been listed in the marketplace.<br/>
                Redirecting to home...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* License Details */}
              <div>
                <Label>Software Name</Label>
                <Input
                  name="softwareName"
                  placeholder="e.g., Adobe Photoshop"
                  value={formData.softwareName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Software Version</Label>
                <Input
                  name="softwareVersion"
                  placeholder="e.g., 2021 Pro"
                  value={formData.softwareVersion}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>License Type</Label>
                <Input
                  name="licenseType"
                  placeholder="e.g., Retail / OEM / Subscription"
                  value={formData.licenseType}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Number of Seats</Label>
                <Input
                  type="number"
                  name="numberOfSeats"
                  placeholder="e.g., 1, 5, 10"
                  value={formData.numberOfSeats}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>License Key (optional)</Label>
                <Input
                  name="licenseKey"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={formData.licenseKey}
                  onChange={handleChange}
                />
              </div>

              {/* Validity */}
              <div>
                <Label>Original Purchase Date</Label>
                <Input
                  type="date"
                  name="originalPurchaseDate"
                  value={formData.originalPurchaseDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Expiration Date</Label>
                <Input
                  type="date"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Transferable</Label>
                <Input
                  name="transferable"
                  placeholder="Yes / No / Don't Know"
                  value={formData.transferable}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Proof of Purchase (PDF/Image)</Label>
                <Input
                  type="file"
                  name="proofOfPurchase"
                  accept=".pdf,image/*"
                  onChange={handleFileChange}
                />
              </div>

              {/* Pricing */}
              <div>
                <Label>Asking Price</Label>
                <Input
                  type="number"
                  name="askingPrice"
                  placeholder="e.g., 5000"
                  value={formData.askingPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="negotiable"
                  name="negotiable"
                  checked={formData.negotiable}
                  onChange={handleChange}
                />
                <Label htmlFor="negotiable">Price is negotiable</Label>
              </div>

              <div>
                <Label>Available Region</Label>
                <Input
                  name="availableRegion"
                  placeholder="e.g., Global / India only"
                  value={formData.availableRegion}
                  onChange={handleChange}
                />
              </div>

              {/* Additional Info */}
              <div>
                <Label>Software Description</Label>
                <Textarea
                  name="softwareDescription"
                  placeholder="Brief description about the software or license."
                  value={formData.softwareDescription}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Reason for Selling</Label>
                <Textarea
                  name="reasonForSelling"
                  placeholder="Why are you selling this license?"
                  value={formData.reasonForSelling}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Upload Screenshot (optional)</Label>
                <Input
                  type="file"
                  name="screenshot"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              {/* Seller Info */}
              <div>
                <Label>Full Name / Organization</Label>
                <Input
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Phone Number (optional)</Label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Terms & Conditions</h3>
                <div className="h-40 overflow-y-scroll p-3 border rounded bg-gray-50 text-sm text-black">
                  <p><strong>Effective Date:</strong> {today}</p>
                  <p><strong>Eligibility:</strong> You must be 18+ and legally capable of entering a contract under Indian law.</p>
                  <p><strong>License Legality:</strong> You confirm that you own the license legally and are allowed to resell it.</p>
                  <p><strong>No Piracy:</strong> Counterfeit, cracked, or pirated licenses are strictly prohibited. Legal action will be taken.</p>
                  <p><strong>Accuracy:</strong> Information must be truthful. Proof of purchase may be requested.</p>
                  <p><strong>Pricing & Payment:</strong> You set your price. SoftSell may charge a service fee. All payments are RBI-compliant.</p>
                  <p><strong>Refunds:</strong> No refunds once the buyer activates/downloads. Disputes will be handled by SoftSell support.</p>
                  <p><strong>Privacy:</strong> Your data is protected under Indian IT privacy rules and not shared except as required by law.</p>
                  <p><strong>Governing Law:</strong> These terms are governed by Indian laws. Disputes fall under [Your City] jurisdiction.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    name="terms"
                    required
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <Label htmlFor="terms">I agree to the Terms & Conditions above</Label>
                </div>
              </div>

              <Button type="submit" className="w-full">Submit License</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LicenseForm;