import { StatusBar, I18nManager,View,TouchableOpacity,Text,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//* importing fonts
import { useFonts } from "expo-font";
import color from "./components/misc/color";
import Assets from "./pages/Assets";
import Crypto from "./pages/Crypto";
import Coins from "./pages/Coins";
import Goods from "./pages/Goods";
import { Ionicons } from "@expo/vector-icons";
import {FontAwesome5} from '@expo/vector-icons';
import { Colors } from "react-native/Libraries/NewAppScreen";
const Tab = createBottomTabNavigator();

const colors = color;


const LogoTitle = (props) => {

  const title = (OT) => {
    if (OT == 'AssetCoins')
      return 'ارز و سکه'
    else if (OT == 'Goods')
      return 'سوپرماکرت'
    return OT
  }
  return (
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      {/* <Image
        source={require("./assets/logo.png")}
        style={{ width: 32,height: 32,marginRight:8}}
        /> */}
        <Text style={{fontFamily:'vazir',fontSize:17}}>{title(props.children)}</Text>
      </View>
  )
}

function TopTabs({ state, descriptors, navigation }) {
  // I18nManager.forceRTL(true)
  I18nManager.allowRTL(true);
  return (
    <View style={{backgroundColor:colors.background,flexDirection: 'row-reverse',justifyContent:'center',paddingVertical:5}}>
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
            style={{flex:1,alignItems: 'center',flexDirection: 'row',justifyContent:'center',backgroundColor: isFocused ? colors.card : colors.background,elevation:2,borderRadius:5,paddingVertical:3,marginHorizontal:10}}
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
          > 
            <Text style={{color: isFocused ? colors.primary : 'gray',paddingVertical:3,marginHorizontal:3,fontSize:11,fontFamily:'vazir'}}>
              {label == 'Assets' ? 'ارز' : 'سکه'}
            </Text>
            <FontAwesome5 name={route.name == 'Assets' ? 'money-bill-alt' : 'coins'} size={16} color={isFocused? colors.primary : "gray"} />
          </TouchableOpacity>
        );
      })}

    
    </View>
  );
}

const AssetsTab = createMaterialTopTabNavigator();

function AssetsTabs() {


  return (
    <AssetsTab.Navigator  style={{layoutDirection:'rtl'}}
    // initialRouteName="Coins"
    initialRouteName="Assets"

    tabBar={props => <TopTabs {...props} />}


    >
      <AssetsTab.Screen name="Coins" component={Coins} />
      <AssetsTab.Screen name="Assets" component={Assets} />
    </AssetsTab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "vazir": require("./assets/fonts/Vazirmatn-FD-Regular.ttf"),
  });

  I18nManager.allowRTL(true);


  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Crypto">
        
        <Tab.Screen
          name="AssetCoins"
          component={AssetsTabs}
          options={{
            headerTitle: (props) => <LogoTitle {...props}/>,
            headerTitleAlign:'center',
            headerLeft: () => (
              <Image
              source={require("./assets/logo.png")}
              style={{ width: 32,height: 32,marginLeft:8}}
              />
            ),
            tabBarLabel: "ارز و سکه",
            
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.secondary,
            tabBarLabelStyle:{
              fontSize:11,
              fontFamily:'vazir',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5
                name={"coins"}
                color={focused ? colors.primary : colors.secondary}
                size={24}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Crypto"
          component={Crypto}
          options={{
            headerShown:false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: color.secondary,
            tabBarLabel:"کریپتو",
            tabBarLabelStyle:{
              fontSize:11,
              fontFamily:'vazir',
            },
            tabBarIcon: ({ focused, color, size }) => (
              


              
              <FontAwesome5
                name={"bitcoin"}
                color={focused ? colors.primary : colors.secondary}
                size={28}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Goods"
          component={Goods}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign:'center',
            headerLeft: () => (
              <Image
              source={require("./assets/logo.png")}
              style={{ width: 32,height: 32,marginLeft:8}}
              />
            ),
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.secondary,
            tabBarLabel:"سوپر مارکت",
            tabBarLabelStyle:{
              fontSize:11,
              fontFamily:'vazir',
            },
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "basket" : "basket-outline"}
                color={focused ? colors.primary : colors.secondary}
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
