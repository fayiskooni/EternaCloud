import Image from "next/image";

type HeadersProps = {
  title: string;
  content: string;
  image: string;
};

export default function PictureCards({ title, content, image }: HeadersProps) {
  return (
    <div className="bg-white w-[350px] h-[450px] rounded-2xl mr-1 ml-1 mt-14 relative overflow-hidden">
      <div className="p-10 text-black">
        <p className="text-2xl font-bold mb-5">{title}</p>
        <p className="text-lg">{content}</p>
      </div>
      <div className="absolute top-6">
        <Image src={image} alt={title} width={350} height={200} className=" " />
      </div>
    </div>
  );
}
