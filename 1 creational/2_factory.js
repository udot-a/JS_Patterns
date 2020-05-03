class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMemberShip,
        standard: StandardMemberShip,
        premium: PremiumMemberShip
    }

    create(name, type = "simple") {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name}(${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create("Dron", "premium"),
    factory.create("Vika", "standard"),
    factory.create("Sasha", "simple"),
    factory.create("VAsya")
];

members.forEach(m => {
   m.define();
});
