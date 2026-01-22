import Image from "next/image";

type HeadersProps = {
  title: string | "";
  image: string;
};

export default function PictureButton({image,title }: HeadersProps) {
  return (
    <div className="bg-[#1f1330] w-28 h-28 rounded-4xl flex items-center justify-center mx-2.5">
      <Image src={image} alt={title} width={60} height={60} className="" />
    </div>
  );
}
