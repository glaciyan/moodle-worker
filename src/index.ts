import data from "./data.json";

export default {
  async fetch(): Promise<Response> {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    };

    return new Response(JSON.stringify(data), {headers});
  },
};
