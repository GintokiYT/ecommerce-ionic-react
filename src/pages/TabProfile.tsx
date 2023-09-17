import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const TabProfile = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab Perfil Page" />
      </IonContent>
    </IonPage>
  );
}
 
export default TabProfile;