import { StatusBar, I18nManager,View,TouchableOpacity,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Assets from "./pages/Assets";
import Crypto from "./pages/Crypto";
import Coins from "./pages/Coins";
import Goods from "./pages/Goods";
import { Ionicons } from "@expo/vector-icons";
import {FontAwesome5} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();



function TopTabs({ state, descriptors, navigation }) {
  return (
    <View style={{backgroundColor:'gainsboro',flexDirection: 'row',justifyContent:'center',paddingVertical:10}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            style={{flex:1,alignItems: 'center',flexDirection: 'row',justifyContent:'center'}}
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
          > 
            <Text style={{color: isFocused ? '#001b2d' : 'gray',paddingVertical:3,marginHorizontal:3}}>
              {label}
            </Text>
            <FontAwesome5 name={route.name === 'Assets' ? 'money-bill-alt' : 'coins'} size={16} color={isFocused? "#001b2d" : "gray"} />
          </TouchableOpacity>
        );
      })}

    
    </View>
  );
}

const AssetsTab = createMaterialTopTabNavigator();

function AssetsTabs() {
  return (
    <AssetsTab.Navigator 
    // initialRouteName="Coins"
    tabBar={props => <TopTabs {...props} />}
    >
      <AssetsTab.Screen name="Assets" component={Assets} />
      <AssetsTab.Screen name="Coins" component={Coins} />
    </AssetsTab.Navigator>
  );
}

export default function App() {
  I18nManager.forceRTL(false);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="AssetsCoins"
          component={AssetsTabs}
          options={{
            tabBarActiveBackgroundColor: "gainsboro",
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
            tabBarActiveBackgroundColor: "gainsboro",
            tabBarActiveTintColor: "#001b2b",
            tabBarInactiveTintColor: "#999",
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5
                name={"bitcoin"}
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
            tabBarActiveBackgroundColor: "gainsboro",
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
