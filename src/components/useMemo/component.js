// memo different compnent 
import  {memo} from 'react';

// the main aim of memo is to control irrevenent calling of function.



const expensiveFunction = memo(() => {
    console.log(" ExpensiveFunction redering");
    let total = 0;
    for (let i = 1; i < 100000000000; i++) {
        total = total + i;
    }
    return <div>ExpensiveFunction</div>;
});

export default expensiveFunction;