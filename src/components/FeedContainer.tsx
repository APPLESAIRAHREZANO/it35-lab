import { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonLabel,
  IonModal, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonText, IonAvatar, IonCol, IonRow, IonIcon, IonPopover
} from '@ionic/react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';
import { ellipsisVertical, pencilOutline, trashOutline, heartOutline, heart } from 'ionicons/icons';

interface Post {
  post_id: string;
  user_id: number;
  username: string;
  avatar_url: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
  likes: number;
}

const FeedContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [popoverState, setPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });

  useEffect(() => {
    const fetchUser = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (authData?.user?.email?.endsWith('@nbsc.edu.ph')) {
        setUser(authData.user);
        const { data: userData } = await supabase
          .from('users')
          .select('user_id, username, user_avatar_url')
          .eq('user_email', authData.user.email)
          .single();
        if (userData) {
          setUser({ ...authData.user, id: userData.user_id });
          setUsername(userData.username);
        }
      }
    };
    const fetchPosts = async () => {
      const { data } = await supabase.from('posts').select('*').order('post_created_at', { ascending: false });
      if (data) setPosts(data as Post[]);
    };
    fetchUser();
    fetchPosts();
  }, []);

  const createPost = async () => {
    if (!postContent || !user || !username) return;
    const { data: userData } = await supabase
      .from('users')
      .select('user_avatar_url')
      .eq('user_id', user.id)
      .single();

    const avatarUrl = userData?.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';

    const { data } = await supabase
      .from('posts')
      .insert([{ post_content: postContent, user_id: user.id, username, avatar_url: avatarUrl, likes: 0 }])
      .select('*');

    if (data) {
      setPosts([data[0] as Post, ...posts]);
      setPostContent('');
    }
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('posts').delete().match({ post_id });
    setPosts(posts.filter(post => post.post_id !== post_id));
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsModalOpen(true);
  };

  const savePost = async () => {
    if (!postContent || !editingPost) return;
    const { data } = await supabase
      .from('posts')
      .update({ post_content: postContent })
      .match({ post_id: editingPost.post_id })
      .select('*');

    if (data) {
      const updatedPost = data[0] as Post;
      setPosts(posts.map(post => (post.post_id === updatedPost.post_id ? updatedPost : post)));
      setPostContent('');
      setEditingPost(null);
      setIsModalOpen(false);
      setIsAlertOpen(true);
    }
  };

  const likePost = async (post_id: string, currentLikes: number) => {
    const { data } = await supabase
      .from('posts')
      .update({ likes: currentLikes + 1 })
      .match({ post_id })
      .select('*');

    if (data) {
      const updatedPost = data[0] as Post;
      setPosts(posts.map(post => (post.post_id === updatedPost.post_id ? updatedPost : post)));
    }
  };

  return (
    <IonContent className="ion-padding">
      {user ? (
        <>
 
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Share Something ✨</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonInput
                placeholder="Express your thoughts..."
                value={postContent}
                onIonChange={(e) => setPostContent(e.detail.value!)}
                fill="outline"
              />
              <IonButton
                expand="block"
                shape="round"
                color="primary"
                onClick={createPost}
              >
                Post Now 🚀
              </IonButton>
            </IonCardContent>
          </IonCard>

          {posts.map((post) => (
            <IonCard key={post.post_id}>
              <IonCardHeader>
                <IonRow className="ion-align-items-center">
                  <IonCol size="auto">
                    <IonAvatar>
                      <img src={post.avatar_url} alt={post.username} />
                    </IonAvatar>
                  </IonCol>
                  <IonCol>
                    <IonCardTitle>{post.username}</IonCardTitle>
                    <IonCardSubtitle>
                      {new Date(post.post_created_at).toLocaleString()}
                    </IonCardSubtitle>
                  </IonCol>
                  <IonCol size="auto">
                    <IonButton
                      fill="clear"
                      size="small"
                      onClick={(e) =>
                        setPopoverState({
                          open: true,
                          event: e.nativeEvent,
                          postId: post.post_id,
                        })
                      }
                    >
                      <IonIcon icon={ellipsisVertical} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  <p>{post.post_content}</p>
                </IonText>
               
                <IonButton
                  fill="clear"
                  size="small"
                  color={post.likes > 0 ? 'danger' : 'primary'}
                  onClick={() => likePost(post.post_id, post.likes)}
                >
                  <IonIcon icon={post.likes > 0 ? heart : heartOutline} />
                  {post.likes} Likes
                </IonButton>
              </IonCardContent>

              <IonPopover
                isOpen={popoverState.open && popoverState.postId === post.post_id}
                event={popoverState.event}
                onDidDismiss={() => setPopoverState({ open: false, event: null, postId: null })}
              >
                <IonButton
                  fill="clear"
                  onClick={() => {
                    startEditingPost(post);
                    setPopoverState({ open: false, event: null, postId: null });
                  }}
                >
                  <IonIcon icon={pencilOutline} slot="start" />
                  Edit
                </IonButton>
                <IonButton
                  fill="clear"
                  color="danger"
                  onClick={() => {
                    deletePost(post.post_id);
                    setPopoverState({ open: false, event: null, postId: null });
                  }}
                >
                  <IonIcon icon={trashOutline} slot="start" />
                  Delete
                </IonButton>
              </IonPopover>
            </IonCard>
          ))}
        </>
      ) : (
        <IonLabel>Loading...</IonLabel>
      )}

      <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
        <IonHeader translucent>
          <IonToolbar color="light">
            <IonTitle>Edit Post ✏️</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonInput
            value={postContent}
            onIonChange={(e) => setPostContent(e.detail.value!)}
            placeholder="Update your message..."
            fill="outline"
          />
        </IonContent>
        <IonFooter>
          <IonButton expand="block" onClick={savePost}>Save Changes</IonButton>
          <IonButton expand="block" fill="outline" color="medium" onClick={() => setIsModalOpen(false)}>Cancel</IonButton>
        </IonFooter>
      </IonModal>

      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        header="Success 🎉"
        message="Post updated successfully!"
        buttons={['OK']}
      />
    </IonContent>
  );
};

export default FeedContainer;
