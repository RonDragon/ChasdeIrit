import { DeliveryStatus } from '../../enums/DeliveryStatus/delivery-status.enum';
import { FamilyStatus } from '../../enums/FamilyStatus/family-status.enum';

export class Family {
  constructor(
    public familyId?: number,
    public familyName?: string,
    public numOfPerInFam?: number,
    public currentAddres?: string,
    public urlAddres?: string,
    public famPhoneNum?: string,
    public socialWorker?: string,
    public madePhoneCall?: boolean,
    public familyStatus?: FamilyStatus,
    public deliveryStatus?: DeliveryStatus,
    public managerNote?: string,
    public volunteerNote?: string,
    public startDeliveryDate?: Date,
    public endDeliveryDate?: Date,
    public volunteer?: [],
  ) {}
}
