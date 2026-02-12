import { z } from "astro/zod";

const PER_PAGE = 4;

const DATA_ENDPOINT = "https://catfact.ninja/breeds";

export type Breed = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
};

export const schema = z.object({
  id: z.string(),
  breed: z.string(),
  country: z.string(),
  origin: z.string(),
  coat: z.string(),
  pattern: z.string(),
});

export function getDataUrl(page: number) {
  return (
    DATA_ENDPOINT +
    "?" +
    new URLSearchParams([
      ["limit", `${PER_PAGE}`],
      ["page", `${page}`],
    ])
  );
}
