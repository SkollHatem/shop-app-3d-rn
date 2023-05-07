import { View } from "react-native";

// Atoms
import { BlinkingBox, ItemCard } from "@atoms";

const SkeletonInfo = () => (
    <BlinkingBox>
        <View className="space-y-6">
            <View className="space-y-2">
                <View className="h-6 w-2/3 rounded-md bg-body " />
                <View className="h-3 w-2/5 rounded-md bg-body" />
            </View>
            <View className="space-y-2">
                <View className="h-2 w-5/6 rounded-md bg-body" />
                <View className="h-2 w-4/6 rounded-md bg-body" />
                <View className="h-2 w-5/6 rounded-md bg-body" />
                <View className="h-2 w-3/6 rounded-md bg-body" />
            </View>
            <View className="flex-row space-x-2">
                <View className="h-14 w-14 overflow-hidden rounded-lg bg-body" />
                <View className="h-14 w-14 overflow-hidden rounded-lg bg-body" />
                <View className="h-14 w-14 overflow-hidden rounded-lg bg-body" />
            </View>
        </View>
    </BlinkingBox>
);

export default SkeletonInfo;
