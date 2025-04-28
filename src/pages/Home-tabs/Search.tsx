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
  IonAvatar
} from '@ionic/react';

const feed = [
  {
    id: 1,
    title: "Goku's Battle to Protect Earth",
    author: "Akira Toriyama",
    date: "2025-04-25",
    time: "10:00 AM",
    description: "Goku continues his fierce battles against powerful foes, striving to protect Earth with his incredible strength and unwavering spirit.",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/765/712/1011/son-goku-dbz-anime-boy-anime-guy-wallpaper-thumb.jpg"
  },
  {
    id: 2,
    title: "Asuka's Journey in the Eva Unit 02",
    author: "Hideaki Anno",
    date: "2025-04-24",
    time: "02:30 PM",
    description: "Asuka defends humanity in her Eva Unit 02, facing her deepest fears and proving her worth as an Eva pilot.",
    imageUrl: "https://images7.alphacoders.com/789/789110.png"
  },
  {
    id: 3,
    title: "Daisuke's Mysterious Detective Work",
    author: "Yukimaru Kasuri",
    date: "2025-04-23",
    time: "11:15 AM",
    description: "Daisuke embarks on a thrilling journey to uncover secrets hidden deep within the city's mysteries, using his sharp detective skills.",
    imageUrl: "https://i.pinimg.com/736x/5b/7a/f1/5b7af15e857b4b6b9d4f6301def978b1.jpg"
  },
  {
    id: 4,
    title: "Hikari's Adventures in the Digital World",
    author: "Yokoi Chika",
    date: "2025-04-22",
    time: "03:45 PM",
    description: "Hikari journeys into the Digital World, teaming up with her Digimon partner to fight evil forces threatening both worlds.",
    imageUrl: "https://images4.alphacoders.com/789/thumb-1920-789799.png"
  },
  {
    id: 5,
    title: "Naruto's Legacy: A Hokage's Duty",
    author: "Masashi Kishimoto",
    date: "2025-04-21",
    time: "01:00 PM",
    description: "Naruto, now Hokage, must balance his responsibilities to his village while keeping his family safe and maintaining peace in the ninja world.",
    imageUrl: "https://wallpapercg.com/download/naruto-uzumaki-3840x2814-26605.jpg"
  },
  {
    id: 6,
    title: "Astro Boy: The Robot Revolution Begins",
    author: "Osamu Tezuka",
    date: "2025-04-20",
    time: "05:20 PM",
    description: "Astro Boy fights for justice in a futuristic world where robots and humans coexist, battling the rise of rogue machines.",
    imageUrl: "https://images7.alphacoders.com/740/740420.jpg"
  },
  {
    id: 7,
    title: "Daiki's Path to Becoming a Hero",
    author: "Tetsuya Nishio",
    date: "2025-04-19",
    time: "06:00 PM",
    description: "Daiki aspires to become a hero and faces various challenges along the way, learning what it truly means to be brave and selfless.",
    imageUrl: "https://i.pinimg.com/736x/dd/ab/8e/ddab8ea8cab479648610ed74baf7e978.jpg"
  },
  {
    id: 8,
    title: "Death Note: Light's Final Game",
    author: "Tsugumi Ohba",
    date: "2025-04-18",
    time: "12:00 PM",
    description: "Light Yagami uses the Death Note to rid the world of criminals, but faces the ultimate moral dilemma as his plan starts to spiral out of control.",
    imageUrl: "https://i.redd.it/xtjyc6g4omk81.jpg"
  },
  {
    id: 9,
    title: "Kouki's Challenge: The Last Fight",
    author: "Yoshinobu Akita",
    date: "2025-04-17",
    time: "09:00 AM",
    description: "Kouki faces the final battle in his quest to uncover hidden truths, battling enemies and overcoming great personal struggles.",
    imageUrl: "https://i.pinimg.com/736x/7f/5c/23/7f5c231e0087864ecfba9a9618d9ed10.jpg"
  },
  {
    id: 10,
    title: "Stitch's Galactic Adventures",
    author: "Chris Sanders",
    date: "2025-04-16",
    time: "04:30 PM",
    description: "Stitch embarks on new galactic adventures, navigating space while making new friends and fighting for the good of the universe.",
    imageUrl: "https://i.pinimg.com/736x/cf/03/d6/cf03d6f4b5799bc9a8a6d0a89bb9079e.jpg"
  }
];

const cardColors = ["light", "primary", "secondary", "tertiary", "success", "warning", "danger", "medium", "dark"];

const Search: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Cartoon & Anime Search</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen className="ion-padding">
      {feed.map(({ id, title, author, date, time, description, imageUrl }, index) => (
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

export default Search;
