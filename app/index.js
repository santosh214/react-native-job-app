import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {useState} from 'react';
import {About, Contact} from '../components';
import ScreenHeaderBtn from '../components/HeaderButtons/ScreenHeaderBtn';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: 'skyblue'},
          headerShadowVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn />;
          },
          headerTitle: ''
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 2,
            backgroundColor: 'red',
            alignItems: 'center'
          }}
        >
          <Text style={{fontSize: 30}}>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
