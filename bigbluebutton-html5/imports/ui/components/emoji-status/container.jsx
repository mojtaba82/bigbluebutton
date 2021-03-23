import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import UserListService from '/imports/ui/components/user-list/service';
import SetStatusButton from './component';

const SetStatusButtonContainer = (props) => {
  const {
    setEmojiStatus,
    currentUser,
    isRiseHand,
  } = props;
  const toggleClick = {
    toggleClick: () => {
      if (isRiseHand) {
        setEmojiStatus(currentUser.userId, 'none');
      } else {
        setEmojiStatus(currentUser.userId, 'raiseHand');
      }
    },
  };
  return <SetStatusButton {...props} {...toggleClick} />;
};

export default withTracker(() => ({
  isRiseHand: UserListService.getEmoji() === 'raiseHand',
}))(SetStatusButtonContainer);
