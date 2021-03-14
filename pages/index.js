import Head from "next/head";
import styles from "../styles/Home.module.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useEffect } from "react";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
function Example() {
  // const { isLoading, error, data } = fetcher(true);
  const { isLoading, error, data } = useQuery(
    "repoData",
    () =>
      fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
        res.json()
      ),
    {}
  );

  // return <pre> {JSON.stringify(data, null, 2)} </pre>;

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return data.map(({ name, email }) => (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      {/* <strong>{data.street}</strong> <strong>{data.address}</strong>{" "} */}
    </div>
  ));
}
