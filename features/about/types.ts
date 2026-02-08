import * as Icons from "lucide-react";

export type Stat = {
  id: number;
  value: string;
  label: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export type Value = {
  id: number;
  icon: keyof typeof Icons;
  title: string;
  description: string;
};
