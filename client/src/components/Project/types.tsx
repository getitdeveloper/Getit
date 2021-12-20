export interface IProject {
  teamprofiles: Array<{ id: number; title: string; status: boolean }>;
  proceeding?: string;
  finished?: string;
}
