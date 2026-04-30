interface Env {
  ASSETS: { fetch: typeof fetch };
  VITE_API_URL: string;
  VITE_WS_URL: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await env.ASSETS.fetch(request);

    // Only inject into HTML pages
    if (response.headers.get("content-type")?.includes("text/html")) {
      let html = await response.text();
      
      const envData = {
        VITE_API_URL: env.VITE_API_URL,
        VITE_WS_URL: env.VITE_WS_URL,
      };

      // Inject the script before the closing head tag
      const script = `<script>window.ENV = ${JSON.stringify(envData)};</script>`;
      html = html.replace("</head>", `${script}</head>`);
      
      return new Response(html, {
        headers: response.headers,
      });
    }

    return response;
  },
};
