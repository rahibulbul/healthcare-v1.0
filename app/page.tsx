import Navbar from "@/components/navbar/page";
import ToastTester from "@/components/Toasttesting/page";
export default function Home() {
  return (
    <div className="screen">
      <Navbar />
      <div className="web-container">
        <ToastTester />
      </div>
    </div>
  );
}
