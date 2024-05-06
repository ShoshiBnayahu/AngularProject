import { HttpClient } from '@angular/common/http'
import { Injectable, Type } from '@angular/core';
import { Job } from '../models/Job';
import { Field } from '../models/Field';
import { Observable, concatWith } from 'rxjs';
import { loginService } from './login.service';
@Injectable({
    providedIn: 'root'
})

export class positionService {
    constructor(private http: HttpClient) {

    }

    // jobsList: Job[] = []

    getJobsFromServer(): Observable<Job[]> {
        return this.http.get<Job[]>(`https://localhost:7193/jobs/GetAllJobs`)
    }

    getJobFromServer(JobId: number): Observable<Job> {
        return this.http.get<Job>(`https://localhost:7193/jobs/GetJob?id=${JobId}`)
    }

    updateUserJobsSentCV(UserId: number, jobName: string): Observable<any> {
        return this.http.put(`https://localhost:7193/users/updateJobsSentCV?id=${UserId}&jobName=${jobName}`, null)
    }

    filterJobs(field: string, area: string) {
        let filterList
        return new Promise((resolve) =>
            this.getJobsFromServer().subscribe(
                (res: Job[]) => {
                    filterList = res.filter(job =>
                        (field === 'all' || Field[job.jobField].toLowerCase() === field) &&
                        (area === 'all' || job.area === area)
                    )
                    resolve(filterList);
                },
            )
        )
    }
    getFields() {
        return Object.values(Field).filter(field => Number.isNaN(Number(field)));
    }
    getAreas() {
        return this.http.get(`https://localhost:7193/jobs/GetAreas`)
    }
}



