import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Chat, OverlayProvider} from 'stream-chat-react-native';
import {StreamChat} from 'stream-chat';

import {chatApiKey} from './chatConfig';
import {AppProvider} from './AppContext';
import useChatClient from './src/hook/useChatClient';

import ThreadScreen from './src/screen/ThreadScreen';
import ChannelScreen from './src/screen/ChannelScreen';
import ChannelListScreen from './src/screen/ChannelListScreen';

const Stack = createStackNavigator();

const chatClient = StreamChat.getInstance(chatApiKey);

const chatTheme = {
  channelPreview: {
    container: {
      backgroundColor: 'transparent',
    },
  },
};

const NavigationStack = () => {
  const {clientIsReady} = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>;
  }

  return (
    <OverlayProvider value={{theme: chatTheme}}>
      <Chat client={chatClient} enableOfflineSupport>
        <Stack.Navigator>
          <Stack.Screen name="ChannelList" component={ChannelListScreen} />
          <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
          <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
        </Stack.Navigator>
      </Chat>
    </OverlayProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <NavigationStack />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </AppProvider>
  );
};
export default App;
