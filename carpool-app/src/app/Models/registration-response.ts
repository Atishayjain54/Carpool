import { UserDetails } from "./user-details";

export class RegistrationResponse {
    isSuccess?:Boolean;
    errorMessage?:string;
    userDetails?:UserDetails
}
