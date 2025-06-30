import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {useNavigate} from 'react-router-dom';
interface UserProfileProps {
  imageUrl: string;
  name: string;
  imageClassName?: string;
  nameClassName?: string;
  containerClassName?: string;
  onBackClick?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  imageUrl,
  name,
  imageClassName = "w-[112.69px] h-[112.69px] rounded-full border-[12px] border-[#F8F8F8]",
  nameClassName = "font-['Gilroy-SemiBold'] text-[30px] leading-[100%] tracking-[-0.01em] text-white",
  containerClassName = "flex flex-col items-center space-y-4",
  onBackClick,
}) => {

  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1); // This navigates back
    }
  };
  return (
    <div className="flex w-full items-center justify-between p-3 lg:p-6 relative">
      {/* Back Button on the left */}
      <button
        onClick={handleBack}
        className="md:hidden p-2 mb-16 text-black absolute left-3"
        style={{ zIndex: 2 }}
      >
        <ArrowLeft />
      </button>

      {/* Centered Profile */}
      <div className="flex-1 flex justify-center">
        <div className={containerClassName}>
          <img
            src={imageUrl}
            alt={name}
            className={imageClassName}
          />
          <span className={nameClassName}>
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
