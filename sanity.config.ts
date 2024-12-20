import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "w4fysb22",
    dataset: "production",
    title: "My Portfolil Website",
    apiVersion: "2024-12-19",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;