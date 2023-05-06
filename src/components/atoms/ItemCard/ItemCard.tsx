import { FC } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Icons
import { Icon } from "iconsax-react-native";

// Constants
import { COLORS } from "@constants";

interface ItemCardProps {
    customClassName?: string;
    children?: React.ReactNode;
}

function ItemCard({ children, customClassName }: ItemCardProps) {
    return (
        <View
            className={
                customClassName ??
                "relative mr-4 w-44 overflow-hidden rounded-xl bg-white p-1"
            }
        >
            {children}
        </View>
    );
}

interface ItemCardImageProps {
    img: any;
    customClassName?: string;
    children?: React.ReactNode;
}
const ItemCardImage: FC<ItemCardImageProps> = ({
    img,
    children,
    customClassName,
}) => (
    <View
        className={
            customClassName ??
            "relative h-44 w-full overflow-hidden rounded-lg bg-imgBg p-6"
        }
    >
        <Image
            className="h-full w-full"
            source={img}
            style={{
                resizeMode: "stretch",
            }}
        />
        {children}
    </View>
);

type ItemCardImageActionsProps = {
    onPress: () => void;
    icon: Icon;
};

const ItemCardImageActions: FC<ItemCardImageActionsProps> = ({
    icon: IconCp,
    onPress,
}) => (
    <TouchableOpacity
        onPress={() => {
            alert("heart");
        }}
        className="absolute left-0 top-0 z-10"
    >
        <View className="h-10 w-10 items-center justify-center">
            <IconCp size={18} color={COLORS.secondary} />
        </View>
    </TouchableOpacity>
);

type ItemCardInfoProps = {
    name: string;
    label: string;
    price: string;
};

const ItemCardInfo: FC<ItemCardInfoProps> = ({ name, label, price }) => (
    <View className="px-2">
        <View className="mt-2">
            <Text className="text-sm font-bold text-secondary">{name}</Text>
            <Text className="text-xs text-secondary">{label}</Text>
        </View>
        <View className="my-3 mb-4">
            <Text className="text-base font-bold text-secondary">{price}</Text>
        </View>
    </View>
);

type ItemCardActionsProps = {
    onPress: () => void;
    icon: Icon;
};

const ItemCardActions: FC<ItemCardActionsProps> = ({
    icon: IconCp,
    onPress,
}) => (
    <TouchableOpacity
        onPress={onPress}
        className="absolute bottom-0 right-0 z-10"
    >
        <View className="h-10 w-10 items-center justify-center rounded-md bg-placeholder">
            <IconCp size={18} color={COLORS.secondary} />
        </View>
    </TouchableOpacity>
);

ItemCard.image = ItemCardImage;
ItemCard.imageActions = ItemCardImageActions;
ItemCard.info = ItemCardInfo;
ItemCard.actions = ItemCardActions;

export default ItemCard;
