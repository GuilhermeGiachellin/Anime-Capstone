export default class Request {
  async get(url) {
    this.url = url;
    const response = await fetch(url);
    const res = await response.json();
    return res;
  }

  async post(url, data) {
    this.url = url;
    this.data = data;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res;
  }

  async postComment(url, data) {
    this.url = url;
    this.data = data;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
    const res = await response;
    return res;
  }
}
