"use client";

import Animation from "@/components/animation";
import { Github, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen max-w-screen-lg mx-auto px-5 pt-20">
      <div className="flex flex-rows items-center justify-center">
        <a
          href="https://github.com/lainhdev"
          className="bg-white rounded-full p-6 mr-10"
        >
          <Image src="/github.svg" width={60} height={60} alt="github" />
        </a>
        <a
          href="mailto:lainh.dev@gmail.com"
          className="bg-white rounded-full p-5 py-7"
        >
          <Image
            src="/logos_google-gmail.svg"
            width={60}
            height={60}
            alt="gmail"
          />
        </a>
      </div>
      <p className="text-[3.5rem] md:text-[5rem] font-bold stroke-slate-500 text-transparent stroke-1 stroke-im">
        Hello! I&#39;m Lai
      </p>
      <p className="text-[3rem] md:text-[4rem] font-bold text-white">
        I&#39;m developing Creative & Interactive webapps
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="w-full md:w-1/2 text-white/60 font-Glimer-Light xl:text-[1.3rem] 2xl:text-[1.5rem] lg:text-base md:text-sm text-xs xl:leading-8 2xl:leading-9 lg:leading-6 leading-5 mb-6 md:mb-0">
          As a developer, my expertise lies in creating seamless and intuitive
          user experiences. I specialize in using cutting-edge technologies to
          produce high-quality web applications. Specifically, I have vast
          knowledge of ReactJS and NodeJS, which allow me to build complex and
          dynamic applications with ease.
        </p>
        <div className="w-full md:w-1/2">
          <Animation />
        </div>
      </div>
      <div>
        <p className="text-[3.5rem] md:text-[5rem] font-bold stroke-slate-500 text-transparent stroke-1 stroke-im">
          Featured Project
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around mt-20">
          <Image src="/evira.png" alt="evira" width={500} height={500} />
          <div className="md:w-1/2 flex items-center justify-center">
            <div className=" text-white">
              <p className="text-3xl text-white font-bold mb-5 mt-5">
                Evira Store
              </p>
              <p className="text-xl mb-3">
                an online fashion store and <br />
                an admin dashboard to manage
              </p>
              <div className="flex flex-row items-center mb-2">
                <span>Store:</span>{" "}
                <a href="https://github.com/lainhdev/evira-store">
                  <Github width={40} />
                </a>
                <a href="https://evira-store-6t8j.vercel.app/">
                  <MoveRight width={40} />
                </a>
              </div>
              <div className="flex flex-row items-center">
                <span>Admin:</span>{" "}
                <a href="https://github.com/lainhdev/ecommerce-admin">
                  <Github width={40} />
                </a>
                <a href="https://ecommerce-admin-lainh-1x2lpjs3q-huulai.vercel.app/">
                  <MoveRight width={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-20">
          <Image src="/whats-up.png" alt="whats-up" width={500} height={500} />

          <div className="md:w-1/2 flex items-center justify-center">
            <div className=" text-white">
              <p className="text-3xl text-white font-bold mb-5 mt-5">
                Whats Up
              </p>
              <p className="text-xl mb-3">an online chatting app</p>
              <div className="flex flex-row items-center mb-2">
                <span>App:</span>{" "}
                <a href="https://github.com/lainhdev/whatsup-client">
                  <Github width={40} />
                </a>
                <a href="https://whatsup-buqs.onrender.com/">
                  <MoveRight width={40} />
                </a>
              </div>
              <div className="flex flex-row items-center">
                <span>Service:</span>{" "}
                <a href="https://github.com/lainhdev/whatsup-api">
                  <Github width={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-20">
          <Image src="/zomo.png" alt="zomo" width={500} height={500} />

          <div className="md:w-1/2 flex items-center justify-center">
            <div className=" text-white">
              <p className="text-3xl text-white font-bold mb-5 mt-5">Zomo</p>
              <p className="text-xl mb-3">a video conference & meeting app</p>
              <div className="flex flex-row items-center mb-2">
                <span>App:</span>{" "}
                <a href="https://github.com/lainhdev/zomo-client">
                  <Github width={40} />
                </a>
                <a href="https://zomo.onrender.com/">
                  <MoveRight width={40} />
                </a>
              </div>
              <div className="flex flex-row items-center">
                <span>Service:</span>{" "}
                <a href="https://github.com/lainhdev/zomo-api">
                  <Github width={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-[3.5rem] md:text-[5rem] font-bold stroke-slate-500 text-transparent stroke-1 stroke-im">
          My Skills
        </p>
        <div className="text-white grid-cols-3 grid text-center leading-loose">
          <div>
            <p className="text-xl font-bold">FrontEnd</p>
            <p>Html</p>
            <p>Css</p>
            <p>Javascript</p>
            <p>Redux</p>
            <p>Nextjs</p>
            <p>Tailwindcss</p>
          </div>
          <div>
            <p className="text-xl font-bold">BackEnd</p>
            <p>Nodejs</p>
            <p>Nestjs</p>
            <p>Typescript</p>
            <p>Prisma</p>
            <p>Graphql</p>
            <p>Postgres</p>
          </div>
          <div>
            <p className="text-xl font-bold">Tools</p>
            <p>Git</p>
            <p>VSCode</p>
            <p>Figma</p>
            <p>Render</p>
            <p>Vercel</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-[3.5rem] md:text-[5rem] font-bold text-white">
          Interested ?<br /> Let&#39;s Get In Touch !
        </p>
        <a href='/CV-NguyenHuuLai.pdf' className="inline-block text-white border border-white rounded-full px-3 py-2 mb-80 mt-10">Download Resume</a>
      </div>
    </main>
  );
}
