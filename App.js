import { StatusBar,I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Assets from "./pages/Assets";
import Crypto from "./pages/Crypto";
import Goods from "./pages/Goods";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  I18nManager.forceRTL(false);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Assets"
          component={Assets}
          options={{
            tabBarActiveBackgroundColor: 'gainsboro',
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "#999",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={"logo-usd"}
                color={focused ? "#001b2d" : "#999"}
                size={32}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Crypto"
          component={Crypto}
          options={{
            tabBarActiveBackgroundColor: 'gainsboro',
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "#999",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={"logo-bitcoin"}
                color={focused ? "#001b2d" : "#999"}
                size={32}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Goods"
          component={Goods}
          options={{
            tabBarActiveBackgroundColor: 'gainsboro',
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "#999",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "basket" : "basket-outline"}
                color={focused ? "#001b2d" : "#999"}
                size={32}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
