
import { Field } from "./Field";

export interface Job{
    Id:number;
    JobName:string;
    JobField:Field;
    ScopeOfHours:number;
    Requirements:string;
    Area:string;
    software:string;
    WorkFromHome:boolean;
}
