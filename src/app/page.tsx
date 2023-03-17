import { Inter, Lato } from "next/font/google";
import { ChatGPTForm } from "@/components/features/ChatGPTForm/ChatGPTForm";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main
      className={`flex justify-center items-center bg-slate-100 dark:bg-slate-800 ${lato.className}`}
    >
      <ChatGPTForm />
    </main>
  );
}
