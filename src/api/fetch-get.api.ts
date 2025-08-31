import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts/api.const";

export const useFetchGetApi = <T>(path: string) => {
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
    trigger();
  }, []);
  return {
    data,
    trigger,
    isLoading,
    error,
  };
};
