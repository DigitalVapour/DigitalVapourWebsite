// import { Button } from "@/components/ui/button";
// import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {

// const projects = await getProjects();
  return (
    <div>
      {/* {projects.map(project=>(
        <div key={project._id}>{project.name}
        <Button>My Button</Button>
        </div>
      ))} */}
      <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold text-orange-600 m-10">Build your Website with us</h1>

    </div>
  );
}
