import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const data = await req.json();
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  if (!token) {
    return Response.json({ error: "No token, Unauthorized" }, { status: 401 });
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api/services`,

    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({ data }),
      next: {
        tags: ["services"],
      },
      cache: "no-cache",
    },
  );
  revalidateTag("services");

  const value = await res.json();
  if (!res.ok) {
    return Response.json(
      { error: value.error?.details?.errors?.[0] },
      { status: res.status },
    );
  }
  return Response.json(res);
}
