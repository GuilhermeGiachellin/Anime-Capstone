export default class request {
  async get(url) {
    const response = await fetch(url);
    const res = await response.json();
    return res;
  }

  async post(url, data) {
    const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),      
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },        
      });
    const res = await response.json();
    return res;
  }

  async postComment(url, data) {
    const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),      
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },        
      });
    const res = await response;
    return res;
  }
}
