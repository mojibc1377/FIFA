import * as React from 'react';
import ChallengesList from '../component/challengeList';
import { request } from '../services/requests';

function CurrentAcceptedChallenges (){
  const [acceptedChallenges, setAcceptedChallenges] = React.useState([]);

  // Fetch accepted challenges from the server based on the accepterId
  React.useEffect(() => {
    const fetchAcceptedChallenges = async () => {
      try {
        const {data} = await request.get(`/api/challenges?accepterId=${(JSON.parse(localStorage.getItem('user'))._id)}`);
        //this line wont work idk why 
        console.log(data)
        setAcceptedChallenges(data);
        
      } catch (error) {
        console.error('Error fetching accepted challenges:', error);
      }
    };

    fetchAcceptedChallenges();
  }, []); 
  console.log(acceptedChallenges); // Log the value of acceptedChallenges here
  console.log("yes")

    return(
        <ChallengesList
        challenges={acceptedChallenges}
        status={false}

      />
    )
}
export default CurrentAcceptedChallenges;