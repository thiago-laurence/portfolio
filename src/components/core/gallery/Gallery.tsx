'use client';

import { Card } from "@/components/core/card/Card";
import { CardObject } from "@/types/types";

type GalleryProps = {
    data: CardObject[];
};

export function Gallery({ data }: GalleryProps) {

    return (
        <div className="container mx-auto p-8">
            <h1 className="mb-4 text-center text-3xl font-bold">
                Check the navbar at the top of the container
            </h1>
            <p className="mb-10 text-center text-sm text-zinc-500">
                For demo purpose we have kept the position as{" "}
                <span className="font-medium">Sticky</span>. Keep in mind that this
                component is <span className="font-medium">fixed</span> and will not
                move when scrolling.
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {
                    data.map((obj) => (
                        <div className="col-span-1 px-10 pt-5" key={obj.id}>
                            <Card
                                cardObject={obj}
                                className="w-full"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
