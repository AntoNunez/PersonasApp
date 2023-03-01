
export interface Person {
    [x: string]: any;
   
    id: number;
    nombre: string;
    area: string;
    email: string;
    
}
export interface PersonResponse {
   
    personas: Person[];
    
}