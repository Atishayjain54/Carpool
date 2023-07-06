export class BookRideRequest {
    id!: string;
    rideId!: number;
    dateTime!: Date;
    boardingStopId!: number;
    destinationStopId!: number;
    availableSeats!: number;
    bookedSeats!: number;
}
