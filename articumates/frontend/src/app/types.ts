export type ChosenImpairment = {
    skillLevel: any;
    description: string;
    focus: 'High' | 'Medium' | 'Low' | 'No focus';
  };
  
  
export type Impairment = {
    description: string;
    skillLevel: number;
};

export type Exercise = {
  title: string;
  ingress: string;
  description: string
}