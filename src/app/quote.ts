// export class Quote {
//     id: number;
//     name: string;
//     description: string;
// }
export class Quote {
   public showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public completeDate: Date ){
      this.showDescription = false;
    }
}
