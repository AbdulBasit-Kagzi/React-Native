/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export default function CameraPage() {
  const camera = useRef<Camera>(null);
  useEffect(() => {
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log('per', newCameraPermission, newMicrophonePermission);
  };
  const devices = useCameraDevices();
  const device = devices.back;

  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto({
      flash: 'on',
    });
    console.log('photo', photo);
  };
  const startRecording = async () => {
    camera.current?.startRecording({
      flash: 'on',
      onRecordingFinished: video => console.log(video),
      onRecordingError: error => console.error(error),
    });
  };

  const stopRecording = async () => {
    await camera.current?.stopRecording();
  };

  if (device == null)
    return (
      <View>
        <Text style={{color: 'black'}}>Not Accessed</Text>
      </View>
    );
  return (
    <>
      <TouchableOpacity>
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          video={true}
          audio={true}
        />
        <Button title="Take picture" onPress={() => takePhoto()} />
        <Button title="Take video" onPress={() => startRecording()} />
        <Button title="Stop video" onPress={() => stopRecording()} />
      </TouchableOpacity>
    </>
  );
}

// const styles = StyleSheet.create({});
