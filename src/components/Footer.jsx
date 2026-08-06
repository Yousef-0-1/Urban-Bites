import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={50}
          height={20}
          className=" block lg:hidden"
        />
        <p>
          &copy; {new Date().getFullYear()} Urban Bites. All rights reserved.
        </p>
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={50}
          height={20}
          className="hidden lg:block"
        />
        <div className="policies">
          {["Privacy", "Policy", "Terms", "Services"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white mx-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
