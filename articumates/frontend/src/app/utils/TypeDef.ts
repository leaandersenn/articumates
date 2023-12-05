export type Impairment = {
    "description": string;
    "skillLevel": number;
  }
  
export type User = {
    "goals?": string[];
    "impairments?": Impairment[];
    "name": string;
    "age": number;
    "id": number;
}
  
  