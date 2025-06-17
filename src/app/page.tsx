import { Suspense } from "react";
import { HeroSection } from "@/components/core/hero/HeroSection";
import { TracingBeam } from "@/components/core/tracing-beam/TreacingBeam";
import { Gallery } from "@/components/core/gallery/Gallery";
import { Dock } from "@/components/core/dock/Dock";
import { CardSkeleton } from "@/components/core/skeleton/CardSkeleton";
import { Loader } from "@/components/core/utils/Loader";
import Footer from "@/components/core/footer/Footer";
import githubService from "@/lib/github";
import { iconsLanguage, iconsFrameworks, iconsInfraestructure, iconsDB, iconsTesting, IconsApis, career, photos } from "@/lib/data";
import { getRepoPreviewImage } from "@/lib/helper";
import { CardObject } from "@/types/types";
import { GitHubLanguage } from "@/types/github";


export default async function Home() {
  const user =  await githubService.getGitHubUser();
  if (!user) return <p>User not found</p> ;

  const data = await githubService.getGitHubRepositories(user.login, 1);
  if (!data || data.repositories.length === 0) return <p>No repositories found</p>;

  const cardData: CardObject[] = data.repositories.map(({ id, name, description, homepage, html_url, languages }) => ({
    id,
    title: name,
    description: description ?? '',
    image: getRepoPreviewImage(homepage, html_url),
    link: html_url,
    items: languages
      .filter((lang): lang is keyof typeof GitHubLanguage => lang in GitHubLanguage)
      .map((lang, index) => ({
        id: index,
        name: lang,
        image: `https://github.com/devicons/devicon/raw/v2.16.0/icons/${GitHubLanguage[lang]}/${GitHubLanguage[lang]}-original.svg`,
      })),
  }));
  
  return (
    <>
      <HeroSection title={user.name} description={user.bio} text={`📍 ${user.location}`} photos={[...photos, { src: user.avatar_url, alt: user.name }]} id="profile" />
      <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4 text-center">
          Tecnologías utilizadas
        </h2>
        <Suspense fallback={<Loader />}>
          <Dock icons={[...iconsLanguage, ...iconsFrameworks, ...iconsInfraestructure, ...iconsDB, ...iconsTesting, ...IconsApis]} />
        </Suspense>
      </div>
      <TracingBeam items={career} id="career" />
      <div className="dark:bg-neutral-800 p-4 rounded-lg">
          <h1 className="mb-4 text-center text-3xl font-bold">
              Mis proyectos
          </h1>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              Una colección de mis proyectos personales y académicos desarrollados a lo largo de mi carrera.
          </p>
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <Gallery id="projects" data={cardData} />
      </Suspense>
      <Footer />
    </>
  );
}
