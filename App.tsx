import { FC, useEffect, useState } from 'react';
import { AbrilFatface_400Regular
} from '@expo-google-fonts/abril-fatface';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Navigation from './navigation';

SplashScreen.preventAutoHideAsync();

const App: FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // await Font.loadAsync({ 'roboto': require('./assets/fonts/Roboto-Bold.ttf') });
        await Font.loadAsync({ 'abrilFatFace' : AbrilFatface_400Regular });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) return null;
  return (
      <Navigation appIsReady={appIsReady}/>
  )
}

export default App;