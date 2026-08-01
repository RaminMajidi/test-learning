import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`/api/users/:id`, ({ params }) => {
    const { id } = params;

    if (id === "999") {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      id: Number(id),
      name: "ramin",
      email: "ramin@example.com",
    });
  }),
];
