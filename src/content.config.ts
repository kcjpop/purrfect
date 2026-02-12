import { defineCollection } from "astro:content";

import type { Breed } from "@/data/breed";
import { getDataUrl, schema as breedSchema } from "@/data/breed";

const breeds = defineCollection({
  loader: async () => {
    const response = await fetch(getDataUrl(1));
    const res = await response.json();

    const data = res.data.map((breed: Breed) => ({
      id: crypto.randomUUID(),
      ...breed,
    }));

    return data;
  },
  schema: breedSchema,
});

export const collections = { breeds };
