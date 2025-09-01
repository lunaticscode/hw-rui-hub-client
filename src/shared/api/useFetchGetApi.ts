import { API_BASE_URL } from "@shared/config/api";
import { useEffect, useState } from "react";

const useFetchGetApi = <T>(path: string, shouldFetch: boolean = true) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const trigger = async () => {
    try {
      setIsLoading(true);
      const request = await fetch(`${API_BASE_URL}${path}`);
      if (request.ok) {
        const response = await request.json();
        setData(response);
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("An unknown error occurred"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldFetch]);

  return {
    data,
    trigger,
    isLoading,
    error,
  };
};

export default useFetchGetApi;
