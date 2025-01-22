import { useState } from 'react';

export function TwitterFollowCard({
  userName,
  name,
  isFollowing: initialIsFollowing = false,
  urlImage,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article>
      {/* <article style={{ display: 'flex', gap: '1rem' }}>//Foma de estilar el componente pero no la recomendada la forma recomendada es con clases con className    */}
      <header>
        <img src={urlImage} alt="Avatar" />
        <div>
          <strong>
            <span>{name}</span>
            <span>@{userName}</span>
          </strong>
        </div>
      </header>
      <aside>
        <button onClick={handleButtonClick}>
          {isFollowing ? 'Siguiendo' : 'Follow'}
        </button>
      </aside>
    </article>
  );
}
