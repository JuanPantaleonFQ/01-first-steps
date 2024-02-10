import NavBar from "@/Components/navBar/NavBar"

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <NavBar/>
      <h1>General Layout</h1>
      {children}
    </div>
  );
}