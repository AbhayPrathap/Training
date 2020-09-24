///PARALLEL EXECUTION
function fun1() {
    console.log("Function is called")
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve('F1')
            }, 1000)

        }
    )
}

function fun2() {
    console.log('Function 2 is called')
    return new Promise(
        resolve => {
            setTimeout(() => {
                resolve('F2'), 3000
            })
        }
    )
}

async function sequentialFun() {
    console.log('Started Sequential flow')
    const f1 = await fun1()
    console.log(f1)
    const f2 = await fun2()
    console.log(f2)

}
async function concurrent() {
    console.log('Started concurrent flow')
    const f1 = fun1()
    const f2 = fun2()
    console.log(await f2)
    console.log(await f1)
}
async function parallelexe() {
    console.log('Parallel execution strated')
    await Promise.all([fun1() , fun2()]).then(
        result=>{
            console.log(result[0])
            console.log(result[1])
        }
    )
}
// sequentialFun()
// concurrent()
// parallelexe()