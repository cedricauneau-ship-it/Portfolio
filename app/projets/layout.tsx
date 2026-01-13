
import Footer from "@/components/Footer";

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <header></header>
        <main>{children}</main>
        <footer><Footer /></footer>
    </>    
  );
}
