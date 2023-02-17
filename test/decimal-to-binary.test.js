import { decimalToBinary } from '../src/decimal-to-binary';

test('Should convert decimal number to binary', () => {
  expect(decimalToBinary(1)).toEqual('1');
  expect(decimalToBinary(2)).toEqual('10');
  expect(decimalToBinary(10)).toEqual('1010');
  expect(decimalToBinary(122)).toEqual('1111010');
});
