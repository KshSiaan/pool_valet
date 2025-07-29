/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_API_ENDPOINT } from "./config/data";

interface Howl {
  link: string;
  method?: "get" | "post" | "delete" | "put" | "patch";
  content?:
    | "json"
    | "text"
    | "html"
    | "xml"
    | "form"
    | "multipart"
    | "javascript"
    | "css"
    | "png"
    | "jpeg"
    | "gif"
    | "pdf";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  auth?: "bearer" | "basic" | "digest" | "apiKey" | "awsSignature" | "custom";
  token?: string;
  mode?: "cors" | "no-cors" | "same-origin";
  cache?:
    | "default"
    | "no-store"
    | "reload"
    | "no-cache"
    | "force-cache"
    | "only-if-cached";
  credentials?: "omit" | "same-origin" | "include";
  redirect?: "follow" | "manual" | "error";
  reffererPolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  integrity?: string;
}

const options = {
  type: {
    json: "application/json",
    text: "text/plain",
    html: "text/html",
    xml: "application/xml",
    form: "application/x-www-form-urlencoded",
    multipart: "multipart/form-data",
    javascript: "application/javascript",
    css: "text/css",
    png: "image/png",
    jpeg: "image/jpeg",
    gif: "image/gif",
    pdf: "application/pdf",
  },
  auth: {
    bearer: "Bearer",
    basic: "Basic",
    digest: "Digest",
    apiKey: "Api-Key",
    awsSignature: "",
    custom: "CustomScheme",
  },
};


export default async function howl({
  link,
  method = "get",
  data = null,
  auth = "bearer",
  content = "json",
  token,
  mode = "cors",
  cache = "default",
  credentials = "same-origin",
  redirect = "follow",
  reffererPolicy = "strict-origin-when-cross-origin",
  integrity = "",
}: Howl) {
  if (!link) {
    const err = new Error("Missing required 'link' parameter.");
    console.error(err);
    throw err; // fail fast for missing essential param
  }

  const headers: HeadersInit = {
    "Content-Type": options.type[content],
  };

  if (token) {
    headers["Authorization"] = `${options.auth[auth]} ${token}`;
  }

  let body: BodyInit | null = null;
  if (data) {
    body = content === "json" ? JSON.stringify(data) : data;
  }

  const requestConfig: RequestInit = {
    method: method.toUpperCase(),
    mode,
    cache,
    credentials,
    redirect,
    referrerPolicy: reffererPolicy,
    integrity,
    headers,
    body,
  };

  try {
    console.debug("🐺 howl request config:", {
      url: BASE_API_ENDPOINT + link,
      requestConfig,
    });

    const response = await fetch(BASE_API_ENDPOINT + link, requestConfig);

    const contentType = response.headers.get("Content-Type") || "";

    let responseData: unknown = null;
    try {
      // try to parse response based on content-type
      if (contentType.includes("application/json")) {
        responseData = await response.json();
      } else if (
        contentType.includes("text/") ||
        contentType.includes("application/xml") ||
        contentType.includes("html")
      ) {
        responseData = await response.text();
      } else {
        responseData = await response.blob();
      }
    } catch (parseErr) {
      console.warn("⚠️ Failed to parse response body:", parseErr);
    }

    if (!response.ok) {
      const error = new Error(
        `HTTP Error: ${response.status} ${response.statusText}`
      ) as any;

      error.status = response.status;
      error.statusText = response.statusText;
      error.responseData = responseData;
      console.error("❌ howl HTTP error:", error);
      throw error;
    }

    console.debug("✅ howl response data:", responseData);
    return responseData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("🔥 howl error caught:", error);
      // wrap in consistent error object for caller
      return {
        success: false,
        message: error.message,
        ...(error as any).status ? { status: (error as any).status } : {},
        ...(error as any).statusText ? { statusText: (error as any).statusText } : {},
        ...(error as any).responseData ? { responseData: (error as any).responseData } : {},
      };
    } else {
      console.error("🔥 howl unknown error caught:", error);
      return { success: false, message: "Unknown error occurred" };
    }
  }
}
