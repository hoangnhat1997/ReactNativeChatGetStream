import {ChannelList, ChannelPreviewMessenger} from 'stream-chat-react-native';

import {chatUserId} from '../../chatConfig';
import {useAppContext} from '../../AppContext';

import React from 'react';
import {View} from 'react-native';
const filters = {
  members: {
    $in: [chatUserId],
  },
};
const sort = {
  last_message_at: -1,
};

const ChannelListScreen = props => {
  const {setChannel} = useAppContext();

  const CustomListItem = props => {
    const {unread} = props;
    const backgroundColor = unread ? '#e6f7ff' : '#fff';

    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor}}>
          <ChannelPreviewMessenger {...props} />
        </View>
      </View>
    );
  };

  return (
    <ChannelList
      onSelect={channel => {
        const {navigation} = props;
        setChannel(channel);
        navigation.navigate('ChannelScreen');
      }}
      Preview={CustomListItem}
      filters={filters}
      sort={sort}
    />
  );
};
export default ChannelListScreen;
