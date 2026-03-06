
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.mp4';
declare module '*.webp';

// vite-imagetools v6 — ambient module declarations for ?format=webp&w=... imports
declare module '*?format=webp&w=640' { const src: string; export default src; }
declare module '*?format=webp&w=800' { const src: string; export default src; }
declare module '*?format=webp&w=1200' { const src: string; export default src; }
declare module '*?format=webp&w=1600' { const src: string; export default src; }
