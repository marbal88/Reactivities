import { StickyProps } from "semantic-ui-react";

export interface ChatComment {
    id: number;
    createAt: Date;
    body: string;
    username: string;
    displayName: string;
    image: string;
}