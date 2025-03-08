import Link from "next/link";

export const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>my site</div>
        <div className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/Concursantes"}>Concursantes</Link>
          {/* <Link href={"/Member"}>Member</Link>
          <Link href={"/Public"}>Public</Link> */}
        </div>
      </nav>
    </header>
  );
};
