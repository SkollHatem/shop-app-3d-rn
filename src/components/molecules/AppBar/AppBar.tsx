import { View, TextInput, Image } from "react-native";

// Icons
import {
    HambergerMenu,
    MessageNotif,
    SearchNormal,
    Setting4,
} from "iconsax-react-native";

// Constants
import { COLORS } from "@constants";

const AppBar = () => (
    <>
        <View className="mb-4 mt-6 w-full flex-row items-center justify-between px-5">
            <View>
                <HambergerMenu size={18} color={COLORS.secondary} />
            </View>
            <View className="h-8 w-24">
                <Image
                    className="h-full w-full flex-1"
                    source={require("./ikea.png")}
                    style={{
                        resizeMode: "cover",
                    }}
                />
            </View>
            <View>
                <MessageNotif size={18} color={COLORS.secondary} />
            </View>
        </View>
        <View className="mt-0 px-6">
            <View className="my-3 mb-5 flex-row items-center rounded-lg border border-placeholder bg-white p-3">
                <View className="mr-3">
                    <SearchNormal size={18} color={COLORS.secondary} />
                </View>
                <TextInput
                    className="flex-1 text-base"
                    placeholder="Buscar..."
                />
                <View className="h-full w-[1px] bg-placeholder"></View>
                <View className="ml-3">
                    <Setting4 size={18} color={COLORS.secondary} />
                </View>
            </View>
        </View>
    </>
);

export default AppBar;
