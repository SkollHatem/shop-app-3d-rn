import { FC } from "react";
import { View, NativeModules, Platform } from "react-native";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

const Toolbar: FC<{
    children?: React.ReactNode;
}> = ({ children }) => (
    <View
        style={{
            paddingTop: STATUSBAR_HEIGHT,
        }}
    >
        {children}
    </View>
);

export default Toolbar;
