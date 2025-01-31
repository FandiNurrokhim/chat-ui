import { useState } from 'react';

export default function Avatar({ width, height, image, name }) {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name) => {
    const initials = name.split(' ').map(word => word[0]).join('');
    return initials.substring(0, 2).toUpperCase();
  };

  return (
    <div className={`rounded-full ${width} ${height} flex items-center justify-center bg-[#005c4b] text-white`}>
      {image && !imageError ? (
        <img 
          src={`/img/${image}`} 
          alt="Avatar Image" 
          width="96" 
          height="96" 
          className="rounded-full" 
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-xl font-bold">{getInitials(name)}</span>
      )}
    </div>
  );
}
