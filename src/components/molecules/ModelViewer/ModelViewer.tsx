import { FC, Suspense } from "react";
import { View } from "react-native";
import { Canvas } from "@react-three/fiber/native";
import { Stage } from "@react-three/drei/native";
import useControls from "r3f-native-orbitcontrols";

// Constants
import { COLORS } from "@constants";

interface ModelViewerProps {
    color?: string;
}

const ModelViewer: FC<ModelViewerProps> = ({ color = COLORS.primary }) => {
    const [OrbitControls, events] = useControls();

    return (
        <View className="flex-1" {...events}>
            <Canvas camera={{ fov: 25, zoom: 0.25 }}>
                <color attach="background" args={[COLORS.body]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls
                    zoomSpeed={1.5}
                    panSpeed={1.5}
                    rotateSpeed={1.5}
                />

                <Stage environment="city" intensity={0.6}>
                    <Suspense fallback={null}>
                        <mesh scale={0.25}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={color} />
                        </mesh>
                    </Suspense>
                </Stage>
            </Canvas>
        </View>
    );
};

export default ModelViewer;
