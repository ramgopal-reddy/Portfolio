import { AnimatedCodeBlock } from "../../components/ui/animated-code-block";

export const Demo = () => {
  const examples = [
    {
      code: `import time

def portfolio_lifecycle():
    stages = [
        ("Home", "Problem Framing"),
        ("About", "Data Understanding"),
    ]

    print("Initializing...")

    time.sleep(2)

    stages += [
        ("Projects", "Fine-Tuning"),
        ("Experience", "Deployment"),
        ("Contact", "Feedback Loop"),
    ]

    print("Lifecycle aligned 🚀")
    return stages


if __name__ == "__main__":
    portfolio_lifecycle()
`,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto rounded-md overflow-hidden relative">
      <AnimatedCodeBlock
        code={examples[0].code}
        theme="dark"
        title="portfolio.py"
        typingSpeed={30}
        showLineNumbers={true}
        autoPlay={true}
        language="python"
        highlightLines={[1, 4, 11]}
        loop={false}
      />
    </div>
  );
};
