// function PrintText(name, age)
// {
//     return "Hello my name is " +name+ " Age: " + age
// }
// let name1 = "Муся"
// let age1 = 15
// let res = (PrintText(name1, age1));
// console.log(res)
// let obj = {
//     "name":"Ivan",
//     "Age": 23,
//     hello()
//     {console.log("Меня зовут "+this.name)}
// }
// obj.hello()

// let arr = [30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0]
// arr.sort((a, b) => a - b)
// console.log(arr)

// arr.sort(function(a, b){
//    return a-b
// })
// console.log(arr)
// arr.sort()

// function fibonacci(count)
// {
//     let fib = []
//     for(let i=0; i<count; i++)
//     {
//         if(i==0) fib[i]=1;
//         else if(i==1) fib[i]=2;
//         else fib[i]= fib[i-2]+fib[i-1];
//     }
//     return fib;
// }
// let f = fibonacci(15);
// console.log(f)
// function factorial(n)
// {
// let fact = 1;
// if(n==0) return fact
// for(let i = 1; i<=n; i++)
//     {fact*=i}
// return fact
// }
// let a = factorial(0)
// console.log(a)
// let b = factorial(3)
// console.log(b)
// let c = factorial(5)
// console.log(c)
// function addAndMul(num)
//     {
//         num += "";
//         let add=0;
//         let mul=1
//         for(let i=0; i<num.length; i++)
//             {add+= +num[i]
//             mul*= num[i]
//             }
//             return  {
//                 "Сумма":add,
//                 "Произведение":mul
//             }
//     }
// console.log(addAndMul(1488))
// function reverse(number)
//     {
//         number+= "";
//         let reverseNumber = "";
//         for(let i=number.length-1; i>=0; i-- )
//         {reverseNumber+=number[i]}
//         return +reverseNumber;
//     }
// console.log(reverse(1488))
// function number(number)
//     {
//         number+= "";
//         let chet = 0
//         let nechet = 0
//         for(let i = 0; i<number.length; i++)
//         {
//             if (number[i] % 2 ==0) chet++;
//             else nechet++;
//         }
//         return {
//             "Чётные цифр ":chet,
//             "Нечётные цифр ": nechet
//         }
//     }
// console.log(number(1488))

function randomNumber()
{
    let number = Math.floor(Math.random()*100)
    for(let count=1; count<=10; count++)
    {
        let result = +prompt(`Попытка номер ${count}. Введите число:`)
        if (result == number)
        {
            return alert(`Вы угадали число. Число попыток: ${count}. Число: ${number}`)
        }
        else if(result<number) {
            alert(`Ваше число ${result} меньше загаданного. Число попыток: ${count}`)
        }
        else if(result>number) {
            alert(`Ваше число ${result} больше загаданного. Число попыток: ${count}`)
        }
        else {return alert(`Вы не угадали число. Число: ${number}`)}
    }
}
randomNumber()