import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface LogoItem {
    logo: {
        url: string;
        alt: string;
    };
    richText: any;
    para: string;
}

interface MainBlockProps {
    richText: any;
    paragraph: string;
    logos: LogoItem[];
    media?: {
        url: string;
        alt?: string;
    };
}

export const MainBlock: React.FC<MainBlockProps> = (data) => {

    console.log(data);

    return (

        <section className="py-12">

            {/* Top Content */}

            <div className="max-w-5xl mx-auto text-center mb-12">

                <div className="prose  -ml-[200px]">

                    {data.richText && <RichText className="mb-0" data={data.richText} />}


                </div>

                {data.paragraph && (
                    <p className="text-gray-600 mt-4 -ml-[80px]">{data.paragraph}</p>
                )}
            </div>

            {/* Logos Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {data.logos?.map((item, index) => (

                    <div

                        key={index}

                        className="border rounded-lg p-6 shadow-md bg-white hover:shadow-xl transition"

                    >
                        {/* Logo Icon */}
                        <div className="w-16 mx-auto mb-4">
                            <img
                                src={item.logo?.url}
                                alt={item.logo?.alt || "logo"}
                                className="w-full object-contain -ml-[100px]"
                            />
                        </div>

                        {/* Title (richText) */}
                        <div className="text-center text-black mb-3 font-semibold">
                            {/* <RichText content={item.richText} /> */}
                            {item.richText && <RichText className="mb-0" data={item.richText} />}
                        </div>

                        {/* Paragraph */}
                        <p className="text-gray-600 text-center">{item.para}</p>
                    </div>
                ))}



                  {data.media?.url && (
                <div className="max-w-4xl mx-auto mt-12">
                    <img
                        src={data.media.url}
                        alt={data.media.alt || "Main image"}
                        className="w-full object-contain"
                    />
                </div>
            )}
            </div>

       


        </section>
    );
};

export default MainBlock;
