import Link from "next/link";
import Image from "next/image";

const HorizonLogo = () => {
  return (
    <Link href="/" className="cursor-pointer flex items-center gap-1">
      <Image
        src="/icons/logo.svg"
        width={34}
        height={34}
        alt="Horizon Logo"
        className="size-[24px] max-xl:size-14"
      />
      <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
        Horizon
      </h1>
    </Link>
  );
};

export default HorizonLogo;
