import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 1000);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <IonCard style={{ width: '90%', maxWidth: '400px', padding: '20px', textAlign: 'center', borderRadius: '20px', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)' }}>
            <IonCardContent>
              <IonAvatar style={{ margin: '0 auto 20px', width: '100px', height: '100px' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMXhczM3_Y4NB_tIVTFlzWAX755SVtATCiCaHu1kYGjYDKpPJg4QFdWiARytOMP333DE&usqp=CAU"
                  alt="Custom Logo"
                  style={{ width: '100%', height: '100%' }}
                />
              </IonAvatar>

              <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>User Login</h2>

              <IonInput
                label="Email"
                labelPlacement="floating"
                fill="outline"
                type="email"
                placeholder="Enter your email"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)}
              />
              <IonInput
                style={{ marginTop: '15px' }}
                fill="outline"
                type="password"
                placeholder="Enter your password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>

              <IonButton expand="block" shape="round" style={{ marginTop: '20px' }} onClick={doLogin}>
                Login
              </IonButton>

              <IonButton
                routerLink="/it35-lab/register"
                expand="block"
                fill="clear"
                shape="round"
                style={{ marginTop: '10px', fontSize: '14px' }}
              >
                Don’t have an account? <strong style={{ marginLeft: '5px' }}>Register</strong>
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;