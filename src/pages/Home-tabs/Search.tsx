import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons
} from '@ionic/react';
import React from 'react';

function MotivationalQuotes() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Motivational Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonAccordionGroup>

          <IonAccordion value="first">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Believe you can and you're halfway there.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🌟 Confidence is the first step toward success. Start strong!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="second">
            <IonItem slot="header" color="tertiary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Success is not final, failure is not fatal: It is the courage to continue that counts.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🔥 Keep pushing forward, no matter what happens!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="third">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Dream big and dare to fail.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>💭 Big dreams require big courage. Don't be afraid of the risks!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="fourth">
            <IonItem slot="header" color="danger">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Don't watch the clock; do what it does. Keep going.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>⏰ Time keeps moving—so should you!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="fifth">
            <IonItem slot="header" color="medium">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>It always seems impossible until it's done.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🏆 Trust the journey. Your future self will thank you!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="sixth">
            <IonItem slot="header" color="primary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Push yourself, because no one else is going to do it for you.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>💪 Self-motivation is your superpower!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="seventh">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Your only limit is your mind.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🧠 Think big, achieve bigger!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="eighth">
            <IonItem slot="header" color="dark">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Small progress is still progress.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🐢 One step at a time still leads to success.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="ninth">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>The harder you work for something, the greater you'll feel when you achieve it.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🎯 Hard work pays off—always.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="tenth">
            <IonItem slot="header" color="danger">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Don’t stop when you’re tired. Stop when you’re done.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🏁 Power through! Victory is waiting at the finish line.</p>
            </div>
          </IonAccordion>

        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}

export default MotivationalQuotes;