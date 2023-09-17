import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const TabCategories = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categorías</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Categorías</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab Categorías Page" />
      </IonContent>
    </IonPage>
  );
}
 
export default TabCategories;