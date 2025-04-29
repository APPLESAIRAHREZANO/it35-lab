import React from 'react';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Favorites: React.FC = () => {
  const favoriteCharacters = [
    {
      name: 'Stitch',
      image: 'https://i.pinimg.com/originals/c7/32/cc/c732cc59cbc22d704574fe772863e75f.gif',
      reason: 'He shows that even the most chaotic ones can be loving and loyal.'
    },
    {
      name: 'Naruto Uzumaki',
      image: 'https://www.escapistmagazine.com/wp-content/uploads/2024/06/naruto-shippuden-season-6.png',
      reason: 'His determination and never-give-up attitude inspire me.'
    },
    {
      name: 'Gojo Satoru',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7df6de16-e030-47e5-baae-04350d5468d5/dhrx4cx-9879cf57-e5ae-47a4-a040-6e5849ad31b2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkZjZkZTE2LWUwMzAtNDdlNS1iYWFlLTA0MzUwZDU0NjhkNVwvZGhyeDRjeC05ODc5Y2Y1Ny1lNWFlLTQ3YTQtYTA0MC02ZTU4NDlhZDMxYjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rSHAnOs-AUwEhmUKdOy8nk0yZE54XNvwoOinZqjgrPs',
      reason: 'His strength and playful personality make him one of the coolest mentors.'
    },
    {
      name: 'Levi Ackerman',
      image: 'https://64.media.tumblr.com/2231c98b7abbf543c3e320f5ccb8e397/a780966b41ab5da5-62/s1280x1920/b5805e4187a463be608d73d1d4973da3fe243352.jpg',
      reason: 'Calm, skilled, and fiercely loyal — a true leader.'
    },
    {
      name: 'Eren Yeager',
      image: 'https://i.pinimg.com/originals/df/2c/30/df2c305eb143c20321b9e625fca51efa.gif',
      reason: 'His evolution and complexity make his journey compelling.'
    },
    {
      name: 'Itachi Uchiha',
      image: 'https://i.pinimg.com/236x/78/6f/85/786f85fb6c95d6a1ad4135937880072d.jpg',
      reason: 'A tragic hero who sacrificed everything for peace.'
    },
    {
      name: 'Killua Zoldyck',
      image: 'https://i.pinimg.com/originals/1e/a8/0e/1ea80e7cea0d429146580c7e91c5b944.gif',
      reason: 'Cool-headed but kind-hearted — one of the best friends in anime.'
    },
    {
      name: 'Kakashi Hatake',
      image: 'https://i.pinimg.com/1200x/77/e3/90/77e3907f93e957e3376fbb8fc7feb0b1.jpg',
      reason: 'Cool, wise, and mysterious — a legendary ninja and mentor.'
    },
    {
      name: 'Luffy (One Piece)',
      image: 'https://giffiles.alphacoders.com/354/35458.gif',
      reason: 'His love for freedom and friends makes him unforgettable.'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" style={{ background: '#f0f2f5' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
          }}>
            My Favorite Anime Characters
          </h1>
          <p style={{ color: '#666', fontSize: '16px' }}>
            A collection of characters that inspired me most.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            padding: '20px',
          }}
        >
          {favoriteCharacters.map((char, index) => (
            <IonCard
              key={index}
              style={{
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={char.image}
                alt={char.name}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                }}
              />
              <IonCardHeader>
                <IonCardTitle style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  color: '#2c3e50'
                }}>
                  {char.name}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{
                textAlign: 'center',
                fontSize: '15px',
                color: '#555',
                padding: '0 12px 16px',
              }}>
                {char.reason}
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
