// AvatarWithName.js

import React from 'react';

const AvatarWithName = ({ avatarSrc, name }) => {
  return (
    <div style={styles.container}>
      <img src={avatarSrc} alt="Avatar" style={styles.avatar} />
      <p style={styles.name}>{name}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center', // Align items vertically
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
};

export default AvatarWithName;
