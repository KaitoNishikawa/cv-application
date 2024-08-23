export default class experienceDetailsClass {
    constructor() {
        this.companyName = '';
        this.positionTitle = '';  
        this.startDate = '';
        this.endDate = '';
        this.location = '';
        this.description = '';
        this.id = self.crypto.randomUUID()
    }

    setProperty(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        } else {
            console.warn(`Property "${propertyName}" does not exist on ExperienceClass.`);
        }
    }
}