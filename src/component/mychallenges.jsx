import * as React from 'react';
import ChallengesList from '../component/challengeList';
import { request } from '../services/requests';

function MyChallenges (){
  const [myChallenges, setMyChallenges] = React.useState([]);

// fetch accepted challenge based on accepterId(logged in User's id )
  React.useEffect(() => {
    const fetchAcceptedChallenges = async () => {
      try {
        const {data} = await request.get(`/api/challenges/?challengerId=${(JSON.parse(localStorage.getItem('user')))._id}`);
        setMyChallenges(data);        
      } catch (error) {
        console.error('Error fetching accepted challenges:', error);
      }
    };

    fetchAcceptedChallenges();
  }, []); 
    return(
        <ChallengesList
        challenges={myChallenges}
        status={false}
        list="myChallenges"
      />
    )
}
export default MyChallenges;