import { data } from "./fakeRest";
import { INews } from "./types";

export const getNewsListAPI: () => Promise<INews[]> = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
