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
  IonCardContent,
} from '@ionic/react';

const Favorites: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="favorites-content">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: '#f5f5f5', // Light background for the page
            padding: '20px',
          }}
        >
          <IonCard color="primary" style={{ width: '100%', maxWidth: '400px', margin: '10px' }}>
            <IonCardHeader>
              <IonCardTitle style={{ textAlign: 'center', color: '#ffffff' }}>Your Favorite Character</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ color: '#333' }}>
              Here's a list of your favorite characters from the show. You can manage them here.
            </IonCardContent>
          </IonCard>

          <IonCard color="secondary" style={{ width: '100%', maxWidth: '400px', margin: '10px' }}>
            <IonCardHeader>
              <IonCardTitle style={{ textAlign: 'center', color: '#ffffff' }}>More Favorites</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ color: '#333' }}>
              Add more characters to your favorites by selecting them in the main list.
            </IonCardContent>
          </IonCard>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
