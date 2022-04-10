class SingletonJoy {
    private static instance: SingletonJoy;
    skin: string;
    // private 로 생성자를 해야함
    private constructor(data: string) {
        this.skin = data;
    }

    public static getInstance(): SingletonJoy {
        if(!SingletonJoy.instance) {
            SingletonJoy.instance = new SingletonJoy('basic');
        }
        return SingletonJoy.instance;
    }

    set joySkin (data: string) {
        this.skin = data;
    }
}

const joy = SingletonJoy.getInstance();

console.log(joy.skin)
