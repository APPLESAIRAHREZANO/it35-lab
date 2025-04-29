import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonModal,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAlert,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

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

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleOpenVerificationModal = () => {
        if (!email.endsWith("@nbsc.edu.ph")) {
            setAlertMessage("Only @nbsc.edu.ph emails are allowed to register.");
            setShowAlert(true);
            return;
        }

        if (password !== confirmPassword) {
            setAlertMessage("Passwords do not match.");
            setShowAlert(true);
            return;
        }

        setShowVerificationModal(true);
    };

    const doRegister = async () => {
        setShowVerificationModal(false);

        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) throw new Error("Account creation failed: " + error.message);

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const { error: insertError } = await supabase.from("users").insert([
                { username, user_email: email, user_firstname: firstName, user_lastname: lastName, user_password: hashedPassword },
            ]);

            if (insertError) throw new Error("Failed to save user data: " + insertError.message);

            setShowSuccessModal(true);
        } catch (err) {
            setAlertMessage(err instanceof Error ? err.message : "An unknown error occurred.");
            setShowAlert(true);
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding" style={{ backgroundColor: '#f9f9f9' }}>
                <div style={{ maxWidth: '480px', margin: 'auto' }}>
                    <IonCard className="ion-padding" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <IonCardHeader className="ion-text-center">
                            <IonCardTitle style={{ fontSize: '24px', fontWeight: 'bold', color: '#222' }}>Create Your Account</IonCardTitle>
                            <IonCardSubtitle style={{ color: '#666' }}>Register to start your journey</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonInput label="Username" labelPlacement="stacked" fill="outline" placeholder="Enter a unique username" value={username} onIonChange={e => setUsername(e.detail.value!)} className="ion-margin-vertical" />
                            <IonInput label="Email" labelPlacement="stacked" fill="outline" placeholder="youremail@nbsc.edu.ph" value={email} onIonChange={e => setEmail(e.detail.value!)} className="ion-margin-vertical" />
                            <IonInput label="Password" type="password" labelPlacement="stacked" fill="outline" placeholder="Enter password" value={password} onIonChange={e => setPassword(e.detail.value!)} className="ion-margin-vertical">
                                <IonInputPasswordToggle slot="end" />
                            </IonInput>
                            <IonInput label="Confirm Password" type="password" labelPlacement="stacked" fill="outline" placeholder="Confirm password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} className="ion-margin-vertical">
                                <IonInputPasswordToggle slot="end" />
                            </IonInput>

                            <IonButton expand="block" shape="round" color="primary" onClick={handleOpenVerificationModal} className="ion-margin-top">
                                Register
                            </IonButton>
                            <IonButton routerLink="/it35-lab" expand="block" fill="clear" shape="round" className="ion-margin-top">
                                Already have an account? Sign in
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </div>

                <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                    <IonContent className="ion-padding">
                        <IonCard className="ion-padding" style={{ marginTop: '25%', borderRadius: '16px' }}>
                            <IonCardHeader>
                                <IonCardTitle>User Registration Details</IonCardTitle>
                                <hr />
                                <IonCardSubtitle>Username</IonCardSubtitle>
                                <IonCardTitle>{username}</IonCardTitle>
                                <IonCardSubtitle>Email</IonCardSubtitle>
                                <IonCardTitle>{email}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent></IonCardContent>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                                <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
                            </div>
                        </IonCard>
                    </IonContent>
                </IonModal>

                <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
                    <IonContent className="ion-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <IonTitle style={{ marginBottom: '10px' }}>🎉 Registration Successful</IonTitle>
                        <IonText className="ion-text-center">
                            <p>Your account has been created successfully.</p>
                            <p>Please check your email address.</p>
                        </IonText>
                        <IonButton routerLink="/it35-lab" routerDirection="back" color="success" className="ion-margin-top">
                            Go to Login
                        </IonButton>
                    </IonContent>
                </IonModal>

                <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
            </IonContent>
        </IonPage>
    );
};

export default Register;