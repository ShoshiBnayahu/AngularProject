import { HttpClient } from '@angular/common/http'
import { Injectable, Type } from '@angular/core';
import { Job } from '../models/Job';
import { Field } from '../models/Field';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class positionService {
    constructor(private http: HttpClient) {
        this.getJobsFromServer();
    }

    jobsList: Job[] = []

    getJobsFromServer() {
        this.http.get(`https://localhost:7193/jobs/GetAllJobs`).subscribe((res: any) => {
            res.forEach((job: any) => {
                this.jobsList.push(job)
            })
        });
    }

    getJobFromServer(JobId: number): Observable<any> {
        return this.http.get(`https://localhost:7193/jobs/GetJob?id=${JobId}`)
    }

    updateUserJobsSentCV(UserId: number,jobName:string): Observable<any> {
        return this.http.put(`https://localhost:7193/jobs/updateJobsSentCV?id=${UserId}&jobName=${jobName}`,null)
    }

    filterJobs(field: string | undefined, area: string | null) {
        console.log(field, area); 
        let filterList = this.jobsList.filter(job => 
            (field === undefined || (field === Field[Field.ALL].toLowerCase()) || Field[job.jobField].toLowerCase() === field) &&
                (area === null || area === 'all' || job.area === area)
        )
        console.log(filterList);

        return filterList
    }

    public get getJobsList() {
        return this.jobsList
    }

    getFields() {
        return Object.values(Field).filter(field => Number.isNaN(Number(field)));
    }
    getAreas() {
        return this.http.get(`https://localhost:7193/jobs/GetAreas`) 
    }
}



