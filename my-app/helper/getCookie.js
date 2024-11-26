// Function to get a specific cookie
export default function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;  // Cookie not found
  }
  
  // Usage
  const token = getCookie('session');
  console.log(token);  // Get the 'session' cookie value
  