import RichText from "@/components/RichText";
import React from "react";

interface ContenBlock {

    paragrapgh: string;
    heading: string;
    richText: any;
    para: any;


}

export const Conten: React.FC<ContenBlock> = ({ paragrapgh, heading, richText, para }) => {
    return (

        <>
            <section className="container mx-auto py-16">
                <div className="flex flex-col md:flex-row md:justify-between gap-12">

                    {/* LEFT SIDE */}
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-white">{paragrapgh}</p>

                        <h1 className="text-3xl font-bold">{heading}</h1>

                        {richText && (
                            <RichText
                                className="prose max-w-none"
                                data={richText}
                                enableGutter={false}
                            />
                        )}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="md:w-1/2   mt-[120px]">
                        <ul className="list-disc pl-5 space-y-4 text-white">
                            {para?.map((item: any, index: number) => (
                                <li key={index}>{item.point}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>


        </>
    )
}