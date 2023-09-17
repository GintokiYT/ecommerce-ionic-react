import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const TabHome = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab Inicio Page" />
      </IonContent>
    </IonPage>
  );
}
 
export default TabHome;