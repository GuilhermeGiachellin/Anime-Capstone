export default class request {
  async get(url) {
    const response = await fetch(url);
    const res = await response.json();
    return res;
  }

  async post(url, data, index) {
    const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify({
          itemid: index,
          username: data[0],
          comment: data[1],
        }),      
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },        
      });
    const res = await response.json();
    return res;
  }
}
