// src/types/index.ts

export interface Story {
    id: number;
    title: string;
    description: string;
  }
  
  export interface Visa {
    id: number;
    title: string;
    description: string;
  }
  
  export interface HomeData {
    title: string;
    description: string;
  }
  
  export interface AboutData {
    title: string;
    content: string;
  }
  
  export interface Data {
    home: HomeData;
    aboutUs: AboutData;
    story: Story[];
    visa: Visa[];
  }
  