import { NativeModules } from 'react-native';

type NativeNumberGeneratorType = {
  multiply(a: number, b: number): Promise<number>;
};

const { NativeNumberGenerator } = NativeModules;

export default NativeNumberGenerator as NativeNumberGeneratorType;
