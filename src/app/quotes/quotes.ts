export class Quotes {
   additionalInfo:boolean;
   constructor(public id:number, public author:string, public actQuote:string, public upVote:number,
       public downVote:number){
         this.additionalInfo=false;
       }
}
