export class Validation {
    // RegEx ze strony https://emailregex.com/
    emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


    public verifyEmail(email: string) {
        if(email.match(this.emailRegex)) {
            return true;
        }
        return false;
    }

    public verifyName(name: string) {
        if (name.length < 2) {
            return false;
        }
        return true
    }

    public verifyMessage(message: string) {
        if (message.length < 10) {
            return false;
        }
        return true;
    }

    public verifySubject(subject: string) {
        if (subject.length < 3) {
            return false;
        }
        return true;
    }

    
}