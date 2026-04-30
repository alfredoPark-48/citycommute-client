interface Env {
  ASSETS: { fetch: typeof fetch };
  VITE_API_URL: string;
  VITE_WS_URL: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type");

    // Expert pattern: Inject runtime environment variables into the HTML
    if (contentType?.includes("text/html")) {
      const html = await response.text();
      const runtimeConfig = {
        VITE_API_URL: env.VITE_API_URL,
        VITE_WS_URL: env.VITE_WS_URL,
      };
      
      const script = `<script>window.ENV = ${JSON.stringify(runtimeConfig)};</script>`;
      return new Response(html.replace("</head>", `${script}</head>`), {
        headers: response.headers,
      });
    }

    return response;
  },
};
