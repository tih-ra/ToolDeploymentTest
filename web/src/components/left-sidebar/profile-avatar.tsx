import React from 'react';
import { useGoogleAuth } from 'contexts/google-auth';
import ProfileAvatarS from './profile-avatar.styled';

const ProfileAvatar = () => {
  const {
    signOut,
    googleUser: { profileObj }
  } = useGoogleAuth();

  return <ProfileAvatarS imageUrl={profileObj.imageUrl} onClick={signOut} />;
};

export default ProfileAvatar;
