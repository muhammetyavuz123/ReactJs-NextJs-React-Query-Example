import { useQuery } from "react-query";

export const fetcher = (enabled = false) =>
  useQuery(
    "repoData",
    () =>
      fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
        res.json()
      ),
    { enabled: enabled }
  );
