import z from "zod";

const baseColorFormSchema = z.object({});
export type BaseColorFormShcema = z.infer<typeof baseColorFormSchema>;

export default baseColorFormSchema;
