import { proxy } from "valtio";

export const locationSnapshot = proxy({
  currentPathname: "/",
});

export const updateLocation = (pathname: string) => {
  locationSnapshot.currentPathname = pathname;
};
