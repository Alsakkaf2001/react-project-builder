export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    price: number; // Changed to number
    colors: string[]; // Corrected from 'color' to 'colors'
    category: { // Fixed typo (catogory → category)
        name: string;
        imageURL: string;
    };
}
