import { Field } from "./Field";

export interface User {
    Id: number;
    UserName: string;
    Password: string;
    JobSearchField: Field;
}