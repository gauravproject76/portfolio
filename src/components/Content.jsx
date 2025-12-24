import { ArrowBigRightDash, ArrowUpRight, Folder, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const projects = [
  {
    title: "Job Alert",
    description:
      "A government job notifier app which provides notifications to users when new government jobs are updated via our admin panel and also displays job details.",
    tech: [
      "TypeScript",
      "Expo Framework",
      "MongoDB",
      "Expo Push Notifications",
    ],
    live: "https://jobalertapk.netlify.app/",
    source: "https://github.com/gauravproject76/jobalert",
  },
  {
    title: "Rotosense",
    description:
      "A website developed for our project in the E-Cell competition.",
    tech: ["JavaScript", "Vite Framework"],
    live: "https://rotosense.netlify.app/",
    source: "#",
  },
];

const logo = [
    "assests/html.svg", 
    "assests/css.svg", 
    "assests/javascript.svg", 
    "assests/typescript.svg",
    "assests/c.svg",
    "assests/vuejs.svg",
    "assests/nodejs.svg",
    "assests/npm.svg",
    "assests/react.svg",
    "assests/github.svg",
    "assests/mongodb.svg",
    "assests/mysql.svg",
];

const learn = [
    "assests/c++.svg",
    "assests/php.png",
    "assests/python.svg",
];

const Content = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 my-10">
      <div className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 gap-6">
        <div className="md:w-[30%] flex flex-col items-center text-center">
          <img
            className="h-40 w-40 rounded-full object-cover border border-white/30"
            src="assests/photo.webp"
            alt="Gaurav Kumar"
          />

          <p className="text-2xl font-semibold mt-4 text-[var(--accent-secondary)]">
            Gaurav Kumar
          </p>

          <p className="text-sm text-slate-300 mt-1">
            Energy & EV Engineering
          </p>

          <div className="flex gap-4 mt-4">
            <a className="icon-btn" href="https://www.linkedin.com/in/gaurav-kumar-029387370" target="_blank">
              <Linkedin />
            </a>
            <a className="icon-btn" href="https://instagram.com/its_gauravkumar_65" target="_blank">
              <Instagram />
            </a>
            <a className="icon-btn" href="mailto:kumargaurav.project@gmail.com">
              <Mail />
            </a>
            <a className="icon-btn" href="https://github.com/gauravproject76/" target="_blank">
              <Github/>
            </a>
          </div>
        </div>

        <div className="md:w-[60%] text-slate-200 space-y-4 leading-relaxed md:mt-10">
          <p>
            Hi! I’m <span className="font-semibold text-white">Gaurav Kumar</span>,
            from Aurangabad, Bihar.
          </p>

          <p>
            I’m pursuing my Bachelor’s degree from{" "}
            <span className="text-[var(--accent-secondary)] font-medium">
              MANIT (Maulana Azad National Institute of Technology), Bhopal
            </span>{" "}
            in <span className="text-[var(--accent-secondary)]">Energy & Electric Vehicle Engineering</span>{" "}
            (2025–2029).
          </p>

          <p>
            Currently in my first year, I’m exploring opportunities and clubs.
            I’ve participated in{" "}
            <span className="text-[var(--accent-secondary)]">
              B-Plan Junior
            </span>{" "}
            — a competition organized by{" "}
            <span className="text-[var(--accent-secondary)]">E-Cell MANIT, Bhopal</span>.
          </p>
        </div>
      </div>
      {/* Project Done Section */}

      <div id="projects" className=" md:p-6 mt-10">
            <div className="text-center items-center">
                <h1 className="text-[var(--accent-secondary)] text-3xl font-semibold">Project Completed</h1>
            </div>
            <div className="mx-auto flex flex-col md:flex-row md:gap-5 md:p-4 px-3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:my-10 my-4 max-w-lg">
                        <div className="flex flex-row gap-5">
                            <Folder className="text-[var(--accent-secondary)]" size={35} />
                            <span className="font-bold text-2xl text-[var(--accent-secondary)]">
                                {project.title}
                            </span>
                        </div>
                        <p className="text-slate-200 p-3 text-lg">
                            {project.description}
                        </p>
                        <span className="text-xl font-semibold text-[var(--accent-secondary)]">
                            Languages & Framework Used :-
                        </span>
                        <ul className="list-disc px-8 py-2">
                            {project.tech.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <div className="flex flex-row gap-6 px-4 py-2">
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--accent-primary)] hover:underline" >
                                Live Demo 
                                <ArrowUpRight size={22} />
                            </a>
                            <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--accent-primary)] hover:underline">
                                Source Code 
                                <ArrowUpRight size={22} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div id="languages">
            <div className="text-center items-center mb-10">
                <h1 className="text-[var(--accent-secondary)] text-3xl font-semibold">Programing Languages & Frameworks</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex flex-wrap items-center justify-center p-6">
                    {logo.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt="logo" className="h-20 w-20 md:h-24 md:w-24"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div id="learning">
            <div className="text-center items-center my-10">
                <h1 className="text-[var(--accent-secondary)] text-3xl font-semibold">Learning Phase</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex flex-wrap items-center justify-center p-6">
                    {learn.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt="logo" className="h-20 w-20 md:h-24 md:w-24"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="text-center items-center my-10 flex-col flex">
            <span className="text-xl md:text-2xl my-4">Ready to work on Frontend and Backend Development feel free to contact to work on any project : <a href="mailto:kumargaurav.project@gmail.com" className="underline text-[var(--accent-primary)]">kumargaurav.project@gmail.com</a></span>
            <span className="text-xl my-4 md:text-2xl">Developed by Gaurav Kumar</span>
        </div>
    </section>
  );
};

export default Content;
