export class Quotes {
   splice(index: any) {
     throw new Error("Method not implemented.");
   }
   additionalInfo:boolean;
   constructor(public id:number, public author:string, public actQuote:string, public upVote:number,
       public downVote:number, public timePosted:Date){
         this.additionalInfo=false;
       }
}
