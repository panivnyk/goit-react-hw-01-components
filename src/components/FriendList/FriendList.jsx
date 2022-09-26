import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return <List>{FriendListItem}</List>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
