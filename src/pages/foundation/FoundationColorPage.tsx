import { useFetchGetApi } from "../../api/fetch-get.api";

const FoundationColorPage = () => {
  const { data, isLoading } = useFetchGetApi<
    Record<string, Record<string, string>>
  >("/foundations/base-color.json");
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return <>{JSON.stringify(data, null, 2)}</>;
};
export default FoundationColorPage;
