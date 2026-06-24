import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function MyExperincePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <Experience />
      <Footer />
    </main>
  );
}
