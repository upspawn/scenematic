import { PromptBuilder } from "@/components/prompt-builder/PromptBuilder";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <TooltipProvider delayDuration={300}>
      <PromptBuilder />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "rgb(23 23 23)",
            border: "1px solid rgb(38 38 38)",
            color: "rgb(229 229 229)",
          },
        }}
      />
    </TooltipProvider>
  );
}
