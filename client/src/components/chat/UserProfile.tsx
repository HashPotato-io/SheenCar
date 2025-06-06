import React from 'react';

interface UserProfileProps {
  imageUrl: string;
  name: string;
  imageClassName?: string;
  nameClassName?: string;
  containerClassName?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  imageUrl,
  name,
  imageClassName = "w-[112.69px] h-[112.69px] rounded-full border-[12px] border-[#F8F8F8]",
  nameClassName = "font-['Gilroy-SemiBold'] text-[30px] leading-[100%] tracking-[-0.01em] text-white",
  containerClassName = "flex flex-col items-center space-y-4"
}) => {
  return (
    <div className="p-6">
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
  );
};

export default UserProfile; 