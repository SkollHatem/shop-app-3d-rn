import { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import cs from "classnames";

// Constants
import { SPACING } from "@constants";

const fakeData = [
    "Sillas",
    "Sillones, chaise longues y puffs",
    "Muebles de comedor",
    "Sofás",
    "Mesas y escritorios",
];

const BadgeSlider = () => {
    const [initialIndex, setInitialIndex] = useState(0);

    const ref = useRef<FlatList>(null);

    useEffect(() => {
        ref.current?.scrollToIndex({
            index: initialIndex,
            animated: true,
            viewOffset: SPACING,
            viewPosition: 0.5,
        });
    }, [initialIndex]);

    return (
        <FlatList
            ref={ref}
            initialScrollIndex={initialIndex}
            data={fakeData}
            contentContainerStyle={{
                paddingLeft: SPACING,
            }}
            className="my-4"
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        setInitialIndex(index);
                    }}
                >
                    <View
                        className={cs(
                            "mr-2 items-center justify-center rounded-full px-4 py-3",
                            index === initialIndex ? "bg-primary" : "bg-white"
                        )}
                    >
                        <Text className="text-xs font-medium text-secondary">
                            {item}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default BadgeSlider;
