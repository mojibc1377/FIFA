import { Navigate } from "react-router-dom";
const navigate = Navigate()
export const checkSufficientFunds = (cost, accountCredit) => {
    if (cost > accountCredit) {
      alert('Insufficient funds. Please add more credit to your account.');
      // Replace 'homepage' with the actual route path of the homepage in your app
      navigate('/') //api dargah pardakht
      return false;
    }
    return true;
  };