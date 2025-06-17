import { FreshContext, Handlers } from "$fresh/server.ts";
import LoginForm from "../components/LoginForm.tsx";


export const handler: Handlers = {
  GET: (req:Request, ctx:FreshContext) => {
    const url = new URL(req.url);
    const dni = url.searchParams.get("dni");

    if (!dni) return ctx.render();

    const headers = new Headers();
    headers.append("Set-Cookie", `dni=${dni};path=/`);
    headers.append("location", "/greet");
    return new Response(null, {
      status: 302,
      headers
    });
  }
}

export default function Home() {
  return (
    <LoginForm/>
  );
}