import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

function Heading({ as = "h2", children, className = "" }: HeadingProps) {
  const headingComponents = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  } as const;

  const Tag = headingComponents[as];

  return <Tag className={className}>{children}</Tag>;
}

export default Heading;
