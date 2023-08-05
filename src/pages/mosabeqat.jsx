/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChallengesList from '../component/challengeList';
import { request } from '../services/requests';


function ChallengePage() {
  const [challenges, setChallenges] = useState([]);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  React.useEffect(()=>{
    const fetchProducts = async() =>{
      const {data} = await request.get('/api/challenges');
      setChallenges(data)
    }
    fetchProducts();
  },[])
  useEffect(() => {
    // Periodically call the server's delete route to delete old challenges
    const deleteOldChallengesInterval = setInterval(async () => {
      try {
        await request.delete('/api/challenges/delete-old');
        console.log('Old challenges deleted successfully.');
        // Fetch the updated challenges after deletion
        const { data } = await request.get('/api/challenges');
        setChallenges(data);
      } catch (error) {
        console.error('Error deleting old challenges:', error);
      }
    }, 48 * 60 * 60 * 1000); // 48 hours in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(deleteOldChallengesInterval);
  }, []);

  const handleAcceptChallenge = (challenge) => {
    
    setAcceptedChallenges((prevAcceptedChallenges) => [...prevAcceptedChallenges, challenge]);
  };

  const pendingChallenges = challenges.filter((challenge) => challenge.accepterId === '');

  return (
    <div>
      <ChallengesList
        challenges={pendingChallenges}
        onAcceptChallenge={handleAcceptChallenge}
        status={true} //status means for accept(+accept button)"true" fro show (-acceot button ) "false"
      />
    </div>
  );
}

export default ChallengePage;
