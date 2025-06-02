import React from 'react';

type StatusType = 'active' | 'completed' | 'closed' | 'pending' | 'sell' | 'buy' | 'rejected';

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
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 400,
        };
      case 'completed':
        return {
          background: '#D7FFF1',
          color: '#026442',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 400,
        };
      case 'closed':
        return {
          background: '#EFEFEF',
          color: '#585353',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 400,
        };
      case 'pending':
        return {
          background: '#F0EBD1',
          color: '#C8A',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 400,
        };
      case 'sell':
        return {
          background: '#CCD7F9',
          color: '#5856D6',
          width: "82px",
          height: '23px',
          gap: '8.07px',
          padding: '4px 6px',
          borderRadius: '3.23px',
          fontFamily: 'Gilroy-Medium',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
        };
      case 'buy':
        return {
          background: '#CCD7F9',
          color: '#5856D6',
          width: '86px',
          height: '23px',
          gap: '8.07px',
          padding: '4px 6px',
          borderRadius: '3.23px',
          fontFamily: 'Gilroy-Medium',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
        };
      case 'rejected':
        return {
          background: '#FEE2E2',
          color: '#761B1C',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 400,
        };
    }
  };

  const styles = getStyles(status);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...styles,
      }}
    >
      {status === 'sell' ? 'Sell It For Me' : 
       status === 'buy' ? 'Buy It For Me' :
       status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default StatusBadge; 