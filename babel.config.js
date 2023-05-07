module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    alias: {
                        "@interfaces": "./src/interfaces",
                        "@constants": "./src/constants.ts",
                        "@atoms": "./src/components/atoms",
                        "@molecules": "./src/components/molecules",
                        "@organisms": "./src/components/organisms",
                        "@screens": "./src/screens",
                        "@hooks": "./src/hooks",
                    },
                },
            ],
        ],
    };
};
