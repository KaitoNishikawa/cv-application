export default class PersonalDetailsClass {
    constructor() {
        this.fullName = '';
        this.email = '';
        this.phoneNumber = '';
        this.address = '';
    }

    setProperty(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        } else {
            console.warn(`Property "${propertyName}" does not exist on ExperienceClass.`);
        }
    }
}