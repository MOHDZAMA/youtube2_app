/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ModalProvider} from './src/context/Contex';

const AppWrapper = () => {
  return (
    <ModalProvider>
      <App style={{flex: 1, backgroundColor: 'black'}} />
    </ModalProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
