class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const dron = new User("Andrey");
const vika = new User("Viktoria");
const igor = new User("IGORR");

const room = new ChatRoom();

room.register(dron);
room.register(vika);
room.register(igor);

dron.send("Hello!", vika);
vika.send("Good morning...", dron);
igor.send("FUCK OFF");
