// import components
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import data
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// import styled
import { SectionTasks, TasksTitle } from './App.styled';

export const App = () => {
  return (
    <SectionTasks>
      <TasksTitle>Task 1:</TasksTitle>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <TasksTitle>Task 2:</TasksTitle>
      <Statistics title="Upload stats" stats={data} />
      <TasksTitle>Task 3:</TasksTitle>
      <FriendList friends={friends} />
      <TasksTitle>Task 4:</TasksTitle>
      <TransactionHistory items={transactions} />
    </SectionTasks>
  );
};
