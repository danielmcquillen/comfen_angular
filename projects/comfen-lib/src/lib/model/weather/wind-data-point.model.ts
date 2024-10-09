export class WindDataPoint {
    public dir: number = 0;      // increments of 22.5: 0, 22.5, 45, ...
    public wedge0: number = 0;   // num hours at 0-10 mph or kph
    public wedge1: number = 0;   // num hours at 10-20 mph or kph
    public wedge2: number = 0;   // num hours at 20-30 mph or kph
    public wedge3: number = 0;   // num hours at 30-40 mph or kph
    public wedge4: number = 0;   // num hours at 40-50 mph or kph
    public wedge5: number = 0;   // num hours at 50+ mph or kph
  
    constructor(dir: number = 0) {
      this.dir = dir;
    }
  }