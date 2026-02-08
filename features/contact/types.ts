import * as Icons from "lucide-react";

export type Info = {
  id: number;
  icon: keyof typeof Icons;
  title: string;
  details: string[];
};
