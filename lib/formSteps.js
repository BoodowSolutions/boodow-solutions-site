export const handymanSteps = [
  { name: 'serviceType', label: 'Type of work', type: 'select', options: ['General repairs', 'Installations', 'Maintenance', 'Painting', 'Plumbing', 'Electrical', 'Furniture assembly', 'Other'] },
  { name: 'urgency', label: 'How soon do you need it?', type: 'select', options: ['Today', 'This week', 'Within 2 weeks', 'No rush'] },
  { name: 'description', label: 'Describe the work needed', type: 'textarea', placeholder: 'Tell us what needs to be done...' },
  { name: 'address', label: 'Job address', type: 'text', placeholder: 'Street, city, ZIP...' },
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '(561) 555-0000' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

export const residentialSteps = [
  { name: 'cleaningType', label: 'Type of cleaning', type: 'select', options: ['Standard cleaning', 'Deep cleaning', 'Move-in / Move-out', 'Post-construction', 'Airbnb turnover', 'Window cleaning'] },
  { name: 'squareFootage', label: 'Approximate home size (sq ft)', type: 'text', placeholder: 'e.g. 1,500' },
  { name: 'frequency', label: 'How often?', type: 'select', options: ['One time', 'Weekly', 'Bi-weekly', 'Monthly'] },
  { name: 'preferredDate', label: 'Preferred date', type: 'text', placeholder: 'e.g. Next Monday morning' },
  { name: 'address', label: 'Home address', type: 'text', placeholder: 'Street, city, ZIP...' },
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '(561) 555-0000' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

export const commercialSteps = [
  { name: 'businessType', label: 'Type of business', type: 'select', options: ['Office', 'Retail store', 'Restaurant / Café', 'Condominium / HOA', 'Medical / Clinic', 'Other'] },
  { name: 'squareFootage', label: 'Approximate space size (sq ft)', type: 'text', placeholder: 'e.g. 3,000' },
  { name: 'frequency', label: 'How often?', type: 'select', options: ['One time', 'Daily', 'Weekly', 'Bi-weekly', 'Monthly'] },
  { name: 'specialNeeds', label: 'Any special requirements?', type: 'textarea', placeholder: 'After-hours access, sanitization, floor care...' },
  { name: 'address', label: 'Business address', type: 'text', placeholder: 'Street, city, ZIP...' },
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Smith' },
  { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '(561) 555-0000' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
]
