import { FC } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Heart } from "iconsax-react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Atoms
import { ItemCard } from "@atoms";

// Constants
import { SPACING } from "@constants";

// Interfaces
import { Product } from "@interfaces";

interface TopListProps {
    products?: Product[];
}

const TopList: FC<TopListProps> = ({ products = [] }) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <FlatList
            data={products}
            contentContainerStyle={{
                paddingLeft: SPACING,
            }}
            className="my-3"
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate("Full-DetailsPage", {
                            productId: item.id,
                        });
                    }}
                >
                    <ItemCard customClassName="relative mr-4 flex-row overflow-hidden rounded-xl bg-white p-1 pr-10">
                        <ItemCard.image
                            customClassName="h-24 w-24 overflow-hidden rounded-lg bg-white p-4"
                            img={item.img}
                        />
                        <ItemCard.info
                            name={item.name}
                            label={item.group}
                            price={item.price}
                        />
                        <ItemCard.actions
                            icon={Heart}
                            onPress={() => {
                                alert("Heart");
                            }}
                        />
                    </ItemCard>
                </TouchableOpacity>
            )}
        />
    );
};

export default TopList;
