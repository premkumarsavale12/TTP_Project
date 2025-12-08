import React from "react";

interface BothBlock {
    text: string;
    media: any;
}

export const Both: React.FC<BothBlock> = ({ text, media }) => {
    return (

        <>
            <section className="w-full py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-5xl mx-auto text-center">

                    <p className=" text-white leading-tight whitespace-nowrap">
                        {text}
                    </p>

                    {media && (
                        <div className="mt-10 flex justify-center">
                            <img
                                src={media.url}
                                alt={media.alt || "Main image"}
                                className="w-full max-w-5xl rounded-xl shadow-xl object-contain transition-transform duration-300 hover:scale-[1.02]"
                            />
                        </div>
                    )}
                </div>
            </section>

        </>
    )
}