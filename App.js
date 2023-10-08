import { useFonts } from 'expo-font';
import Routes from './routes';
import StackScreen from './routes/screen';


export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Routes>
      <StackScreen/>
    </Routes>
  )
}

