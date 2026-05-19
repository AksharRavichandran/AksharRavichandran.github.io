import React from "react";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export function buildWorkTabs() {
  return [
    {
      id: "experience",
      label: "Work",
      content: <Experience embedded />,
    },
    {
      id: "projects",
      label: "Projects",
      content: <Projects embedded />,
    },
  ];
}
