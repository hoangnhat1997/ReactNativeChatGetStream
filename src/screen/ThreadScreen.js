import {Channel, Thread} from 'stream-chat-react-native';
import {useAppContext} from '../../AppContext';
const ThreadScreen = props => {
  const {channel, thread} = useAppContext();

  return (
    <Channel channel={channel} thread={thread} threadList>
      <Thread />
    </Channel>
  );
};
export default ThreadScreen;
