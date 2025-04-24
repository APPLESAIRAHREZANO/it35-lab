import React, { useState, useRef, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonAlert,
  IonHeader,
  IonBackButton,
  IonButtons,
  IonItem,
  IonText,
  IonCol,
  IonGrid,
  IonRow,
  IonInputPasswordToggle,
  IonImg,
  IonAvatar,
  IonSpinner
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import { useHistory } from 'react-router-dom';

const EditAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchSessionAndData = async () => {
      setLoading(true);
      const { data: session, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !session || !session.session) {
        setAlertMessage('You must be logged in to access this page.');
        setShowAlert(true);
        history.push('/it35-lab/login');
        return;
      }

      const { data: user, error: userError } = await supabase
        .from('users')
        .select('user_firstname, user_lastname, user_avatar_url, user_email, username')
        .eq('user_email', session.session.user.email)
        .single();

      if (userError || !user) {
        setAlertMessage('User data not found.');
        setShowAlert(true);
        return;
      }

      setFirstName(user.user_firstname || '');
      setLastName(user.user_lastname || '');
      setAvatarPreview(user.user_avatar_url);
      setEmail(user.user_email);
      setUsername(user.username || '');
      setLoading(false);
    };

    fetchSessionAndData();
  }, [history]);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    if (password !== confirmPassword) {
      setAlertMessage("Passwords don't match.");
      setShowAlert(true);
      return;
    }

    setLoading(true);

    const { data: session, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session || !session.session) {
      setAlertMessage('Error fetching session or no session available.');
      setShowAlert(true);
      setLoading(false);
      return;
    }

    const user = session.session.user;

    if (!user.email) {
      setAlertMessage('Error: User email is missing.');
      setShowAlert(true);
      setLoading(false);
      return;
    }

    const { error: passwordError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

    if (passwordError) {
      setAlertMessage('Incorrect current password.');
      setShowAlert(true);
      setLoading(false);
      return;
    }

    let avatarUrl = avatarPreview;

    if (avatarFile) {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('user-avatars')
        .upload(filePath, avatarFile, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) {
        setAlertMessage(`Avatar upload failed: ${uploadError.message}`);
        setShowAlert(true);
        setLoading(false);
        return;
      }

      const { data } = supabase.storage.from('user-avatars').getPublicUrl(filePath);
      avatarUrl = data.publicUrl;
    }

    const { error: updateError } = await supabase
      .from('users')
      .update({
        user_firstname: firstName,
        user_lastname: lastName,
        user_avatar_url: avatarUrl,
        username: username,
      })
      .eq('user_email', user.email);

    if (updateError) {
      setAlertMessage(updateError.message);
      setShowAlert(true);
      setLoading(false);
      return;
    }

    if (password) {
      const { error: passwordUpdateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (passwordUpdateError) {
        setAlertMessage(passwordUpdateError.message);
        setShowAlert(true);
        setLoading(false);
        return;
      }
    }

    setAlertMessage('Account updated successfully!');
    setShowAlert(true);
    setLoading(false);
    history.push('/it35-lab/app');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/it35-lab/app" />
        </IonButtons>
      </IonHeader>

      <IonContent className="ion-padding">
        {loading && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <IonSpinner name="crescent" color="primary" />
          </div>
        )}

        {!loading && (
          <IonGrid>
            <IonRow className="ion-align-items-start ion-justify-content-center">
              <IonCol size="12" sizeMd="4" className="ion-text-center">
                <IonItem lines="none">
                  <IonText color="primary">
                    <h2>Profile Picture</h2>
                  </IonText>
                </IonItem>
                {avatarPreview && (
                  <IonAvatar style={{ width: '150px', height: '150px', margin: '20px auto' }}>
                    <IonImg src={avatarPreview} style={{ objectFit: 'cover' }} />
                  </IonAvatar>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
                <IonButton expand="block" onClick={() => fileInputRef.current?.click()}>
                  Upload Avatar
                </IonButton>
              </IonCol>

              <IonCol size="12" sizeMd="6">
                <IonItem lines="none">
                  <IonText color="primary">
                    <h2>Edit Profile</h2>
                  </IonText>
                </IonItem>

                <IonRow>
                  <IonCol>
                    <IonInput
                      label="Username"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter username"
                      value={username}
                      onIonChange={(e) => setUsername(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <IonInput
                      label="First Name"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter First Name"
                      value={firstName}
                      onIonChange={(e) => setFirstName(e.detail.value!)}
                    />
                  </IonCol>
                  <IonCol size="6">
                    <IonInput
                      label="Last Name"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter Last Name"
                      value={lastName}
                      onIonChange={(e) => setLastName(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>

                <IonItem lines="none">
                  <IonText color="primary">
                    <h3>Change Password</h3>
                  </IonText>
                </IonItem>

                <IonRow>
                  <IonCol>
                    <IonInput
                      label="New Password"
                      type="password"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter New Password"
                      value={password}
                      onIonChange={(e) => setPassword(e.detail.value!)}
                    >
                      <IonInputPasswordToggle slot="end" />
                    </IonInput>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonInput
                      label="Confirm Password"
                      type="password"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                    >
                      <IonInputPasswordToggle slot="end" />
                    </IonInput>
                  </IonCol>
                </IonRow>

                <IonItem lines="none" className="ion-padding-top">
                  <IonText color="primary">
                    <h3>Confirm Changes</h3>
                  </IonText>
                </IonItem>

                <IonRow>
                  <IonCol>
                    <IonInput
                      label="Current Password"
                      type="password"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter Current Password"
                      value={currentPassword}
                      onIonChange={(e) => setCurrentPassword(e.detail.value!)}
                    >
                      <IonInputPasswordToggle slot="end" />
                    </IonInput>
                  </IonCol>
                </IonRow>

                <IonButton expand="block" onClick={handleUpdate} shape="round" className="ion-margin-top" disabled={loading} color="primary">
                  {loading ? <IonSpinner name="crescent" /> : 'Update Account'}
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default EditAccount;