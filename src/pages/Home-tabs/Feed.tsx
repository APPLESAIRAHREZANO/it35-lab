import { 
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
    <img alt="Silhouette of mountains" src="https://pbs.twimg.com/media/EtKtSEiXIAIvC1c?format=jpg&name=large" />
    <IonCardHeader>
      <IonCardTitle>Stitch</IonCardTitle>
      <IonCardSubtitle> Lil' Trouble, Big Heart! </IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Stitch, also known as Experiment 626, is a lovable yet mischievous alien character from Disney's Lilo & Stitch. Originally created by the mad scientist Dr. Jumbaa Jookiba to be a force of destruction, she crash-lands on Earth and ends up in Hawaii, where she meets a little girl named Lilo. Despite her chaotic nature, Stitch slowly learns the true meaning of love and family through her bond with Lilo. With her super strength, high intelligence, and quirky personality, she often finds herself in humorous and heartwarming situations. Over time, Stitch transforms from a wild experiment into a loyal and protective friend. Her journey beautifully reflects the message of “ohana,” a Hawaiian word meaning family — and family means no one gets left behind or forgotten.</IonCardContent>
  </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Feed;