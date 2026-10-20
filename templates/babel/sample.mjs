import { readFile } from "node:fs/promises";
import path from "node:path";
export const load = async (name) => JSON.parse(await readFile(path.resolve("data", name), "utf8"));
export { load as default };
