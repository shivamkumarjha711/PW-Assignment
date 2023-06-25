class User {
    constructor (username, password) {
        this.username = username;
        this.password = password;
    }

    getter() {
        return this.password.replace(/./g, "*");
    }

    setter(newPassword) {
        if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            return newPassword.replace(/./g, "*");
        }else{
            return 'Password must be at least 8 characters long and contains at least one number and one uppercase letter';
        }
        
    }
}

let user = new User('Satyam', 'abc123hjh')

console.log(user.getter());
console.log(user.setter('vf11db'));
console.log(user.setter('vf1gfdAjnfg1db'));