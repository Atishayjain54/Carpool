import { StopsDTO } from "./stops-dto"

export class OfferRideRequest {
    rideOwnerId: string

    startingStop: string

    endingStop: string

    date: Date

    fair: number

    totalSeats: number
    stops: StopsDTO[]
    constructor(RideOwnerId: string, StartingStop: string, EndingStop: string, Date: Date, Fair: number, TotalSeats: number, Stops: StopsDTO[]) {
        this.rideOwnerId = RideOwnerId;
        this.startingStop = StartingStop;
        this.endingStop = EndingStop;
        this.date = Date;
        this.fair = Fair;
        this.totalSeats = TotalSeats;
        this.stops = Stops;
    }
}
