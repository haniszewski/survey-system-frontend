import { collectFormData } from "./helpers";
import { newSurveySchema } from "@/schemas/survey";

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

export async function GET(request: Request) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/survey/get-all/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") ?? "",
      },
    });

    const data = (await res.json()) as RowsApiResponse;

    const rows = data.map((row) => ({
      id: row.id,
      title: row.name,
      startDate: row.start_date,
      endDate: row.end_date,
      link: `http://${request.headers.get("host")}/survey/${row.id}`,
      analysisLink: `/analysis/show/${row.id}`,
      status: row.status,
    }));

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(String(error), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const newSurvey = await collectFormData(request);
    newSurveySchema.parse(newSurvey);

    const res = await fetch(`${BACKEND_URL}/api/survey/create/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
      body: JSON.stringify(newSurvey),
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
