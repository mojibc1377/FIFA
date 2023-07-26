import React, { useState } from 'react';

const avatars = [
    '/images/avatars/EJCj0hJ5N4Ki940uwZyk--3--syi4d.jpg',
    '/images/avatars/EJCj0hJ5N4Ki940uwZyk--4--jjpi9.jpg',
    '/images/avatars/WFEifZEI5SaxCtDuOJJH--1--df0wa.jpg',
    '/images/avatars/cartoonish-profile-avatar-soccer-related-ZSpzbLFhEO-watermarked.png',
    '/images/avatars/craiyon_010413_john_terry_caricature.png',
    '/images/avatars/craiyon_010826_harry_maguire_caricature.png',
    '/images/avatars/craiyon_010947_Zidane_enfant_en_pixar_et_fait_que_D_ID_ne_le_reconnaisse_pas__J_aimerai_que_la_quali.png',
    '/images/avatars/craiyon_011013_bald_neymar.png',
    '/images/avatars/craiyon_011030_ronaldo_nazario_funny_caricature.png',
    '/images/avatars/craiyon_011148_messi_funny_caricature.png',
    '/images/avatars/cristiano-ronaldo-profile-avatar-soccer-related-iypa1hDVpF-watermarked.png',
    // Add the paths of all 20 avatars here
  ];
  

function AvatarSelector({ onAvatarSelect }) {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]); // Default selection

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
    onAvatarSelect(selectedAvatar)

  };

  return (
    <div>
      <h3>Select your avatar:</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            style={{
              cursor: 'pointer',
              border: selectedAvatar === avatar ? '2px solid blue' : 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
            onClick={() => handleAvatarChange(avatar)}
          />
        ))}
      </div>
      {selectedAvatar && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <h3>Preview:</h3>
          <img
            src={selectedAvatar}
            alt="Preview Avatar"
            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
          />
        </div>
      )}
    </div>
  );
}

export default AvatarSelector;
