import { Position } from "./position";

export class Employee {
    _id:        string;
    FirstName:  string;
    LastName: string;
    AddressStreet:  string;
    AddressState: string;
    AddressCity:  string;
    AddressZip: string;
    PhoneNum:  string;
    HireDate: string;
    Extension:  number;
    Position: Position; 
    SalaryBonus:  number;
    __v: number;
}