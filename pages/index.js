import { useState } from "react";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home({ serverData }) {
  console.log(serverData?.inventoryValueCurrency);
  const [data, setData] = useState();

  const handleGetData = () => {
    fetch("/api/gateway/info/")
      .then((res) => res.json())
      .then(setData);
  };

  return (
    <div>
      {data?.inventoryValueCurrency && <pre>{data.inventoryValueCurrency}</pre>}
      <button onClick={handleGetData}>Load data</button>
    </div>
  );
}

export async function getServerSideProps() {
  const serverData = await fetch("https://api.qogita.com/info").then(
    (response) => response.json()
  );

  return {
    props: {
      serverData,
    },
  };
}
