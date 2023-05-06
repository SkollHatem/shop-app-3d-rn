import { FlatList, TouchableOpacity } from "react-native";
import { Heart } from "iconsax-react-native";
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

const SoldList = () => {
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
                        alert("view item");
                    }}
                >
                    <ItemCard customClassName="relative mr-4 flex-row overflow-hidden rounded-xl bg-white p-1 pr-10">
                        <ItemCard.image
                            customClassName="h-24 w-24 overflow-hidden rounded-lg bg-imgBg p-4"
                            img={item.img}
                        />
                        <ItemCard.info
                            name={item.name}
                            label={item.label}
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

export default SoldList;
