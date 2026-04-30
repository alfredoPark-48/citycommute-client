interface Env {
  ASSETS: { fetch: typeof fetch };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // This allows the Worker to serve static assets from the /dist folder
    // while also allowing you to add environment variables in the Cloudflare Dashboard.
    return await env.ASSETS.fetch(request);
  },
};
