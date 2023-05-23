import { collection, onSnapshot } from 'firebase/firestore';

import { firestoreDB } from '../../utils/firebaseCongif';
import PageTitle from '../../component/pageTitle';
import { Wrapper } from './style';
import { useEffect } from 'react';

function Dashboard() {
  const unsub = onSnapshot(collection(firestoreDB, 'unix-feedback'), (doc) => {
    console.log('Current data: ', doc.docs.length);
  });

  useEffect(() => {
    unsub();
  }, []);

  return (
    <Wrapper>
      <PageTitle heading="Dashboard" title="Dashboard" />
    </Wrapper>
  );
}

export default Dashboard;
