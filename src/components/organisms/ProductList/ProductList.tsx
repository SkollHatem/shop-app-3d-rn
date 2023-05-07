import { FC } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Heart, Bag } from "iconsax-react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Atoms
import { ItemCard } from "@atoms";

// Constants
import { SPACING } from "@constants";

// Interfaces
import { Product } from "@interfaces";

interface ProductListProps {
    products?: Product[];
}

const ProductList: FC<ProductListProps> = ({ products = [] }) => {
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
                    <ItemCard>
                        <ItemCard.image img={item.img}>
                            <ItemCard.imageActions
                                icon={Heart}
                                onPress={() => {
                                    alert("heart");
                                }}
                            />
                        </ItemCard.image>
                        <ItemCard.info
                            name={item.name}
                            label={item.group}
                            price={item.price}
                        />
                        <ItemCard.actions
                            icon={Bag}
                            onPress={() => {
                                alert("bag");
                            }}
                        />
                    </ItemCard>
                </TouchableOpacity>
            )}
        />
    );
};

export default ProductList;
