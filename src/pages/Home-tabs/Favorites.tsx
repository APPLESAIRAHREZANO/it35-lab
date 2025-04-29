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
      image: 'https://ih1.redbubble.net/image.388192615.6682/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg', 
      reason: 'He shows that even the most chaotic ones can be loving and loyal.'
    },
    {
      name: 'Naruto Uzumaki',
      image: 'https://www.escapistmagazine.com/wp-content/uploads/2024/06/naruto-shippuden-season-6.png',
      reason: 'His determination and never-give-up attitude inspire me.'
    },
    {
      name: 'Gojo Satoru',
      image: 'https://i.pinimg.com/736x/c9/6d/97/c96d975d0e3a7235725017ecd5f81235.jpg',
      reason: 'His strength and playful personality make him one of the coolest mentors.'
    },
    {
      name: 'Levi Ackerman',
      image: 'https://64.media.tumblr.com/2231c98b7abbf543c3e320f5ccb8e397/a780966b41ab5da5-62/s1280x1920/b5805e4187a463be608d73d1d4973da3fe243352.jpg',
      reason: 'Calm, skilled, and fiercely loyal — a true leader.'
    },
    {
      name: 'Eren Yeager',
      image: 'https://i.pinimg.com/474x/70/5d/07/705d07d05b44f0c244a855a510ba521b.jpg',
      reason: 'His evolution and complexity make his journey compelling.'
    },
    {
      name: 'Itachi Uchiha',
      image: 'https://i.pinimg.com/236x/78/6f/85/786f85fb6c95d6a1ad4135937880072d.jpg',
      reason: 'A tragic hero who sacrificed everything for peace.'
    },
    {
      name: 'Killua Zoldyck',
      image: 'https://m.media-amazon.com/images/I/51C2nPnMvcL._AC_UF894,1000_QL80_.jpg',
      reason: 'Cool-headed but kind-hearted — one of the best friends in anime.'
    },
    {
      name: 'Kakashi Hatake',
      image: 'https://i.pinimg.com/1200x/77/e3/90/77e3907f93e957e3376fbb8fc7feb0b1.jpg',
      reason: 'Cool, wise, and mysterious — a legendary ninja and mentor.'
    },
    {
      name: 'Luffy (One Piece)',
      image: 'https://i.pinimg.com/736x/da/32/3a/da323af9d7d86dcfb4ba3431eae2f42c.jpg',
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

      <IonContent fullscreen className="ion-padding" style={{ background: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center', margin: '16px 0', fontWeight: 'bold' }}>
          Your Favorite Characters
        </h2>
        <p style={{ textAlign: 'center', color: '#666' }}>
          Here's a list of your favorite characters from the show. You can manage them here.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            padding: '20px'
          }}
        >
          {favoriteCharacters.map((char, index) => (
            <IonCard key={index} style={{ borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.1)' }}>
              <img
                src={char.image}
                alt={char.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px'
                }}
              />
              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
                  {char.name}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ textAlign: 'center', color: '#444' }}>
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