export default class educationDetailsClass {
    constructor() {
        this.school = '';
        this.degree = '';
        this.startDate = '';
        this.endDate = '';
        this.location = '';
        this.id = self.crypto.randomUUID()
    }

    setProperty(propertyName, value) {
        if (this.hasOwnProperty(propertyName)) {
            this[propertyName] = value;
        } else {
            console.warn(`Property "${propertyName}" does not exist on EducationClass.`);
        }
    }
}