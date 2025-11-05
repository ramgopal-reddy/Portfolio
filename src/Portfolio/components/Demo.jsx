import { AnimatedCodeBlock } from "../../components/ui/animated-code-block";

export const Demo = () => {
  const examples = [
    {
      code: `import { useState, useEffect } from 'react';

function useLife() {
  const [skills, setSkills] = useState(['Coffee', 'Code']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkills(prev => [...prev, 'Debugging', 'AI Magic']);
      setLoading(false);
      console.log('✨ Life updated successfully');
    }, 2000);
  }, []);

  return { skills, loading };
}

export default useLife;
`,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto rounded-md overflow-hidden relative">
      <AnimatedCodeBlock
        code={examples[0].code}
        theme="dark"
        title="profile-loading.jsx"
        typingSpeed={25}
        showLineNumbers={true}
        autoPlay={true}
        language="typescript"
        highlightLines={[1, 4, 11]}
        loop={false}
      />
    </div>
  );
};
