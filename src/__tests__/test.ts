import { formatDate, getLastDayOfMonth } from "../part_5/11";
import { truncate, ucFirst } from "../part_5/3";
import { getMaxSubSum } from "../part_5/4";
import { camelize, filterRangeInPlace } from "../part_5/5";
import { Calculator } from "../part_5/5";

describe("capital 5", () => {
    it("usFirst", () => {
        expect(ucFirst('')).toBe('');
        expect(ucFirst('abc')).toBe('Abc');
        expect(ucFirst('ABC')).toBe('Abc');
    });

    it('truncate string', () => {
        expect(truncate('abcdef', 10)).toBe('abcdef')
        expect(truncate('abcdef', 3)).toBe('ab…')
    })

    it('maxSubSum', () => {
        expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
        expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
        expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
        expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
        expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
        expect(getMaxSubSum([1, 2, 3])).toBe(6); 
        expect(getMaxSubSum([-1, -2, -3])).toBe(0);
    })

    it('camelize', () => {
        expect(camelize("background-color")).toBe('backgroundColor');
        expect(camelize("list-style-image")).toBe('listStyleImage');
        expect(camelize("-webkit-transition")).toBe('WebkitTransition');
    });

    describe("filterRangeInPlace", function() {

        it("returns the filtered values", function() {
      
          let arr = [5, 3, 8, 1];
      
          filterRangeInPlace(arr, 2, 5); 
      
           expect(arr).toEqual([5, 3]);
        });
      
        it("doesn't return anything", function() {
          expect(filterRangeInPlace([1,2,3], 1, 4)).toBe(undefined); 
        });
      
      });

      describe("Calculator", function() {
        let calculator: any;
      
        beforeEach(function() {
            // @ts-ignore
            calculator = new Calculator();
        });
      
        it("calculate(12 + 34) = 46", function() {
          expect(calculator.calculate("12 + 34")).toBe(46);
        });
      
        it("calculate(34 - 12) = 22", function() {
          expect(calculator.calculate("34 - 12")).toBe(22);
        });
      
        it("add multiplication: calculate(2 * 3) = 6", function() {
          calculator.addMethod("*", (a: number, b: number) => a * b);
          expect(calculator.calculate("2 * 3")).toBe(6);
        });
      
        it("add power: calculate(2 ** 3) = 8", function() {
          calculator.addMethod("**", (a: number, b: number) => a ** b);
          expect(calculator.calculate("2 ** 3")).toBe(8);
        });
      });

      describe("getLastDayOfMonth", function() {
        it("последнее число 01.01.2012 - 31", function() {
          expect(getLastDayOfMonth(2012, 0)).toBe(31);
        });
      
        it("последнее число 01.02.2012 - 29 (високосный год)", function() {
          expect(getLastDayOfMonth(2012, 1)).toBe(29);
        });
      
        it("последнее число 01.02.2013 - 28", function() {
          expect(getLastDayOfMonth(2013, 1)).toBe(28);
        });
      });

      describe("formatDate", function() {
        it("отображает 1 мс назад как \"прямо сейчас\"", function() {
          expect(formatDate(new Date(+(new Date) - 1))).toBe('прямо сейчас');
        });
      
        it('"30 секунд назад"', function() {
          expect(formatDate(new Date(+(new Date) - 30 * 1000))).toBe("30 сек. назад");
        });
      
        it('"5 минут назад"', function() {
          expect(formatDate(new Date(+new Date - 5 * 60 * 1000))).toBe("5 мин. назад");
        });
      
        it("более поздние даты в виде DD.MM.YY HH:mm", function() {
          expect(formatDate(new Date(2014, 2, 1, 11, 22, 33))).toBe("01.03.14 11:22");
        });
      
      });
      
})

