
import { Field } from "./Field";

export interface Job{
    id:number;
    jobName:string;
    jobField:Field;
    scopeOfHours:number;
    requirements:string;
    area:string;
    software:string;
    workFromHome:boolean;
}
