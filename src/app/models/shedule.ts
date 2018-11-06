import { Doctor } from "./doctor";
import { Time } from "@angular/common";

export class Schedule{
    $key: string;
    start: Time;
    end: Time;
    dateschedule: Date;
    available: boolean;
    doctor: Doctor;
}    