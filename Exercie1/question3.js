
    async function fonctionAsync()
    {
        console.log('A');
        await call1();
        console.log('G');
    }
    async function call1()
    {
        console.log('B');
        await call2();
        console.log('F');
    }
    async function call2()
    {
        console.log('C');
        await call3();
        console.log('E');
    }
    async function call3()
    {
        console.log('D');
    }
fonctionAsync();