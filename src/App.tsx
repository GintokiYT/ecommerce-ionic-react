import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import TabHome from './pages/TabHome';
import TabCategories from './pages/TabCategories';
import TabInbox from './pages/TabInbox';
import TabBasket from './pages/TabBasket';
import TabProfile from './pages/TabProfile';

import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsFillChatDotsFill, BsCart3 } from 'react-icons/bs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const FooterItems = [
    { 
      name: 'Inicio', 
      tab: 'tabhome', 
      href: '/tabhome', 
      icon: <AiFillHome size={16}/> 
    },
    { 
      name: 'Categorías', 
      tab: 'tabcategories', 
      href: '/tabcategories', 
      icon: <FiSearch size={16}/> 
    },
    { 
      name: 'Bandeja', 
      tab: 'tabinbox', 
      href: '/tabinbox', 
      icon: <BsFillChatDotsFill size={16}/> 
    },
    { 
      name: 'Cesta', 
      tab: 'tabbasket', 
      href: '/tabbasket', 
      icon: <BsCart3 size={16}/> 
    },
    { 
      name: 'Perfil', 
      tab: 'tabprofile', 
      href: '/tabprofile', 
      icon: <AiOutlineUser size={16}/> 
    }
  ];

  return (  
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tabhome"><TabHome /></Route>
          <Route exact path="/tabcategories"><TabCategories /></Route>
          <Route path="/tabinbox"><TabInbox /></Route>
          <Route path="/tabbasket"><TabBasket /></Route>
          <Route path="/tabprofile"><TabProfile /></Route>
          <Route exact path="/"><Redirect to="/tabprofile" /></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          { FooterItems.map( item => (
            <IonTabButton 
              key={item.name}
              tab={item.tab} 
              href={item.href} 
              style={{'--ripple-color': 'transparent'}}
              className='h-11'
            >
              <div className='flex flex-col justify-center items-center'>
                { item.icon }
                <IonLabel className='text-xs'>{item.name}</IonLabel>
              </div>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
}
 
export default App;
