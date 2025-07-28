import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  
  const parseValue = (val) => {
    if (typeof val === 'number' && !isNaN(val)) {
      return val;
    }

    if (typeof val === 'string') {
      const cleanedValue = val.replace(/,/g, '');
      const parsed = parseFloat(cleanedValue);
      return !isNaN(parsed) ? parsed : 0;
    }

    return 0;
  };

  const numericValue = parseValue(value);

  
  const formattedValue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(numericValue);

  return (
    <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50">

      <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>

      <div>
        <h6 className="text-sm text-gray-500 mb-1">{label}</h6>
        <span
          className={`text-[22px] font-medium ${
            numericValue < 0 ? 'text-red-500' : 'text-gray-900'
          }`}
        >
          {formattedValue}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
