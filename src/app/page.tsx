import { HeroSection } from "@/components/core/hero/HeroSection";
import { TimeLine } from "@/components/core/timeline/TimeLine";
import { Gallery } from "@/components/core/gallery/Gallery";
import githubService from "@/lib/github";
import { CardObject } from "@/types/types";
import { GitHubLanguage } from "@/types/github";

export default async function Home() {
  // const user =  await githubService.getGitHubUser();
  // if (!user) return <p>User not found</p> ;
  // const repositories = await githubService.getGitHubRepositories("thiago-laurence");

  // const data: CardObject[] = repositories.map(({ id, name, description, homepage, html_url, languages }) => ({
  //   id,
  //   title: name,
  //   description: description || "",
  //   image: homepage ? 
  //     `https://api.microlink.io?url=${encodeURIComponent(homepage)}&screenshot=true&embed=screenshot.url`
  //     : `https://opengraph.githubassets.com/317f0ed00d6d6d4a22f24b956b3988bc254e791fcfe1955acef5add1764cfb42/${encodeURIComponent(html_url.split("/")[3])}/${encodeURIComponent(html_url.split("/")[4])}`,
  //   link: html_url,
  //   items: languages
  //     .filter((lang) => GitHubLanguage[lang as keyof typeof GitHubLanguage])
  //     .map((lang, index) => ({
  //       id: index,
  //       name: lang,
  //       image: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${GitHubLanguage[lang as keyof typeof GitHubLanguage]}/${GitHubLanguage[lang as keyof typeof GitHubLanguage]}-original.svg`,
  //     })),
  // }));

  return (
    <>
      {/* <HeroSection title={user.name} description={user.bio} text={user.location} imageUrl={user.avatar_url} imageAlt={user.name} /> */}
      <TimeLine />
      {/* <Gallery data={data} /> */}
    </>
  );
}
