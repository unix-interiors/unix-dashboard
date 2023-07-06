import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import PageTitle from '../../component/pageTitle';
import { FeedbackTable, Wrapper } from './style';
import { useEffect, useState } from 'react';
import { firestoreDB } from '../../utils/firebaseCongif';
import DataTable from '../../component/dataTable';
import { tableHeader } from './columns';

function Feedback() {
  const [feedbacks, setFeedbacks] = useState(null);
  const [loadingTable, setLoadingTable] = useState(true);

  async function get() {
    try {
      setLoadingTable(true);
      const docs = await getDocs(
        query(
          collection(firestoreDB, 'unix-feedback'),
          orderBy('time', 'desc'),
          limit(50)
        )
      );

      const data: any = [];
      docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setFeedbacks(data);
      setLoadingTable(false);
    } catch (error) {
      setLoadingTable(false);
      console.error('Error - Feedback', error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <Wrapper>
      <PageTitle heading="Client FeedBack" title="Feedback" />
      <FeedbackTable>
        <DataTable
          tableHeader={tableHeader}
          previewData={feedbacks ?? []}
          loading={loadingTable}
        />
      </FeedbackTable>
    </Wrapper>
  );
}

export default Feedback;
