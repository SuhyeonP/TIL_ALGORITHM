
class Singleton {
    static instance;
    skin: any;
    constructor(data) {
        this.skin = data;
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    set joySkin(data: any) {
        this.skin = data;
    }

    get joySkin() {
        return this.skin;
    }
}

const base1 = new Singleton('base1');
const base2 = new Singleton('base2');

console.log(base1.joySkin) // base1
console.log(base2.joySkin) // base1

base2.joySkin = 'base2';

console.log(base1.joySkin) // base2
console.log(base2.joySkin) // base2

class SingletonJoy {
    private static instance: SingletonJoy;
    private skin: string;
    // private 로 생성자를 해야함
    private constructor(data: string) {
        this.skin = data;
    }

    public static getInstance(): SingletonJoy {
        if(!SingletonJoy.instance) {
            // 처음엔 아무것도 없어야하므로 (스킨을 설정하지 않으면 기본스킨이니까)
            SingletonJoy.instance = new SingletonJoy('basic');
        }
        return SingletonJoy.instance;
    }

    set joySkin (data: string) {
        this.skin = data;
    }

    get joySkin () {
        return this.skin;
    }
}

const joy = SingletonJoy.getInstance();
joy.joySkin = 'EDG';
const joy2 = SingletonJoy.getInstance();
joy2.joySkin // EDG


joy2.joySkin = 'prestige';

joy.joySkin // 'presitge
