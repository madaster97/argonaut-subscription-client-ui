export interface DataCardInfo {
  id: string;
  stepNumber?: number;
  heading: string;
  optional?: boolean;
  description: string;
  available?: boolean;
  completed?: boolean;
  busy?: boolean;
}