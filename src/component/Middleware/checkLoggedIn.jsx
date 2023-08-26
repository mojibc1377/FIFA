
function checkIfLoggedIn() {
  return !!JSON.parse(localStorage.getItem('user'));
}

export default checkIfLoggedIn;
