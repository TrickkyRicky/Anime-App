import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigator/BottomTabNavigation";
import { Provider } from "react-redux";
import store from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <BottomTabNavigation />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
