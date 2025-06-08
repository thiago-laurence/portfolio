'use client';

import { Card } from "@/components/core/card/Card";
import { CardObject } from "@/types/types";

type GalleryProps = {
    id: string;
    title: string;
    description: string;
    data: CardObject[];
};

export function Gallery({ id, data, title, description }: GalleryProps) {

    return (
        <div className="container mx-auto p-8" id={id}>
            <h1 className="mb-4 text-center text-3xl font-bold">
                {title}
            </h1>
            <p className="mb-10 text-center text-sm text-zinc-500">
                {description}
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {
                    data.map((obj) => (
                        <div className="col-span-1 px-10 pt-5" key={obj.id}>
                            <Card
                                cardObject={obj}
                                className="w-full"
                                message="Ir al repositorio"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
