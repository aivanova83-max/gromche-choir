import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Index from "@/pages/Index";
import Events from "@/pages/Events";
import EventMother from "@/pages/EventMother";
import Zapis from "@/pages/Zapis";
import Legal from "@/pages/Legal";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/mother" element={<EventMother />} />
          <Route path="/zapis" element={<Zapis />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
