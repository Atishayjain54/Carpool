export class MatchRideResponse {
    constructor(
      public ownerId: string,
      public customerId: string,
      public firstName: string,
      public lastName: string,
      public availableSeats: number,
      public source: string,
      public destination: string,
      public date: string,
      public validFrom: string,
      public validTill: string,
      public price: number
    ) {}
  }
  