import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DefectDataStorageService {
    constructor(private http: HttpClient) {}
}