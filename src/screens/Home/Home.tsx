import { View, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Atoms
import { Header } from "@atoms";

// Molecules
import { AppBar, BadgeSlider, SkeletonCard } from "@molecules";

// Organisms
import { ProductList, SoldList } from "@organisms";

// Screens
import ProductDetailsScreen from "../ProductDetails";

// Constants
import { SPACING } from "@constants";

// Hooks
import { useProducts } from "@hooks";

const Stack = createNativeStackNavigator();

const HomePage = () => {
    const { data, loading } = useProducts();
    const mainProducts = data?.products.filter((p) => p.price >= 100);
    const topProducts = data?.products.filter((p) => p.price < 100);

    return (
        <View className="flex-1 bg-body">
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppBar />
                <View style={{ paddingLeft: SPACING }}>
                    <Header>Categorias</Header>
                </View>
                <BadgeSlider />
                {loading ? (
                    <View className="ml-5 flex-row">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </View>
                ) : (
                    <ProductList products={mainProducts} />
                )}
                <View style={{ paddingLeft: SPACING }}>
                    <Header>Más vendidos</Header>
                </View>
                {loading ? (
                    <View className="ml-5 flex-row">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </View>
                ) : (
                    <SoldList products={topProducts} />
                )}
            </ScrollView>
        </View>
    );
};

const HomePageStack = () => {
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

export default HomePageStack;
