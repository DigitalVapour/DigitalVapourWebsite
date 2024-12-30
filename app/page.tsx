import { Button } from "@/components/ui/button";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {

const projects = await getProjects();
  return (
    <div>
      {/* {projects.map(project=>(
        <div key={project._id}>{project.name}
        <Button>My Button</Button>
        </div>
      ))} */}
    </div>
  );
}
