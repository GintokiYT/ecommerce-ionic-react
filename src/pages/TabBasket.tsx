import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const TabBasket = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cesta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Cesta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab Cesta Page" />
      </IonContent>
    </IonPage>
  );
}
 
export default TabBasket;