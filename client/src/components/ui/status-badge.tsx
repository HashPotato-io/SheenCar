import React from 'react';

type StatusType = 'active' | 'completed' | 'closed' | 'pending' | 'rejected';

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStyles = (status: StatusType) => {
    switch (status) {
      case 'active':
        return {
          background: '#D6F2FF',
          color: '#007AFF',
        };
      case 'completed':
        return {
          background: '#D7FFF1',
          color: '#026442',
        };
      case 'closed':
        return {
          background: '#EFEFEF',
          color: '#585353',
        };
      case 'pending':
        return {
          background: '#F0EBD1',
          color: '#C8A104',
        };
        case 'rejected':
          return {
            background: '#FEE2E2',
            color: '#761B1C',
          };
    }
  };

  const styles = getStyles(status);

  return (
    <div
      style={{
        width: 'auto',
        height: '26px',
        gap: '10px',
        padding: '4px 8px',
        borderRadius: '4px',
        ...styles,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 500,
      }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default StatusBadge; 