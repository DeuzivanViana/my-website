import { Layout } from "@/components/Layout";
import { NavigationBar } from "@/components/NavigationBar";
import { ProjectCard } from "@/components/ProjectCard";

const real_projects = [
  {
    title: "Fhê Soares",
    description:
      "Landing page to demonstrate him projects as a photographer and expose him work to the most distant audiences.",
    src_list: [
      "/images/fehsoares_001.png",
      "/images/fehsoares_002.png",
      "/images/fehsoares_003.png",
      "/images/fehsoares_004.png",
    ],
    href: "#",
    techs: ["NextJS"],
  },
  {
    title: "Anuncia Comigo",
    description:
      "A simple page based on an example proposed by the client. Simple Landing Page.",
    src_list: [
      "/images/anunciacomigo_001.png",
      "/images/anunciacomigo_002.png",
      "/images/anunciacomigo_003.png",
    ],
    href: "#",
    techs: ["NextJS"],
  },
];

const personal_projects = [
  {
    title: "Game of Life",
    description:
      "Game of Life is a mathematical solution in cellular automata that &apos;simulates&apos; a group of entities interacting based on defined rules.",
    src_list: [
      "/images/gameoflife_001.png",
      "/images/gameoflife_002.png",
      "/images/gameoflife_003.png",
    ],
    href: "https://github.com/DeuzivanViana/game-of-life-raylib",
    techs: ["C++", "raylib"],
  },
  {
    title: "Chess Board",
    description: "A simple chess game with some piece logic.",
    src_list: [
      "/images/chess_001.png",
      "/images/chess_002.png",
      "/images/chess_003.png",
    ],
    href: "#",
    techs: ["C++", "raylib"],
  },
  {
    title: "Password Generator",
    description:
      "A simple password generator made with Java Android.",
    src_list: [
      "/images/password_generator_0001.png",
      "/images/password_generator_0002.png",
      "/images/password_generator_0003.png",
    ],
    href: "https://github.com/DeuzivanViana/Password-Generator",
    techs: ["Java", "Android Studio"],
  },
  {
    title: "X-File Explorer",
    description:
      "A simple file explorer made with Java Android. Need i to text more here?",
    src_list: [
      "/images/xfile_explorer_0001.png",
      "/images/xfile_explorer_0002.png",
      "/images/xfile_explorer_0003.png",
    ],
    href: "https://github.com/DeuzivanViana/X-File-Manager",
    techs: ["Java", "Android Studio"],
  },
  {
    title: "Sandbox - Lazy Edition",
    description:
      "A simple sandbox simulator made in Python to practice my math skills. The project is based on a generic sandbox.",
    src_list: [
      "/images/sandbox_001.jpeg",
      "/images/sandbox_002.jpeg",
      "/images/sandbox_003.jpeg",
    ],
    href: "https://github.com/DeuzivanLima/Lazy-Sandbox",
    techs: ["Python3", "Pygame"],
  },
  {
    title: "Wallet System",
    description:
      "A complex values transfer between two people. I&apos;m study auth and database.",
    src_list: [
      "/images/wallet_system_001.jpeg",
      "/images/wallet_system_002.jpeg",
      "/images/wallet_system_003.jpeg",
    ],
    href: "https://github.com/DeuzivanViana/wallet-system",
    techs: ["NextJS", "Supabase", "Tailwind"],
  },
  {
    title: "Planet Collision",
    description:
      "This is just the law of universal gravitation applied to a group of particles. It looks like a planet, at least that&apos;s what I tried to do using std::cos, std::sin and other calculations.",
    src_list: [
      "/images/planet_collision_0001.png",
      "/images/planet_collision_0002.png",
      "/images/planet_collision_0003.png",
    ],
    href: "https://github.com/DeuzivanViana/planet-collision-simulation",
    techs: ["C++", "raylib"],
  },
  {
    title: "Flipper Ino - Firmware",
    description:
      "Flipper Ino is a project inspired by Flipper Zero, aiming to provide pentest features, hardware hacking, and more. The project is currently being improved, but the basic menu is complete.",
    src_list: [
      "/images/flipper-ino-001.jpg",
      "/images/flipper-ino-002.jpg",
      "/images/flipper-ino-003.jpg",
    ],
    href: "https://github.com/DeuzivanViana/Flipper-Ino-A03",
    techs: ["Arduino", "Adafruit", "C++"],
  },
  {
    title: "Fazueli Wallet",
    description:
      "An attempt to simulate the processes of a digital wallet, using a database and various security mechanisms. This project was created to understand some banking concepts.",
    src_list: [
      "/images/fazueli-wallet-001.png",
      "/images/fazueli-wallet-002.png",
      "/images/fazueli-wallet-003.png",
      "/images/fazueli-wallet-004.png",
      "/images/fazueli-wallet-005.png",
      "/images/fazueli-wallet-006.png",
    ],
    href: "https://github.com/120c0/Fazueli-Wallet",
    techs: ["NextJS", "Redux", "SQLite3"],
  },
  {
    title: "NooBank (For Noob?)",
    description:
      "An interface designed to be implemented in my application to simulate basic banking processes and other simple functionalities.",
    src_list: ["/images/noobank_001.png", "/images/noobank_002.png"],
    href: "https://github.com/120c0/NoobBank-Mobile-Layout",
    techs: ["NextJS"],
  },
  {
    title: "Basic Blog UI (Responsive)",
    description:
      "A project I started when I was learning complex concepts, aimed at understanding various processes.",
    src_list: [
      "/images/blog_001.png",
      "/images/blog_002.png",
      "/images/blog_003.png",
      "/images/blog_004.png",
      "/images/blog_005.png",
    ],
    href: "https://github.com/120c0/xnork-blog-site",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Platform Game v1",
    description:
      "A platform game with random world generation and other important concepts for a good mathematical understanding of physics and related topics.",
    src_list: [
      "/images/platform_001.png",
      "/images/platform_002.png",
      "/images/platform_003.png",
    ],
    href: "https://github.com/120c0/SDL2-2D-Game-Plataform",
    techs: ["C++", "SDL2"],
  },
  {
    title: "Platform Game v2",
    description:
      "Another version of a platform game, but with more complexity, including random world generation, structure generation, and ore generation with rarity and depth mechanisms.",
    src_list: [
      "/images/platform2_001.png",
      "/images/platform2_002.png",
      "/images/platform2_003.png",
      "/images/platform2_004.png",
    ],
    href: "https://github.com/120c0/SDL2-The-Last-World-test",
    techs: ["C++", "SDL2"],
  },
  {
    title: "Rocket Simulation (I Think XD)",
    description:
      "Applying the concepts of universal gravitation and particle generation, this project aims to develop my skills in gravity and rocket orbiting concepts.",
    src_list: ["/images/rocket_001.png", "/images/rocket_002.png"],
    href: "https://github.com/120c0/RocketSimulator",
    techs: ["C++", "SDL2"],
  },
  {
    title: "Particle System 0.0.1",
    description:
      "A simple project that applied interesting mathematical concepts.",
    src_list: [
      "/images/particle_001.png",
      "/images/particle_002.png",
      "/images/particle_003.png",
    ],
    href: "https://github.com/120c0/SDL2-Particle-System",
    techs: ["C++", "SDL2"],
  },
  {
    title: "Tile Loader",
    description:
      "A program that loads a tileset in an unusual way that I came up with. I am not sure if this application exists, but it is a relatively basic yet complex concept.",
    src_list: [
      "/images/tileload_001.png",
      "/images/tileload_002.png",
      "/images/tileload_003.png",
      "/images/tileload_004.png",
    ],
    href: "https://github.com/120c0/SDL2-Load-TMX-From-Tiled",
    techs: ["C++", "SDL2", "TinyLoaderXML"],
  },
];

