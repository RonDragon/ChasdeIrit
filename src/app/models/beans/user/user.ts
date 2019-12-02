import { UserType } from '../../enums/UserType/user-type.enum';

export class User {
    constructor(public userName?: string, public password?: string, public userType?: UserType) {}
}
