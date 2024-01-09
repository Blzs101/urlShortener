"use server";

import { api } from "@/trpc/server";
import { shortenUrlAPi } from "@/util/shortenUrlAPi";
import { redirect } from "next/navigation";

export async function createURLAction(formData: FormData) {

  const urlName =( formData.get("getUrl") as string);
  const postUrl = api.url;
  const shortenedUrlName = await shortenUrlAPi(urlName);
  

  await postUrl.createURL.mutate({ url: urlName!, shortenedURL: shortenedUrlName!});
  redirect("/success");
}
