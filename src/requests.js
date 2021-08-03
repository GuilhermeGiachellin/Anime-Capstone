export default class request {

  async get(url) {
    const response = await fetch(url);
    const res = await response.json();
    return res;
  }

  async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
    const res = await response.json();
    return res;
  }
  
}