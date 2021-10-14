export interface StackProps {
  initialStacks: Array<string>;
  setInitialStacks: React.Dispatch<React.SetStateAction<string[]>>;
  placeHolder?: string;
  heigth?: string;
}
