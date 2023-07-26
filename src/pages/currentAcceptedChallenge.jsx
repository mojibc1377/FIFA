import * as React from 'react';
import ChallengesList from '../component/challengeList';
import { request } from '../services/requests';

function CurrentAcceptedChallenges (){
  const [acceptedChallenges, setAcceptedChallenges] = React.useState([]);

  // Fetch accepted challenges from the server based on the accepterId
  React.useEffect(() => {
    const fetchAcceptedChallenges = async () => {
      try {
        const {data} = await request.get(`/api/challenges/?accepterId=${(JSON.parse(localStorage.getItem('user')))._id}`);
        setAcceptedChallenges(data);        
      } catch (error) {
        console.error('Error fetching accepted challenges:', error);
      }
    };

    fetchAcceptedChallenges();
  }, []); 
  console.log(acceptedChallenges)
    return(
        <ChallengesList
        challenges={acceptedChallenges}
        status={false}
        list="accepted"
      />
    )
}
export default CurrentAcceptedChallenges;