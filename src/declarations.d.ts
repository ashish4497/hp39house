declare module '*.jsx' {
  import React from 'react';
  const component: React.FC<any>;
  export default component;
}

export interface Room {
  title: string;
  price: string;
  image: string;
  hasButton?: boolean;
  icons?: string[];
}

export const rooms: Room[];