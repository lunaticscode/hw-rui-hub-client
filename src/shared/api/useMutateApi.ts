import { useState } from "react";

type MutateMethods = "POST" | "PUT" | "PATCH";
const DEFAULT_CONTENT_TYPE = "application/json";
const useMutateApi = <T, Body>(
  url: string,
  method: MutateMethods = "POST",
  isFormData?: boolean
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const patch = async (data: Body) => {
    try {
      setIsLoading(true);

      const headers = isFormData
        ? undefined
        : { "Content-Type": DEFAULT_CONTENT_TYPE };

      const request = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
      });

      if (request.ok) {
        const response = (await request.json()) as T;
        return response;
      }

      throw new Error("Invalid response status.");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        setError(err);
      } else {
        setError(new Error("An unknown error occurred"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    patch,
    error,
  };
};
export default useMutateApi;
