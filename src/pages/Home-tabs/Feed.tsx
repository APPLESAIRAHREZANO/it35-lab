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
    const feed = [
      {
        id: 1,
        title: "New Developments in Artificial Intelligence",
        author: "Jane Doe",
        date: "2025-02-27",
        time: "09:30 AM EST",
        description: "Artificial intelligence continues to evolve at a rapid pace. The latest breakthroughs could soon change industries like healthcare and finance."
      },
      {
        id: 2,
        title: "Breaking: New Space Mission Launched",
        author: "John Smith",
        date: "2025-02-26",
        time: "03:45 PM EST",
        description: "A new space mission has been successfully launched to explore Mars' atmosphere. This mission aims to gather key data for future exploration."
      },
      {
        id: 3,
        title: "Stock Market Trends for February 2025",
        author: "Emily Johnson",
        date: "2025-02-27",
        time: "11:00 AM EST",
        description: "Stock markets have been volatile in February, with major indices seeing significant fluctuations. Experts predict a slow recovery over the coming weeks."
      },
      {
        id: 4,
        title: "Advancements in Renewable Energy Technology",
        author: "Mark Brown",
        date: "2025-02-25",
        time: "05:00 PM EST",
        description: "New renewable energy technologies are making clean energy more accessible than ever. These innovations could help reduce global carbon emissions significantly."
      },
      {
        id: 5,
        title: "The Rise of Smart Cities: A New Era of Urban Living",
        author: "Olivia Green",
        date: "2025-02-26",
        time: "01:15 PM EST",
        description: "Smart cities are transforming urban environments with the help of advanced technology. This shift aims to improve sustainability and quality of life for residents."
      },
      {
        id: 6,
        title: "Tech Giants Invest in Quantum Computing",
        author: "Chris Lee",
        date: "2025-02-24",
        time: "07:30 AM EST",
        description: "Several leading tech companies have made significant investments in quantum computing. This could lead to breakthroughs in computing power and security."
      },
      {
        id: 7,
        title: "Global Climate Change: A Critical Review",
        author: "Sophia Taylor",
        date: "2025-02-23",
        time: "10:00 AM EST",
        description: "Climate change remains one of the most pressing issues of our time. New studies highlight the urgent need for global action to mitigate its effects."
      },
      {
        id: 8,
        title: "Revolutionizing Transportation with Autonomous Vehicles",
        author: "David Martinez",
        date: "2025-02-21",
        time: "04:45 PM EST",
        description: "Autonomous vehicles are set to change the way we travel. Experts are optimistic that self-driving cars will significantly reduce accidents and traffic congestion."
      },
      {
        id: 9,
        title: "Exploring the Impact of Virtual Reality on Education",
        author: "Sarah White",
        date: "2025-02-20",
        time: "08:00 AM EST",
        description: "Virtual reality is being used to enhance educational experiences. It allows students to engage with material in a more immersive and interactive way."
      },
      {
        id: 10,
        title: "The Future of 5G and Its Potential Benefits",
        author: "Michael Harris",
        date: "2025-02-19",
        time: "02:30 PM EST",
        description: "5G technology promises to revolutionize mobile networks. It will provide faster speeds and more reliable connections, opening doors to new technological advancements."
      }
    ];
    return (
      <IonPage>
        <IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="https://i.pinimg.com/564x/a4/e3/fb/a4e3fbed859274eb8718401a86768801.jpg" />
      <IonCardHeader>
        <IonCardTitle>Tinatangi</IonCardTitle>
        <IonCardSubtitle>Hanhan & Bebe</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Stay hungry.</IonCardContent>
    </IonCard>
    
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <div
         style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
         }}
         >
          Favorites
         </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;