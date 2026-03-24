import { DualHighlight } from "@/components/DualHighlight";
import { useTheme } from "../hooks/useTheme";

export function UsefulAIMLLinks() {
  const theme = useTheme();

  return (
    <section
      className={`py-20 px-4 sm:px-6 transition-all duration-300  ${
        theme.isDark ? "bg-gray-800/50" : "bg-gray-100/50"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">
          <DualHighlight first="Useful AI/ML" second="Resources" />
        </h1>
        <p className="text-sm opacity-80">
          Curated notebooks and resources I use for building and fine-tuning
          models.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto items-stretch justify-center">
        {/* Link Card 1 */}
        <div
          className="flex-1 min-w-[260px] max-w-sm h-24 flex items-center justify-center px-6 border-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center"
          style={{
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
            transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
          }}
        >
          <a
            href="https://unsloth.ai/docs/get-started/unsloth-notebooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsloth Starter Notebooks
          </a>
        </div>

        {/* Link Card 2 */}
        <div
          className="flex-1 min-w-[260px] max-w-sm h-24 flex items-center justify-center px-6 border-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center"
          style={{
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
            transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
          }}
        >
          <a
            href="https://colab.research.google.com/github/unslothai/notebooks/blob/main/nb/Qwen3_5_MoE.ipynb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qwen 3.5 MoE Fine-Tuning Notebook
          </a>
        </div>
      </div>
    </section>
  );
}
