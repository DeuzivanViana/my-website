import { Layout } from "@/components/Layout";
import { NavigationBar } from "@/components/NavigationBar";
import { ProjectCard } from "@/components/ProjectCard";
import { personal_projects, real_projects } from "./utils/consts/projects";

export default function Home() {
  return (
    <Layout>
      <NavigationBar/>
      <div className="">
        <div className="p-6 md:p-12 header_about h-[32rem]">
          <h1 className="text-6xl md:text-8xl font-bold md:max-w-[50%]">
            Hey there, i&apos;m <span className="title_hightlight">Deuzivan</span>!
          </h1>
          <p className="text-neutral-400 max-w-[512px] pb-6 pt-4">
            I&apos;ve been passionate about programming since I was 14 years old, I&apos;ve been trying my whole life to evolve and learn with each new project.
            You can see my some projects bellow!
          </p>
          <div className="flex flex-wrap gap-2 text-[8pt] md:text-lg">
            <span className="text-neutral-400 bg-neutral-900 pr-4 pl-4 pt-2 pb-2 rounded-full border border-neutral-700">Portuguese (Native)</span>
            <span className="text-neutral-400 bg-neutral-900 pr-4 pl-4 pt-2 pb-2 rounded-full border border-neutral-700">English (Basic)</span>
          </div>

          { /* TODO: Create a component to do this */ }
          <ul className="flex pt-6 gap-4">
            <li className="text-center ">
              <h1 className="font-bold text-blue-400 text-2xl">15+</h1>
              <footer className="text-neutral-500 text-sm">Projects</footer>
            </li>
            <li className="text-center ">
              <h1 className="font-bold text-blue-400 text-2xl">3+</h1>
              <footer className="text-neutral-500 text-sm">Years</footer>
            </li>
            <li className="text-center ">
              <h1 className="font-bold text-blue-400 text-2xl">100%</h1>
              <footer className="text-neutral-500 text-sm">Dedication</footer>
            </li>
          </ul>
        </div>

        <h1 className="text-4xl font-bold mb-4 pb-4 m-4 text-center section_label_decoration relative">Real Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-fit p-4 md:p-8 max-w-[100rem] m-auto">
          {
            real_projects.map((project, index) => 
              <ProjectCard key={index} title={project.title} description={project.description} href={project.href} src_lists={project.src_list} techs={project.techs}/>
            )
          }
        </div>
        <hr className="mt-8 mb-4 text-neutral-700"/>
        <h1 className="text-4xl font-bold mb-4 pb-4 m-4 text-center section_label_decoration relative">Personal Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-fit p-4 md:p-8 max-w-[100rem] m-auto">
          {
            personal_projects.map((project, index) => 
              <ProjectCard key={index} title={project.title} description={project.description} href={project.href} src_lists={project.src_list} techs={project.techs}/>
            )
          }
        </div>
      </div>
    </Layout>
  );
}
