'use client'
import { Bar } from "../Bar"
import { Banner } from "../Banner"
import { Layout } from "../Layout"
import { NavigationBar } from "../NavigationBar"
import { Project } from "../Project"
import { motion } from "framer-motion"
import styles from "./index.module.scss"

export const App = () => {
    return (
        <Layout>
            <NavigationBar/>
            <div className='m-auto'>
                <Banner/>
                
                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 1}} className='text-3xl text-white p-4 uppercase text-center'><strong>SKILLS</strong></motion.h1>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 2}} className='text-xs text-center text-neutral-600 p-4 pt-0'><strong>WARNING</strong>: Bars are for conceptual visualization of my ability</motion.p>
              
                <div className={`max-w-[1500px] m-auto ${styles.bar_grid}`}>
                    <Bar title={'Web Development (JavaScript, Next.JS, Prisma...)'} progress={56}/>
                    <Bar title={'C/C++ (SDL2, SFML, ImGUI, SQLite3...)'} progress={72}/>
                    <Bar title={'SQLite3, Postgres...'} progress={44}/>
                    <Bar title={'Python 3.X (Pygame...)'} progress={52}/>
                </div>

                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 1}} className='text-3xl uppercase text-white p-4 text-center'><strong>Real Projects</strong></motion.h1>
                <div className={styles.basic_grid}>
                    <Project
                        title={'Fhê Soares'}
                        description={'Landing page to demonstrate him projects as a photographer and expose him work to the most distant audiences.'}
                        src_list={['/projects/fehsoares_001.png', '/projects/fehsoares_002.png', '/projects/fehsoares_003.png', '/projects/fehsoares_004.png']}
                        href="#"
                        />
                    <Project
                        title={'Anuncia Comigo'}
                        description={'A simple page based on an example proposed by the client. Simple Landing Page.'}
                        src_list={['/projects/anunciacomigo_001.png', '/projects/anunciacomigo_002.png', '/projects/anunciacomigo_003.png']}
                        href="#"
                        />
                </div>
                
                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 1}} className="text-3xl uppercase text-white p-4 text-center"><strong>Personal Projects</strong></motion.h1>
                <div className={styles.basic_grid}>
                    <Project
                        title={'Sandbox - Lazy Edition'}
                        description={'A simple sandbox simulator made in Python to pratice my skills with math. The project is based in generic sandbox.'}
                        src_list={['/projects/sandbox_001.jpeg', '/projects/sandbox_002.jpeg', '/projects/sandbox_003.jpeg']}
                        href="https://github.com/DeuzivanLima/Lazy-Sandbox"
                        />
                    <Project
                        title={'Flipper Ino - Firmware'}
                        description={'Flipper Ino is a project inspired by Flipper Zero, its objective is to have pentest features, hardware hacking, etc. The project is currently in the improvement stage, but its menu base is complete.'}
                        src_list={['/projects/flipper-ino-001.jpg', '/projects/flipper-ino-002.jpg', '/projects/flipper-ino-003.jpg']}
                        href="https://github.com/xoksync/Flipper-Ino-A03"
                        />
                    <Project
                        title={'Fazueli Wallet'}
                        description={'An attempt to try to simulate the processes of a digital wallet, using a database and other security mechanisms. Project just to understand some banking concepts.'}
                        src_list={['/projects/fazueli-wallet-001.png', '/projects/fazueli-wallet-002.png', '/projects/fazueli-wallet-003.png', '/projects/fazueli-wallet-004.png', '/projects/fazueli-wallet-005.png', '/projects/fazueli-wallet-006.png']}
                        />
                    <Project
                        title={'NooBank (For Noob?)'}
                        description={'Just an interface that should be implemented in my application for simulating systematic banking processes and others (many simple ones).'}
                        src_list={['/projects/noobank_001.png', '/projects/noobank_002.png']}
                        />
                    <Project
                        title={'Basic Blog UI (Responsive)'}
                        description={'A project when I was relatively starting to deal with some very complex concepts, was to understand how some processes can occur.'}
                        src_list={['/projects/blog_001.png', '/projects/blog_002.png', '/projects/blog_003.png', '/projects/blog_004.png', '/projects/blog_005.png', ]}
                        />
                    <Project
                        title={'Platform Game v1'}
                        description={'Platform game with random world generation and other important concepts for a good mathematical understanding of physics and other related topics.'}
                        src_list={['/projects/platform_001.png', '/projects/platform_002.png', '/projects/platform_003.png']}
                        />
                    <Project
                        title={'Platform Game v2'}
                        description={'Another version of a platform game, but with more complexity containing random world generation, structure generation and ore generation with rarity and depth mechanisms.'}
                        src_list={['/projects/platform2_001.png', '/projects/platform2_002.png', '/projects/platform2_003.png', '/projects/platform2_004.png']}
                        />
                    <Project
                        title={'Rocket Simulation (I Think XD)'}
                        description={'Applying the concepts of the law of universal gravitation and particle generation, this project aims to train my skills with gravity and concepts of orbiting with rockets.'}
                        src_list={['/projects/rocket_001.png', '/projects/rocket_002.png']}
                        />
                    <Project
                        title={'Particle System 0.0.1'}
                        description={'A simple project that applied interesting knowledge to a mathematical basis.'}
                        src_list={['/projects/particle_001.png', '/projects/particle_002.png', '/projects/particle_003.png']}
                        />
                    <Project
                        title={'Tile Loader'}
                        description={'A program that loads a tileset in an unusual way that I came up with, but I don\'t know for sure if this application exists, but probably yes, as it is a relatively basic but complex concept at the same time.'}
                        src_list={['/projects/tileload_001.png', '/projects/tileload_002.png', '/projects/tileload_003.png', '/projects/tileload_004.png']}
                        />
                </div>
            </div>

            <footer className="bg-neutral-950">
                <span className="block text-neutral-700 text-xs text-center p-6">© 2024 Deuzivan Lima</span>
            </footer>
        </Layout>
    )
}