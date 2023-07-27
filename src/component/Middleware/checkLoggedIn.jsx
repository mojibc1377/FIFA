
function checkIfLoggedIn() {
  return !!JSON.parse(localStorage.getItem('isLoggedIn'));
}

export default checkIfLoggedIn;
