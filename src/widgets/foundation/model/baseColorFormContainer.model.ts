import z from "zod";

const baseColorFormContainerModel = z.object({});

export type BaseColorFormContainerSchema = z.infer<
  typeof baseColorFormContainerModel
>;

export default baseColorFormContainerModel;
