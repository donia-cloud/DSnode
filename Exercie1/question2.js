const callPromise = 
    new Promise((resolve, reject) =>{
        resolve('question 2 version promise');
    })
        .then(() => {
            console.log('A');
        })
        .then(() => {
                console.log('B');
        })
        .then(() => {
                console.log('C');
        })
        .then(() => {
                console.log('D');
        })
        .then(() => {
                console.log('E');
        })
        .then(() => {
                console.log('F');
        })
        .then(() => {
                console.log('G');
        });