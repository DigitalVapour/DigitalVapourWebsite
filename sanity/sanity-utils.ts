import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const client = createClient({
    projectId: "w4fysb22",
    dataset: "production",
    apiVersion: "2024-12-19",
})

export async function getProjects(): Promise<Project[]>{   

    return client.fetch(
        groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        }`
    )
}