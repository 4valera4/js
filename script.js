'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = +prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if ((typeof (a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null
                && a != '' & b !='' && a.length < 50) {
        
                appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ('Бюджет на 1 день составляет ' + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень заработка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень заработка');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений'),
                percent = +prompt('Под какой процент?');
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i <= 2; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = questionOptExpenses;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        if (typeof (items)== 'string' || (typeof (items) !=null) || items !='') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            i--;
        }
        appData.income.forEach (function (itemmasive, i) {
            alert('Способы дополнительного заработка: ' + (i+1) + '-' + itemmasive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}