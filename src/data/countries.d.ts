declare module '*.json' {
    const value: any;
    export default value;
  }
  
  interface Country {
    name: string;
    mobile_code: string;
    id: string;
    flag: string;
  }
  
  declare const countries: Country[];
  
  export default countries;
  