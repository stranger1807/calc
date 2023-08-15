const themeBtn = document.querySelector('#theme-btn')
const themeBtnImg = document.querySelector('#theme-btn img')
const htmlTag = document.documentElement


console.log(themeBtnImg);

themeBtn.addEventListener('click', () => {
    if (htmlTag.getAttribute('data-theme') == 'dark') {
        htmlTag.setAttribute('data-theme', 'light')
        themeBtnImg.setAttribute('src', './images/dark-theme-btn.svg')

    } else {
        htmlTag.setAttribute('data-theme', 'dark')
        themeBtnImg.setAttribute('src', './images/light-theme.btn.svg')

    }
})

// calc 

let a = '' // First Number = Birinchi son
let b = '' // Second Number = Ikkinchi son
let sign = '' // Math operator = Matematik Operator
let finish = false // 
let str = ''
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', '*', '/']

function allClear() {
    a = ''
    b = ''
    sign = ''
    str = ''
    finish = false
    screenResult.innerHTML = ''
    count.innerHTML = ''
}



const screenResult = document.querySelector('.result')
const calcBtns = document.querySelector('.calc__buttons')
const clearBtn = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')
const count = document.querySelector('.count')

clearBtn.addEventListener('click', () => allClear())


calcBtns.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return
    if (event.target.classList.contains('ac')) return
    if (event.target.classList.contains('backspace')) return
    screenResult.innerHTML = ''
    const key = event.target.innerHTML

    str += key
    count.innerHTML = str

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            screenResult.innerHTML = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            screenResult.innerHTML = b
        } else {
            b += key
            screenResult.innerHTML = b
        }
        return
    }
    if (action.includes(key)) {
        sign = key
        screenResult.innerHTML = sign
        return
    }

    if (key == '=') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = (+a) - (+b)
                break;
            case '*':
                a = (+a) * (+b)
                break;
            case '/':
                if (b === '0') {
                    screenResult.innerHTML = 'Хато'
                    a = ''
                    b = ''
                    sign = ''
                    return
                }
                a = (+a) / (+b)
                break;
        }
        finish = true
        screenResult.innerHTML = a
    }

})