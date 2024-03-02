import { MouseEventHandler } from "react";



export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit'
}

export type ContactType = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    object: string;
    message: string;
}