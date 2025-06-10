'use client';

import { Card } from "@/components/core/card/Card";
import { CardObject } from "@/types/types";

type GalleryProps = {
    id: string;
    data: CardObject[];
};

export function Gallery({ id, data }: GalleryProps) {

    return (
        <div className="container mx-auto py-4" id={id}>
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
