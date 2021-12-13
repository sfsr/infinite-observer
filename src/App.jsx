import React from 'react';
import { AppContainer } from './components/app-container/AppContainer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <AppContainer />
    </div>
  );
}

export default App;
