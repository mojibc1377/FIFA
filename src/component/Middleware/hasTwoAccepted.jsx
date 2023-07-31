import { useEffect, useState } from 'react';
import { request } from '../../services/requests';

function useChallengeCount(accepterId) {
  const [challengeCount, setChallengeCount] = useState();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const { data } = await request.get(`/api/challenges/?accepterId=${accepterId}`);
        setChallengeCount(data.length);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, [accepterId]);

  return (challengeCount>= 2? true : false);
}

export default useChallengeCount;
