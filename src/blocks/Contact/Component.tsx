import RichText from "@/components/RichText";

interface ContactBlockProps {

    richText: any;
    media: any;

}

export const ContactBlock: React.FC<ContactBlockProps> = ({ richText, media }) => {


    return (


        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Rich Text Section */}
                {richText && (
                    <RichText
                        className="mb-8 text-base md:text-lg leading-relaxed text-gray-800"
                        data={richText}
                        enableGutter={false}
                    />
                )}

                {/* Media Section */}
                {media && (
                    <div className="mt-12 flex justify-center">
                        <img
                            src={media.url}
                            alt={media.alt || "Main image"}
                            className="max-w-full h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>
                )}

            </div>

        </>
    )
}  