import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions.jsx';
import data from 'components/Statistics/data.json';
import user from 'components/Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile User={user} />
      <Statistics stats={data} title={'UPLOAD STATS'} />

      {/* <Transactions /> */}
    </div>
  );
};
