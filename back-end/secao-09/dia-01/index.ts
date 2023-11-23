class Brand {
    private brand: string;
    private size: number;
    private resolution: number;
    private connections: string[];
    private connectedTo?: string;
    
    constructor(b: string, s: number, r: number, c: string[]) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }

    turnOn() {
        console.log(this.brand, this.size, this.resolution, this.connections)
    }

    get _connectedTo(): string | undefined {
        return this.connectedTo
    }

    set _connectedTo(c: string) {
        if(this.connections.includes(c)) {
            this.connectedTo = c
        } else {
            console.log('sorry')
        }
    }
}

const novaMarca = new Brand('Marca Foda', 24, 1920, ['HDMI', 'USB'])

novaMarca.turnOn();
novaMarca._connectedTo = 'HDMI'