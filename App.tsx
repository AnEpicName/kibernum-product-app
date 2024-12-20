import { StyleSheet } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './app/store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
