import { useState, useEffect } from "react";

import Worker from "./sumWorker?worker";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker();
    worker.onmessage = (e: MessageEvent) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage(null);

    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
}
