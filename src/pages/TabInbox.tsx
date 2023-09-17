import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const TabInbox = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bandeja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Bandeja</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab Bandeja Page" />
      </IonContent>
    </IonPage>
  );
}
 
export default TabInbox;