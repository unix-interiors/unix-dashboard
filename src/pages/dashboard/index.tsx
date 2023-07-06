import { collection, onSnapshot } from 'firebase/firestore';

import { firestoreDB } from '../../utils/firebaseCongif';
import PageTitle from '../../component/pageTitle';
import { Number, Wrapper } from './style';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [num, setNum] = useState(0);
  const unsub = onSnapshot(collection(firestoreDB, 'unix-feedback'), (doc) => {
    console.log('Current data: ', doc.docs.length);
  });

  useEffect(() => {
    unsub();
  }, []);

  return (
    <Wrapper>
      <PageTitle heading="Dashboard" title="Dashoard" />
      {/* <Number number={num} />
      <button onClick={() => setNum(100)}>ser</button>
      <button onClick={() => setNum(num + 10)}>+</button> */}
    </Wrapper>
  );
}

export default Dashboard;
