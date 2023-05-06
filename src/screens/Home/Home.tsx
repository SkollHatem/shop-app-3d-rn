import { View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Atoms
import { Header } from "@atoms";

// Molecules
import { AppBar, BadgeSlider } from "@molecules";

// Organisms
import { ProductList, SoldList } from "@organisms";

// Screens
import ProductDetailsScreen from "../ProductDetails";

// Constants
import { SPACING } from "@constants";

const Stack = createNativeStackNavigator();

const HomePage = () => {
    return (
        <View className="flex-1 bg-body">
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppBar />
                <View style={{ paddingLeft: SPACING }}>
                    <Header>Categorias</Header>
                </View>
                <BadgeSlider />
                <ProductList />
                <View style={{ paddingLeft: SPACING }}>
                    <Header>Más vendidos</Header>
                </View>
                <SoldList />
            </ScrollView>
        </View>
    );
};

const Hanlde = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen
                name="Full-DetailsPage"
                component={ProductDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default Hanlde;
