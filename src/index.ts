import data from "./data";

export default {
  async fetch(request: Request): Promise<Response> {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    };

    return new Response(JSON.stringify(data), {headers});
  },
};