export default function Home() {
  return (
    <Layout>
      <NavigationBar/>


      <div className="m-auto w-fit p-4">
        <div className="pb-16">
          <h1 className="text-6xl font-bold">
            Hey there, i&apos;m <span className="text-blue-500">Deuzivan</span>!
          </h1>
          <h2 className="text-2xl pt-2 font-bold">
            About Me
          </h2>
          <p className="text-neutral-400 max-w-[512px]">
            I&apos;ve been passionate about programming since I was 14 years old, I&apos;ve been trying my whole life to evolve and learn with each new project.
            You can see my some projects bellow!
          </p>
          <h2 className="text-2xl pt-2 font-bold">Languages</h2>
          <p className="text-neutral-400">- Portuguese (Native)</p>
          <p className="text-neutral-400">- English (Basic)</p>
        </div>

        <h1 className="text-4xl font-bold mb-4 pb-4 border-b-blue-500 border-b-4 w-fit">Real Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
          {
            real_projects.map((project, index) => 
              <ProjectCard key={index} title={project.title} description={project.description} href={project.href} src_lists={project.src_list} techs={project.techs}/>
          )
        }
        </div>
        <hr className="mt-8 mb-4 text-neutral-700"/>
        <h1 className="text-4xl font-bold  mb-4 pb-4 border-b-blue-500 border-b-4 w-fit mt-4">Perosnal Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
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
