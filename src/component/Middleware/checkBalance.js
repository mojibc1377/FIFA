/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { request } from "../../services/requests";
// This function will handle the API call to fetch the user's credit
const fetchUserCredit = async (userId) => {
  try {
    const response = await fetch(`/api/users?userId=${userId}`);
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      const user = data[0]; 
      return user.accountCredit || 0;
    } else {
      console.error("No user data found:", data);
      return 0;
    }
  } catch (error) {
    console.error("Error fetching user credit:", error);
    return 0;
  }
};


export const checkSufficientFunds = async (userId, cost) => {
  const accountCredit = await fetchUserCredit(userId);

  if (cost > accountCredit) {
    alert('Insufficient funds. Please add more credit to your account.');
    Navigate('/charge');
    return false;
  }
  return true;
};
