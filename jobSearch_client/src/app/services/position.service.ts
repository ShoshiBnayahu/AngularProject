import { HttpClient } from '@angular/common/http'
import { Injectable, Type } from '@angular/core';
import { Job } from '../models/Job';
import { Field } from '../models/Field';
@Injectable({
    providedIn: 'root'
})

export class positionService {
    constructor(private http: HttpClient) {
        this.getJobsFromServer();
    }

    jobsList: Job[] = []
    getJobsFromServer() {
        this.http.get(`https://localhost:7193/JobSearchServer/GetAllJobs`).subscribe((res: any) => {
            res.forEach((job: any) => {
                this.jobsList.push(job)
            })
        });
    }

    filterJobsByField(field: Field) {
        return this.jobsList.filter(job => job.jobField === field)
    }
    
    filterJobsByArea(area: string) {
        return this.jobsList.filter(job => job.area === area)
    }
    public get getJobsList() {
        return this.jobsList
      }
      
    getFields() {
        return Object.values(Field).filter(field => Number.isNaN(Number(field)));
    }
    getAreas() {
        return ['Center','Jerusalem','Rannana'];
    }
}



