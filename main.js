document.write('<h1>Константи</h1>');
document.write('Значення константи е = ', Math.E, '<br>');
document.write('Значення константи π = ', Math.PI, '<br>');
document.write('Десятковий логарифм постійної Ейлера (е) = ', Math.LOG10E, '<br>');
document.write('Двійковий логарифм постійної Ейлера (е) = ', Math.LOG2E, '<br>');
document.write('Натуральний логарифм числа 10 = ', Math.LN10, '<br>');
document.write('Натуральний логарифм числа 2 = ', Math.LN2, '<br>');
document.write('Корінь квадратний із двох = ', Math.SQRT2, '<br>');
document.write('Корінь квадратний з однієї другий = ', Math.SQRT1_2, '<br>');
document.write('<h1>Функції</h1>');
document.write('Результат зведення в ступінь: 4^2 = ', Math.pow(4, 2), '<br>');
document.write('Результат добування квадратного кореня з 4 = ', Math.pow(4, 1/2), '<br>');
document.write('Результат добування квадратного кореня з -9 = ', Math.pow(-9, 1/2), '<br>');
document.write('Результат обчислення абсолютного значення -9 = ', Math.abs(-9), '<br>');
document.write('Результат обчислення косинуса нуля радіан = ', Math.cos(0), '<br>');
document.write('Косинус 180 градусів (π радіан) = ', Math.cos(Math.PI), '<br>');
document.write('Результат обчислення арккосинуса нуля = ', Math.acos(0), '<br>');
document.write('Результат обчислення синуса нуля радіан = ', Math.sin(0), '<br>');
document.write('Синус 90 градусів (π /2 радіан) = ', Math.sin(Math.PI/2), '<br>');
document.write('Результат обчислення арксинуса одиниці = ', Math.asin(1), '<br>');
document.write('Тангенс 45 градусів (π /4 радіан) = ', Math.tan(Math.PI/4), '<br>');
document.write('Результат обчислення арктангенса одиниці = ', Math.atan(1), '<br>');
document.write('Результат зведення е в ступінь 2 = ', Math.exp(2), '<br>');
document.write('Натуральний логарифм від e^2 = ', Math.log(Math.exp(2)), '<br>');
document.write('Результат обчислення десяткового логарифма від числа 100 = ', Math.log10(100), '<br>');
document.write('Результат обчислення двійкового логарифма від числа 8 = ', Math.log2(8), '<br>');
document.write('Тангенс 45 градусів (з округленням) = ', Math.round(Math.tan(Math.PI/4)), '<br>');
document.write('Результат округлення числа 1,00123 у більшу сторону = ', Math.ceil(1.00123), '<br>');
document.write('Результат округлення числа -3.1234 у більшу сторону = ', Math.ceil(-3.1234), '<br>');
document.write('Результат округлення числа 1,00123 у меншу сторону = ', Math.floor(1.00123), '<br>');
document.write('Результат округлення числа -3.1234 у меншу сторону = ', Math.floor(-3.1234), '<br>');
document.write('Результат округлення числа 1,44 за правилами арифметики = ', Math.round(1.44), '<br>');
document.write('Результат округлення числа 1,54 за правилами арифметики = ', Math.round(1.54), '<br>');
document.write('Вибір найбільшого із двох чисел 4 й 2 = ', Math.max(4, 2), '<br>');
document.write('Вибір найменшого із двох чисел 4 й 2 = ', Math.min(4, 2), '<br>');
document.write('<h1>Генератор випадкових чисел</h1>');
document.write('Формування випадкових чисел в інтервалі [0;1] = ', Math.random(), '<br>');