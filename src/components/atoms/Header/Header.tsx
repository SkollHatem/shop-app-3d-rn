import { FC } from "react";
import { View, Image, Text } from "react-native";

interface HeaderProps {
    children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => (
    <Text className="text-lg font-bold capitalize text-secondary">
        {children}
    </Text>
);

export default Header;
