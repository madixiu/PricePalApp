import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Assets from "./pages/Assets";
import Crypto from "./pages/Crypto";
import Goods from "./pages/Goods";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Assets"
          component={Assets}
          options={{
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "gainsboro",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={"logo-usd"}
                color={focused ? "#001b2d" : "gainsboro"}
                size={32}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Crypto"
          component={Crypto}
          options={{
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "gainsboro",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={"logo-bitcoin"}
                color={focused ? "#001b2d" : "gainsboro"}
                size={32}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Goods"
          component={Goods}
          options={{
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "gainsboro",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "basket" : "basket-outline"}
                color={focused ? "#001b2d" : "gainsboro"}
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
