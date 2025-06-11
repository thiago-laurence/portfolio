import Image from 'next/image';

export default function Footer() {
  return (
    <section className="bg-gray-100 dark:bg-neutral-800 mt-8">
        <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-2">
                <p className="text-base leading-6 text-center text-neutral-600 dark:text-neutral-400">
                    © 2025 - Thiago Laurence
                </p>
                <p className="text-base leading-6 text-neutral-600 dark:text-neutral-400">
                    |
                </p>
                <p className="text-base leading-6 text-neutral-600 dark:text-neutral-400">
                    Developed by
                </p>
                <span className="sr-only">Typescript</span>
                <Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/typescript/typescript-original.svg" height="24" width="24" alt="typescript logo" />
                <span className="sr-only">NextJS</span>
                <Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/nextjs/nextjs-original.svg" height="24" width="24" alt="nextjs logo" />
                <span className="sr-only">React</span>
                <Image src="https://github.com/devicons/devicon/raw/v2.16.0/icons/react/react-original.svg" height="24" width="24" alt="react logo" />
            </div>
        </div>
    </section>
  );
}