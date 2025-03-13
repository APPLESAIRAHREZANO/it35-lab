import { 
  IonAvatar,
  IonButton,
  IonCol,
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonInput, 
  IonInputPasswordToggle, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar, 
  useIonRouter,
  IonAlert
} from '@ionic/react';
import React, { useState } from 'react';

const Auth: React.FC = () => {
  const navigation = useIonRouter();
  const [isLogin, setIsLogin] = useState(true); // Track if we're in login or register mode
  const [username, setUsername] = useState(''); // Store username value
  const [email, setEmail] = useState(''); // Store email value (used only in register mode)
  const [password, setPassword] = useState(''); // Store password value
  const [confirmPassword, setConfirmPassword] = useState(''); // Store confirm password value (used only in register mode)
  const [showPassword, setShowPassword] = useState(false); // Control password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Control confirm password visibility
  const [showAlert, setShowAlert] = useState(false); // Control the display of alert
  const [alertMessage, setAlertMessage] = useState(''); // Error message for alert

  // Mock credentials for login validation (In real-world, you would authenticate through an API)
  const [storedUsername, setStoredUsername] = useState(''); // Store registered username
  const [storedPassword, setStoredPassword] = useState(''); // Store registered password

  const doLogin = () => {
    // Validate login fields (Username and Password)
    if (!username || !password) {
      setAlertMessage('Please enter both username and password.');
      setShowAlert(true);
      return;
    }
    
    // Check if the entered credentials match the stored credentials
    if (username === storedUsername) {
      if (password === storedPassword) {
        // If both username and password are correct, navigate to the dashboard
        navigation.push('/it35-lab/app', 'forward', 'replace');
      } else {
        // Show an error message if password is incorrect
        setAlertMessage('Invalid password.');
        setShowAlert(true);
      }
    } else {
      // Show an error message if username is incorrect
      setAlertMessage('Invalid username.');
      setShowAlert(true);
    }
  };

  const doRegister = () => {
    // Check if password and confirm password match
    if (!email || !password || !confirmPassword || !username) {
      setAlertMessage('Please fill all fields.');
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }

    // If passwords match, proceed with registration (store the credentials)
    setStoredUsername(username);
    setStoredPassword(password);

    // Switch to login mode after successful registration
    setAlertMessage('Registration successful! Please log in.');
    setShowAlert(true);
    setIsLogin(true); // Switch to login mode after successful registration
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);  // Switch between login and register modes
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isLogin ? 'Login' : 'Register'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ marginTop: '25%' }}>
          <IonGrid
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <IonRow>
              <IonCol size="8">
                <IonAvatar
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    style={{
                      width: '100px',
                      objectFit: 'cover',
                    }}
                    alt="Avatar"
                    src="https://stickershop.line-scdn.net/stickershop/v1/product/12913/LINEStorePC/main.png?v=11"
                  />
                </IonAvatar>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Username Input (Required for both Login and Register) */}
          <IonInput 
            label="Username"
            value={username}
            onIonInput={(e) => setUsername(e.detail.value!)}
          />

          {/* Show Email input only for Register mode */}
          {!isLogin && (
            <IonInput 
              type="email"
              label="Email"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
            />
          )}

          {/* Password Input */}
          <IonInput
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onIonInput={(e) => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle
              slot="end"
              onChange={() => setShowPassword(!showPassword)}
            />
          </IonInput>

          {/* Show Confirm Password input only for Register mode */}
          {!isLogin && (
            <IonInput
              type={showConfirmPassword ? 'text' : 'password'}
              label="Confirm Password"
              value={confirmPassword}
              onIonInput={(e) => setConfirmPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle
                slot="end"
                onChange={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </IonInput>
          )}

          {/* Submit Button (Login or Register) */}
          <IonButton onClick={isLogin ? doLogin : doRegister} expand="full">
            {isLogin ? 'Login' : 'Register'}
          </IonButton>

          {/* Switch to opposite mode */}
          <IonButton
            onClick={toggleAuthMode}
            expand="full"
            color="secondary"
            style={{ marginTop: '10px' }}
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </IonButton>
        </div>

        {/* Alert for error messages */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Auth;