import {View, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {useState} from 'react';
import {About, Contact} from '../components';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'skyblue'}}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
