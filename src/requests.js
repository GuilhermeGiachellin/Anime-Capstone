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
          'Access-Control-Allow-Origin': '*'
        },        
        body: JSON.stringify( data )          
      });
    const res = await response.json();
    console.log(res)
    return res;
  }

  async postComments(data) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S7zVMxWAOezBiRHSLLWC/comments', {
        method: 'POST',        
        headers: {
          'Content-type': 'application/json',          
          'Access-Control-Allow-Origin': '*'
        },        
        body: JSON.stringify( data )          
      });
    const res = await response.json();
    console.log(res)
    return res;
  }
}
