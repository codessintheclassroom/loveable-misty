export default interface Pet {
    readonly id: string;
    name: string;
    description: string;
    readonly status: string;
    readonly kind: string;
    breed: string;
    birthday: string; 
};
