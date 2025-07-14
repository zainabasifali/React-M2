import React from 'react';
import { Text, Alert, View, TextInput, Button } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { AndroidImportance } from '@notifee/react-native';

const App = () => {

  const [number, setNumber] = useState('');

  useEffect(() => {
    RequestPermissionAndroid();
  }, [])

  const RequestPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getToken();
    } else {
      Alert.alert('Notification permission denied');
    }

  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  const onDisplayNotification = async (remoteMessage) => {
    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      sound: 'default', 
    });
    console.log('Foreground Message Notification:', remoteMessage.notification);

    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'ic_launcher', 
        sound: 'default', 
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    try {
    const response = await fetch('http://192.168.100.8:3000/api/save-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();
    console.log('Token saved:', data.message);
  } catch (error) {
    console.error('Failed to save token:', error);
  }
  }

  const handleGuess = async () => {
    const res = await fetch('http://192.168.100.8:3000/api/guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess: number }),
    });
    const data = await res.json();
    Alert.alert(data.message);
  };
  return (
    <View style={{ marginTop: 100, padding: 20 }}>
      <Text>Enter a number (1-10):</Text>
      <TextInput
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
      />
      <Button title="OK" onPress={handleGuess} />
    </View>
  );
}
export default App;
