export type Project = {
    id: number;
    num: string;
    year: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    liveDemoUrl: string;
    githubUrl: string;
    imageSrc: string;
    canvasClass: string;
}

export interface FadeVolumeParams {
  audio: HTMLAudioElement;
  target: number;
  duration: number;
}