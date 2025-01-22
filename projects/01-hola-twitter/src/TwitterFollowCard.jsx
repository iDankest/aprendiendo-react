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
    <article className="tw-followCard">
      {/* <article style={{ display: 'flex', gap: '1rem' }}>//Foma de estilar el componente pero no la recomendada la forma recomendada es con clases con className    */}
      <header className="tw-followCard-header">
        <img src={urlImage} alt="Avatar" className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
          <strong>
            <span>{name}</span>{' '}
          </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button" onClick={handleButtonClick}>
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </aside>
    </article>
  );
}
