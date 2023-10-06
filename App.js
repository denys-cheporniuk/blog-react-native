import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as BlogProvider } from "./src/context/blogContext";
import IndexScreen from "./src/IndexScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
        <Stack.Screen name="Index" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
)
