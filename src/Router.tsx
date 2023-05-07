import { StatusBar } from "expo-status-bar";
import {
    NavigationContainer,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { Home, Heart, Scan, Bag, Profile } from "iconsax-react-native";

// Molecules
import { Toolbar } from "@molecules";

// Screens
import { HomeScreen } from "@screens";

// Constants
import { COLORS } from "@constants";

const Tab = createBottomTabNavigator();

const tabs = [
    {
        name: "home",
        icon: Home,
        component: HomeScreen,
    },
    {
        name: "heart",
        icon: Heart,
        component: HomeScreen,
    },
    {
        name: "scan",
        icon: Scan,
        component: HomeScreen,
    },
    {
        name: "cart",
        icon: Bag,
        component: HomeScreen,
    },
    {
        name: "profile",
        icon: Profile,
        component: HomeScreen,
    },
];

const Router = () => (
    <>
        <StatusBar style="dark" backgroundColor={COLORS.body} />
        <Toolbar />
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: "gray",
                    tabBarShowLabel: false,
                }}
            >
                {tabs.map((t, i) => (
                    <Tab.Screen
                        key={i}
                        name={t.name}
                        component={t.component}
                        options={({ route }) => ({
                            tabBarStyle: {
                                display: getFocusedRouteNameFromRoute(route)
                                    ?.toLocaleLowerCase()
                                    ?.includes("full")
                                    ? "none"
                                    : "flex",
                            },
                            tabBarIcon: ({ focused, color }) => {
                                return (
                                    <t.icon
                                        color={color}
                                        variant={focused ? "Bold" : "Linear"}
                                        size={22}
                                    />
                                );
                            },
                        })}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    </>
);

export default Router;
