import React from 'react';

const formData = [
  {label: 'First Name', placeholder: 'Enter your first name'},
  {label: 'Last Name', placeholder: 'Enter your last name'},
  {label: 'Display Name', placeholder: 'Enter your Display name'},
  {label: 'Gender', placeholder: 'Enter Gender'},
  {label: 'Designation', placeholder: 'Enter your Designation'},
  {label: 'Iam...', placeholder: 'Individual'},
  {label: 'Industry', placeholder: 'PR & Marketing'},
  {label: 'Country', placeholder: 'Enter your Country'},
  {label: 'Website', placeholder: 'morismedia.com'},
  {label: 'Address Line', placeholder: 'Enter your Address'},
  {label: 'City', placeholder: 'Enter your City'},
  {label: 'State', placeholder: 'Enter your State'},
  {
    label: 'Company / Organization Name',
    placeholder: 'Enter your Organization name',
  },
  {label: 'Company Type', placeholder: 'Enter your Partnership'},
  {label: 'Seniority Level', placeholder: 'Enter your Seniority'},
  {label: 'Company Headcount', placeholder: 'Enter your Headcount'},
  {label: 'Work Email Address', placeholder: 'Enter your Email Address'},
  {label: 'Work Phone Number', placeholder: 'Enter your Phone Number'},
  {label: 'Company Website', placeholder: 'Enter your Company Website'},
  {label: 'Company Headquarters', placeholder: 'Enter your Headquarters'},
  {label: 'Work Address', placeholder: 'Enter your Work Address'},
  {label: 'Work City', placeholder: 'Enter your Work City'},
  {label: 'Work State', placeholder: 'Enter your Work State'},
  {label: 'Work Country', placeholder: 'Enter your Country'},
];

function MyForm() {
  return (
    <div className="panel-container">
      {formData.map((field, index) => (
        <div className="row" key={index}>
          <div className="col-md-3">
            <label htmlFor={`inputField${index}`} className="form-label">
              {field.label}
            </label>
            <input
              type="text"
              className="form-control"
              id={`inputField${index}`}
              placeholder={field.placeholder}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyForm;
