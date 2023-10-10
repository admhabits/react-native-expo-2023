import { useFonts } from "expo-font";
import Routes from "./routes";
import StackScreen from "./routes/screen";
import { Provider } from "react-redux";
import { store } from "./stores";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Routes>
      <Provider store={store}>
        <StackScreen />
      </Provider>
    </Routes>
  );
}
