//find

let transactions =[1000,200,9000,-899,-90,88];

let firstWithdrawl = transactions.find((n)=>{return n<0 }
);
console.log(firstWithdrawl);

//findIndex

let firstWithdrawlIdx = transactions.findIndex((n)=>{return n<0 }
);
console.log(firstWithdrawlIdx);
