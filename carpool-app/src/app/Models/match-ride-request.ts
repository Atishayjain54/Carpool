export class MatchRideRequest {
    customerId!: string;
    source!: string;
    destination!: string;
    rideDate!: string;
    rideValidFrom!: string;
    rideValidTill !: string;
    requiredSeats!:number
    constructor(customerId: string, source: string, destination: string, rideDate: string,rideValidFrom: string,rideValidTill : string,requiredSeats:number) {
        this.customerId = customerId;
        this.source = source;
        this.destination = destination;
        this.rideDate = rideDate;
        this.rideValidFrom = rideValidFrom;
        this.rideValidTill = rideValidTill;
        this.requiredSeats = requiredSeats;
    }
}
