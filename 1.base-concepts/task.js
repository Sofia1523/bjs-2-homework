"use strict";

// Функция для решения квадратного уравнения
function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c; // Вычисляем дискриминант
    if (d < 0) {
        return []; // Нет корней
    } else if (d === 0) {
        return [-b / (2 * a)]; // Один корень
    } else {
        return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]; // Два корня
    }
}

// Функция для расчета ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = percent / 100 / 12; // Преобразуем процент в доли
    let s = amount - contribution; // Определяем сумму кредита
    let payment = s * (p + (p / ((1 + p) ** countMonths - 1))); // Рассчитываем ежемесячный платеж
    let totalAmount = payment * countMonths; // Общая сумма выплаты
    return Number(totalAmount.toFixed(2)); // Округляем и возвращаем
}
