import Image from "next/image";
import { HeroSection } from "@/components/core/hero/HeroSection";
import { TracingBeam } from "@/components/core/tracing-beam/TreacingBeam";
import { Gallery } from "@/components/core/gallery/Gallery";
import { Dock } from "@/components/dock/Dock";
import githubService from "@/lib/github";
import { CardObject } from "@/types/types";
import { GitHubLanguage } from "@/types/github";

const iconsLanguage = [
  {
    title: "HTML5",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/html5/html5-original.svg" height="40" width="40" alt="html5 logo" />),
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    title: "JavaScript",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/javascript/javascript-original.svg" height="40" width="40" alt="javascript logo" />),
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "TypeScript",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/typescript/typescript-original.svg" height="40" width="40" alt="typescript logo" />),
    href: "https://typescriptlang.org/"
  },
  {
    title: "Python",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/python/python-original.svg" height="40" width="40" alt="python logo" />),
    href: "https://python.org/"
  },
  {
    title: "Java",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/java/java-original.svg" height="40" width="40" alt="java logo" />),
    href: "https://oracle.com/java/"
  },
  {
    title: "CSharp",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/csharp/csharp-original.svg" height="40" width="40" alt="csharp logo" />),
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/"
  }
];
const iconsFrameworks = [
  {
    title: "VueJS",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/vuejs/vuejs-original.svg" height="40" width="40" alt="vuejs logo" />),
    href: "https://vuejs.org/"
  },
  {
    title: "React",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/react/react-original.svg" height="40" width="40" alt="react logo" />),
    href: "https://reactjs.org/"
  },
  {
    title: "TailwindCSS",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" height="40" width="40" alt="tailwindcss logo" />),
    href: "https://tailwindcss.com/"
  },
  {
    title: "NodeJS",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/nodejs/nodejs-original.svg" height="40" width="40" alt="nodejs logo" />),
    href: "https://nodejs.org/"
  },
  {
    title: "Express",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/express/express-original.svg" height="40" width="40" alt="express logo" />),
    href: "https://expressjs.com/"
  },
  {
    title: "Spring",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/spring/spring-original.svg" height="40" width="40" alt="spring logo" />),
    href: "https://spring.io/"
  },
  {
    title: "DotNetCore",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/dotnetcore/dotnetcore-original.svg" height="40" width="40" alt="dotnetcore logo" />),
    href: "https://dotnet.microsoft.com/"
  },
  {
    title: "Flask",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/flask/flask-original.svg" height="40" width="40" alt="flask logo" />),
    href: "https://flask.palletsprojects.com/"
  },
  {
    title: "Django",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/django/django-plain.svg" height="40" width="40" alt="django logo" />),
    href: "https://djangoproject.com/"
  }
];
const iconsDB = [
  {
    title: "Hibernate",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/hibernate/hibernate-original.svg" height="40" width="40" alt="hibernate logo" />),
    href: "https://hibernate.org/"
  },
  {
    title: "SQLAlchemy",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/sqlalchemy/sqlalchemy-original.svg" height="40" width="40" alt="sqlalchemy logo" />),
    href: "https://sqlalchemy.org/"
  },
  {
    title: "PostgreSQL",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/postgresql/postgresql-original.svg" height="40" width="40" alt="mysql logo" />),
    href: "https://postgresql.org/"
  },
  {
    title: "MongoDB",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/mongodb/mongodb-original.svg" height="40" width="40" alt="mongodb logo" />),
    href: "https://mongodb.com/"
  },
  {
    title: "Redis",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/redis/redis-original.svg" height="40" width="40" alt="redis logo" />),
    href: "https://redis.io/"
  }
];
const iconsInfraestructure = [
  {
    title: "Docker",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/docker/docker-original.svg" height="40" width="40" alt="docker logo" />),
    href: "https://docker.com/"
  },
  {
    title: "Kubernetes",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/kubernetes/kubernetes-original.svg" height="40" width="40" alt="kubernetes logo" />),
    href: "https://kubernetes.io/"
  }
];
const iconsTesting = [
  {
    title: "Playwright",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/playwright/playwright-original.svg" height="40" width="40" alt="playwright logo" />),
    href: "https://playwright.dev/"
  },
  {
    title: "Cypress",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/cypressio/cypressio-original.svg" height="40" width="40" alt="cypressio logo" />),
    href: "https://cypress.io/"
  }
];
const IconsApis = [
  {
    title: "REST",
    icon: (<Image src="https://velog.velcdn.com/images/junhok82/post/eaedbeb1-1208-41b2-9f69-117c1d1ead50/rest.png" height="40" width="40" alt="rest logo" />),
    href: "https://restfulapi.net/"
  },
  {
    title: "Swagger",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/swagger/swagger-original.svg" height="40" width="40" alt="swagger logo" />),
    href: "https://swagger.io/"
  },
  {
    title: "GraphQL",
    icon: (<Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/graphql/graphql-plain.svg" height="40" width="40" alt="graphql logo" />),
    href: "https://graphql.org/"
  }
];


const career = [
  {
    badge: "🖥️ Experiencia",
    rows: [
      {
        title: "Vendedor",
        description: "Grupo OpenSports | 2019 - 2025",
        content: (
          <>
            <p>
              Sit duis est minim proident non nisi velit non consectetur. Esse
              adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
              Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
              incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
              fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
              nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
              occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
              officia sint labore. Tempor consectetur excepteur ut fugiat veniam
              commodo et labore dolore commodo pariatur.
            </p>
          </>
        ),
      },
    ]
  },
  {
    badge: "📚 Educación",
    rows: [
      {
        title: "Técnico en programación",
        description: "Escuela de Educación Técnica N° 1 | 2013 - 2019",
        content: (
          <>
            <p className="mb-2">
              Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
              deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
              non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
              sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
              velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
              commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
            </p>
            <div className="text-sm font-semibold">
              <p>
                Promedio 9.12
              </p>
            </div>
          </>
        ),
      },
      {
        title: "Licenciatura en sistemas",
        description: "Universidad Nacional de La Plata | 2020 - Actualidad",
        content: (
          <>
            <p className="mb-2">
              Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
              deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
              non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
              sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
              velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
              commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
            </p>
            <div className="text-sm font-semibold">
              <p>
                Promedio 8.5 - 89.18% de materias aprobadas
              </p>
            </div>
          </>
        ),
      },
    ]
  }
];

export default async function Home() {
  const user =  await githubService.getGitHubUser();
  if (!user) return <p>User not found</p> ;

  const repositories = await githubService.getGitHubRepositories(user.login);
  if (!repositories || repositories.length === 0) return <p>No repositories found</p>;

  const data: CardObject[] = repositories.map(({ id, name, description, homepage, html_url, languages }) => ({
    id,
    title: name,
    description: description || "",
    image: homepage ? 
      `https://api.microlink.io?url=${encodeURIComponent(homepage)}&screenshot=true&embed=screenshot.url`
      : `https://opengraph.githubassets.com/317f0ed00d6d6d4a22f24b956b3988bc254e791fcfe1955acef5add1764cfb42/${encodeURIComponent(html_url.split("/")[3])}/${encodeURIComponent(html_url.split("/")[4])}`,
    link: html_url,
    items: languages
      .filter((lang): lang is keyof typeof GitHubLanguage => lang in GitHubLanguage)
      .map((lang, index) => {
        const normalized = GitHubLanguage[lang];
        return {
          id: index,
          name: lang,
          image: `https://github.com/devicons/devicon/raw/v2.16.0/icons/${normalized}/${normalized}-original.svg`,
        }
      })
  }));
  
  return (
    <>
      <HeroSection title={user.name} description={user.bio} text={user.location} imageUrl={user.avatar_url} imageAlt={user.name} />
      <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4 text-center">
          Tecnologías utilizadas
        </h2>
        <Dock icons={[...iconsLanguage, ...iconsFrameworks, ...iconsInfraestructure, ...iconsDB, ...iconsTesting, ...IconsApis]} />
      </div>
      <TracingBeam items={career} id="career" />
      <div className="dark:bg-neutral-800 p-4 rounded-lg">
          <h1 className="mb-4 text-center text-3xl font-bold">
              Mis proyectos
          </h1>
          <p className="text-center text-sm text-neutral-400">
              Una colección de mis proyectos personales y académicos desarrollados a lo largo de mi carrera.
          </p>
      </div>
      <Gallery data={data} id="projects" />
    </>
  );
}
