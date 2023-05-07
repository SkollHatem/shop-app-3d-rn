import { View } from "react-native";

// Atoms
import { BlinkingBox, ItemCard } from "@atoms";

const SkeletonCard = () => (
    <BlinkingBox>
        <View className="my-3">
            <ItemCard>
                <View className="relative h-44 w-full overflow-hidden rounded-lg bg-body p-6"></View>
                <View className="m-2 flex-1 space-y-2">
                    <View className="h-3 w-2/3 rounded-md bg-body " />
                    <View className="h-2 w-2/5 rounded-md bg-body" />
                </View>
            </ItemCard>
        </View>
    </BlinkingBox>
);

export default SkeletonCard;
