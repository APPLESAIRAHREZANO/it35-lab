import React, { useState } from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonAvatar,
  IonSearchbar
} from '@ionic/react';

const feed = [
  // ... your feed items here ...
];

const cardColors = ["light", "primary", "secondary", "tertiary", "success", "warning", "danger", "medium", "dark"];

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const filteredFeed = feed.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()) ||
    item.description.toLowerCase().includes(searchText.toLowerCase()) ||
    item.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cartoon & Anime Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            placeholder="Search characters, titles, or authors"
            value={searchText}
            onIonChange={e => setSearchText(e.detail.value!)}
            debounce={300}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {filteredFeed.map(({ id, title, author, date, time, description, imageUrl }, index) => (
          <IonCard key={id} color={cardColors[index % cardColors.length]} className="custom-card">
            <IonCardHeader>
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <img src={imageUrl} alt={title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </IonAvatar>
                <div>
                  <IonCardTitle style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>
                    {title}
                  </IonCardTitle>
                  <IonCardSubtitle style={{ color: '#e0e0e0' }}>
                    {author} • {date} • {time}
                  </IonCardSubtitle>
                </div>
              </IonItem>
            </IonCardHeader>
            <IonCardContent style={{ color: '#f5f5f5' }}>
              {description}
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Search;
