import React from 'react';

const Avatar = ({ src, alt = "User avatar", size = "w-10 h-10" }) => (
  <img src={src} alt={alt} className={`${size} rounded-full`} />
);

export default Avatar;
