import React from 'react';

interface CustomToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomToggle: React.FC<CustomToggleProps> = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        position: 'relative',
        width: '42px',
        height: '23.7px',
        borderRadius: '76.47px',
        backgroundColor: checked ? '#003A2F' : '#E5E5E5',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '2px',
          left: checked ? '20px' : '2px',
          width: '19.7px',
          height: '19.7px',
          borderRadius: '50%',
          backgroundColor: 'white',
          transition: 'left 0.2s',
        }}
      />
    </button>
  );
};

export default CustomToggle; 