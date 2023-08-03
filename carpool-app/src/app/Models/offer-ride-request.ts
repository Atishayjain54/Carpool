import { IntermediaryStop } from "./intermediary-stop";

export class OfferRideRequest {
    rideId!:string
    ownerId!: string
    source!:string
    destination!: string
    date!: string
    rideValidFrom!:string;
    rideValidTill!:string;
    availableSeats?: number
    intermediaryStops?: IntermediaryStop[];
    price!: Float32Array;
    isRideBooked?:boolean;
    customerId?:string;

    // constructor(ownerId: string, source: string, destination: string, rideDate: string, rideValidFrom: string,rideValidTill: string, availableSeats: number, intermediaryStops: IntermediaryStop[],price:Float32Array) {
    //     this.ownerId = ownerId;
    //     this.source = source;
    //     this.destination = destination;
    //     this.rideValidFrom=rideValidFrom;
    //     this.rideValidTill=rideValidTill;
    //     this.rideDate = rideDate;
    //     this.availableSeats = availableSeats;
    //     this.intermediaryStops =  intermediaryStops;
    //     this.price=price;
    // }
}
