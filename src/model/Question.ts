export class Question{
    constructor(public Id:number,
        public Question1:string ,
        public CorrectAnswerId:number,
        public Image:string,
        public Status:number,
        public Level:number,
        public UserId:number,
        public Points:number ){
        
    }
    
}
