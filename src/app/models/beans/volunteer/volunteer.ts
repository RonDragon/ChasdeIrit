export class Volunteer {
    constructor(
        public volunteerId?: number,
        public volunteerName?: string,
        public volunteerPhoneNumber?: string,
        public numberOfBox?: number,
        public areaDelivery?: string,
        public partner?: Volunteer,
      ) {}
}
