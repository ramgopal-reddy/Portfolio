import React from "react";

export default function AIConstructionSite() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          AI Construction Management System
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          AI-powered automation system for construction workflows, combining
          real-time monitoring, intelligent responses, and continuous project
          memory.
        </p>

        {/* Image Section (Add your Make.com workflow image here) */}
        <div className="mb-10">
          <img
            src="/AIConstructionSiteMakeWorkflow.png"
            alt="Workflow Diagram"
            className="rounded-2xl shadow-lg border border-gray-800"
          />
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Overview */}
          <Section title="Overview">
            This system acts as an AI-powered site coordinator that automates
            communication, tracks project progress, and provides intelligent
            insights. It integrates workflows, AI models, and cloud
            infrastructure to reduce delays and improve decision-making in
            construction projects.
          </Section>

          {/* Core Features */}
          <Section title="Core Features">
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Automated RFI handling using LLMs</li>
              <li>Weather-based alerts with CRON Workers</li>
              <li>Voice-based daily logs using Whisper AI</li>
              <li>Real-time project tracking and reporting</li>
              <li>Context-aware AI responses using vector memory</li>
            </ul>
          </Section>

          {/* Workflow */}
          <Section title="Workflow Architecture">
            <p className="text-gray-300 leading-relaxed">
              Incoming RFIs are triggered via automation tools like Make.com or
              n8n. These inputs are processed by Cloudflare Workers, where LLMs
              interpret the query and fetch relevant project context from D1, KV
              storage, and Vectorize memory. The system generates accurate
              responses for quick approvals.
            </p>
          </Section>

          {/* Automation */}
          <Section title="Automation & Monitoring">
            <p className="text-gray-300 leading-relaxed">
              A scheduled Worker runs hourly to monitor weather conditions. When
              thresholds are exceeded, alerts are triggered and schedules are
              adjusted automatically to prevent delays and risks.
            </p>
          </Section>

          {/* Data Intelligence */}
          <Section title="AI Data Processing">
            <p className="text-gray-300 leading-relaxed">
              Site activities such as voice logs, resource usage, and progress
              updates are processed using Whisper and LLMs. The data is
              structured, stored, and embedded into long-term memory, enabling
              continuous learning of project status and risks.
            </p>
          </Section>

          {/* Application */}
          <Section title="Application Layer">
            <p className="text-gray-300 leading-relaxed">
              The backend integrates with an Android application used by
              managers and site supervisors. It provides real-time updates,
              reporting dashboards, and resource tracking, ensuring efficient
              site management.
            </p>
          </Section>

          {/* Tech Stack */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "React",
                "Cloudflare Workers",
                "Make.com / n8n",
                "LLMs",
                "Whisper AI",
                "D1 Database",
                "KV Storage",
                "Vectorize",
                "Android (Expo)",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-400">{children}</div>
    </div>
  );
}
