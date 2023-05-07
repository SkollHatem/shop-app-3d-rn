import { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import {
    useNavigation,
    useRoute,
    ParamListBase,
    RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import cs from "classnames";

// Molecules
import { ModelViewer, SkeletonInfo } from "@molecules";

// Icons
import { ArrowLeft2, Heart } from "iconsax-react-native";

// Constants
import { COLORS } from "@constants";

// Hooks
import { useProduct } from "@hooks";

const ProductDetails = () => {
    const [meshColor, setMeshColor] = useState(COLORS.primary);
    const {
        params: { productId },
    } = useRoute<RouteProp<{ params: { productId: number } }, "params">>();

    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const { data, loading } = useProduct(productId);

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
            <View className="relative basis-3/6">
                <ModelViewer color={meshColor} />
                <View className="absolute bottom-0 left-0 z-10 my-2 w-full items-center">
                    <Text className="text-xs text-secondary opacity-40">
                        La vista 3D puede demorar un poco la primera vez
                    </Text>
                </View>
            </View>
            <View className="flex-1 rounded-t-3xl bg-white p-6">
                {loading ? (
                    <SkeletonInfo />
                ) : (
                    <>
                        <View>
                            <Text className="text-2xl font-bold text-secondary">
                                {data?.product.name}
                            </Text>
                            <Text className="text-sm text-secondary">
                                {data?.product.group}
                            </Text>
                        </View>
                        <View className="my-4">
                            <Text className="text-sm text-secondary">
                                {data?.product.description}
                            </Text>
                        </View>
                        <View className="flex-row space-x-2">
                            {data?.product.medias.map((media, i) => (
                                <View
                                    key={i}
                                    className="h-14 w-14 overflow-hidden rounded-lg bg-secondary"
                                >
                                    <Image
                                        className="h-full w-full"
                                        source={{
                                            uri: media.url,
                                        }}
                                        style={{
                                            resizeMode: "stretch",
                                        }}
                                    />
                                </View>
                            ))}
                        </View>
                        <View className="my-5 flex-row items-center">
                            <Text className="mr-4 text-base font-bold text-secondary">
                                Color
                            </Text>
                            <View className="flex-row">
                                <TouchableOpacity
                                    onPress={() => {
                                        setMeshColor(COLORS.primary);
                                    }}
                                >
                                    <View
                                        className={cs(
                                            "mr-2 h-4 w-4 items-center justify-center rounded-full border-2 p-3",
                                            meshColor === COLORS.primary
                                                ? "border-primary"
                                                : "border-transparent"
                                        )}
                                    >
                                        <View className="h-4 w-4 rounded-full bg-primary" />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setMeshColor(COLORS.secondary);
                                    }}
                                >
                                    <View
                                        className={cs(
                                            "h-4 w-4 items-center justify-center rounded-full border-2 p-3",
                                            meshColor === COLORS.secondary
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
                    </>
                )}
            </View>
        </View>
    );
};

export default ProductDetails;
