import { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import cs from "classnames";

// Molecules
import { ModelViewer } from "@molecules";

// Icons
import { ArrowLeft2, Heart } from "iconsax-react-native";

// Constants
import { COLORS } from "@constants";

const ProductDetails = () => {
    const [cc, setCC] = useState(COLORS.primary);
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View className="relative flex-1">
            <View className="absolute z-10 w-full flex-row justify-between p-4">
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <View className="h-10 w-10 items-center justify-center rounded-full bg-white">
                        <ArrowLeft2 size={20} color={COLORS.secondary} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        alert("heart");
                    }}
                >
                    <View className="h-10 w-10 items-center justify-center rounded-full bg-white">
                        <Heart size={20} color={COLORS.secondary} />
                    </View>
                </TouchableOpacity>
            </View>
            <View className="relative basis-3/6 bg-body">
                <ModelViewer color={cc} />
                <View className="absolute bottom-0 left-0 z-10 my-2 w-full items-center">
                    <Text className="text-xs text-secondary opacity-40">
                        La vista 3D puede demorar un poco la primera vez
                    </Text>
                </View>
            </View>
            <View className="flex-1 bg-white p-6">
                <View>
                    <Text className="text-2xl font-bold text-secondary">
                        Modern Chair
                    </Text>
                    <Text className="text-sm text-secondary">Armchair</Text>
                </View>
                <View className="my-4">
                    <Text className="text-sm text-secondary">
                        La primera vez que introdujimos esta popular silla en el
                        surtido fue en los años cincuenta. Casi 60 años después,
                        la recuperamos con el mismo aspecto, comodidad y diseño
                        artesanal. ¡Disfrútala!
                    </Text>
                </View>
                <View className="flex-row space-x-2">
                    <View className="h-14 w-14 overflow-hidden rounded-lg bg-secondary">
                        <Image
                            className="h-full w-full"
                            source={require("./1.jpg")}
                            style={{
                                resizeMode: "stretch",
                            }}
                        />
                    </View>
                    <View className="h-14 w-14 overflow-hidden rounded-lg bg-primary ">
                        <Image
                            className="h-full w-full"
                            source={require("./2.jpg")}
                            style={{
                                resizeMode: "stretch",
                            }}
                        />
                    </View>
                    <View className="h-14 w-14 overflow-hidden rounded-lg bg-black ">
                        <Image
                            className="h-full w-full"
                            source={require("./3.jpg")}
                            style={{
                                resizeMode: "stretch",
                            }}
                        />
                    </View>
                </View>
                <View className="my-5 flex-row items-center">
                    <Text className="mr-4 text-base font-bold text-secondary">
                        Color
                    </Text>
                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={() => {
                                setCC(COLORS.primary);
                            }}
                        >
                            <View
                                className={cs(
                                    "mr-2 h-4 w-4 items-center justify-center rounded-full border-2 p-3",
                                    cc === COLORS.primary
                                        ? "border-primary"
                                        : "border-transparent"
                                )}
                            >
                                <View className="h-4 w-4 rounded-full bg-primary" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setCC(COLORS.secondary);
                            }}
                        >
                            <View
                                className={cs(
                                    "h-4 w-4 items-center justify-center rounded-full border-2 p-3",
                                    cc === COLORS.secondary
                                        ? "border-secondary"
                                        : "border-transparent"
                                )}
                            >
                                <View className="h-4 w-4 rounded-full bg-secondary" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        alert("add");
                    }}
                >
                    <View className="rounded-full bg-primary p-4">
                        <Text className="text-center text-base font-bold text-secondary">
                            Añadir al carrito
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductDetails;
