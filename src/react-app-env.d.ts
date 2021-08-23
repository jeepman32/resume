/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly GISTS_USERNAME: string;
    readonly GISTS_PASSWORD: string;
    readonly GIST_ID: string;
  }
}
