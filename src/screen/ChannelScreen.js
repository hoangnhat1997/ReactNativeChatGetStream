import {
  Channel,
  MessageList,
  MessageInput,
  useMessageContext,
} from 'stream-chat-react-native';

import {useAppContext} from '../../AppContext';

const ChannelScreen = props => {
  const {navigation} = props;
  const {channel, setThread} = useAppContext();

  // const CustomMessage = () => {
  //   const {message, isMyMessage} = useMessageContext();

  //   return (
  //     <View
  //       style={{
  //         alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
  //         backgroundColor: isMyMessage ? '#ADD8E6' : '#ededed',
  //         padding: 10,
  //         margin: 10,
  //         borderRadius: 10,
  //         width: '70%',
  //       }}>
  //       <Text>{message.text}</Text>
  //     </View>
  //   );
  // };

  return (
    <Channel
      channel={channel}
      // MessageSimple={CustomMessage}
    >
      <MessageList
        onThreadSelect={message => {
          if (channel?.id) {
            setThread(message);
            navigation.navigate('ThreadScreen');
          }
        }}
      />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;
