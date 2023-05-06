import { FC } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Heart, Bag } from "iconsax-react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Atoms
import { ItemCard } from "@atoms";

// Constants
import { SPACING } from "@constants";

const fakeItems = [
    {
        img: require("./sillon-amarillo.png"),
        name: "STRANDMON",
        label: "Sillón orejero",
        price: "$279",
    },
    {
        img: require("./sillon-amarillo.png"),
        name: "STRANDMON",
        label: "Sillón orejero",
        price: "$279",
    },
    {
        img: require("./sillon-amarillo.png"),
        name: "STRANDMON",
        label: "Sillón orejero",
        price: "$279",
    },
    {
        img: require("./sillon-amarillo.png"),
        name: "STRANDMON",
        label: "Sillón orejero",
        price: "$279",
    },
];

interface ProductListProps {}

const ProductList: FC<ProductListProps> = ({}) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <FlatList
            data={fakeItems}
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
                        navigation.navigate("Full-DetailsPage");
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
                            label={item.label}
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
