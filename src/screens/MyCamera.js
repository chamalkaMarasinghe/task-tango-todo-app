import React from 'react';
import { View, Button } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  const cameraRef = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={Camera.Constants.Type.back}>
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', padding: 10 }}>
          <Button title="Take Picture" onPress={handleTakePicture} />
        </View>
      </Camera>
    </View>
  );
};

export default function MyCamera() {
  return (
    <View style={{ flex: 1 }}>
      <CameraComponent />
    </View>
  );
}
