/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly REACT_APP_GITHUB_URL: string;
  }
}
