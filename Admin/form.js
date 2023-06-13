import React, { useState } from 'react';
import './form.css';

const ReusableForm = ({ fields, onSubmit, title, breadcrumbs }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <nav>
        <ul>
          {Array.isArray(breadcrumbs) ? breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.name}>{breadcrumb.label}</li>
          )):[]}
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <p className="title">{title}</p>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            {field.type === 'select' ? (
              <select name={field.name} value={formData[field.name] || ''} onChange={handleChange}>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReusableForm;
