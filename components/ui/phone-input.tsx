import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface CustomPhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  className?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <PhoneInput
        country={'us'}
        value={value}
        onChange={onChange}
        inputStyle={{
          width: '100%',
          height: 40,
          border: '1px solid #CFCFCF',
          background: 'transparent',
        }}
        buttonStyle={{
          border: '1px solid #CFCFCF',
          borderRadius: 6,
          background: 'transparent',
        }}
        containerStyle={{
          width: '100%',
        }}
      />
    </div>
  );
};

export default CustomPhoneInput; 