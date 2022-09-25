// import data
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// import components
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#000000',
    //   }}
    // >
    //   React homework template
    // </div>

    <div>
      <p>
        <b>Task 1:</b>
      </p>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <p>
        <b>Task 2:</b>
      </p>
      <Statistics title="Upload stats" stats={data} />
      <p>
        <b>Task 3:</b>
      </p>
      <FriendList friends={friends} />
      <p>
        <b>Task 4:</b>
      </p>
      <TransactionHistory items={transactions} />
    </div>
  );
};
