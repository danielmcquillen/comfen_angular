// conversions.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConversionsService {
    constructor() { }

    // SI Units
    static readonly UNITS_METERS: string = "m";
    static readonly UNITS_CENTIMETERS: string = "cm";
    static readonly UNITS_MILLIMETERS: string = "mm";

    // Imperial Units
    static readonly UNITS_FEET: string = "ft";
    static readonly UNITS_INCHES: string = "in";

    static readonly M3_PER_MJ: number = 0.0268;

    // Conversion functions
    static celciusToFahr(value: number): number {
        return (1.8 * value) + 32;
    }

    static fahrToCelcius(value: number): number {
        return 0.555555556 * (value - 32);
    }

    static metersToFeet(value: number): number {
        return value * 3.2808399;
    }

    static feetToMeters(value: number): number {
        return value * 0.3048;
    }

    static metersToInches(value: number): number {
        return value * 39.3700787;
    }

    static inchesToMeters(value: number): number {
        return value * 0.0254;
    }

    static costPerSqFtToCostPerSqM(value: number): number {
        return value * 10.7639104;
    }

    static costPerSqMToCostPerSqFt(value: number): number {
        return value / 10.7639104;
    }

    static costPerKWHToCostPerMJoule(value: number): number {
        return value / 3.6;
    }

    static costPerMJouleToCostPerKWH(value: number): number {
        return value * 3.6;
    }

    static costPerM3ToCostPerTherm(value: number): number {
        return value / 0.361975333;
    }

    static costPerThermToCostPerM3(value: number): number {
        return value * 0.361975333;
    }

    static costPerM3ToCostPerThousandFt3(value: number): number {
        return value * 28.32;
    }

    static costPerThousandFt3ToCostPerM3(value: number): number {
        return value / 28.32;
    }

    static costPerTonToCostPerKW(value: number): number {
        return value / 3.517;
    }

    static costPerKWToCostPerTon(value: number): number {
        return value * 3.517;
    }

    static costPerTonToCostPerKBTU(value: number): number {
        return value / 12;
    }

    static costPerKBTUToCostPerTon(value: number): number {
        return value * 12;
    }

    static costPerKBTUHRToCostPerKW(value: number): number {
        return value / 0.2930711;
    }

    static costPerKWToCostPerKBTUHR(value: number): number {
        return value * 0.2930711;
    }

    static wattsSqFtToWattsSqM(value: number): number {
        return value / 0.09290304;
    }

    static wattsSqMToWattsSqF(value: number): number {
        return value / 10.7639104;
    }

    static squareFeetToSquareMeters(value: number): number {
        return value * 0.09290304;
    }

    static squareMetersToSquareFeet(value: number): number {
        return value * 10.7639104;
    }

    static inchesToCentimeters(value: number): number {
        return 2.54 * value;
    }

    static inchesToMillimeters(value: number): number {
        return 25.4 * value;
    }

    static inchesToFeet(value: number): number {
        return value * 0.0833333333;
    }

    static centimetersToInches(value: number): number {
        return value * 0.393700787;
    }

    static millimetersToInches(value: number): number {
        return value * 0.0393700787;
    }

    static millimetersToMeters(value: number): number {
        return value / 1000;
    }

    static metersToMillimeters(value: number): number {
        return value * 1000;
    }

    static millimetersToFeet(value: number): number {
        return value * 0.0032808399;
    }

    static centimetersToFeet(value: number): number {
        return value * 0.032808399;
    }

    static centimetersToMeters(value: number): number {
        return value / 100;
    }

    static metersToCentimeters(value: number): number {
        return value * 100;
    }

    static joulesToBTU(value: number): number {
        return value * 0.000948;
    }

    static BTUToJoules(value: number): number {
        return value / 0.000948;
    }

    static joulesToKBTU(value: number): number {
        return value * 0.000000948;
    }

    static kBTUtoJoules(value: number): number {
        return value / 0.000000948;
    }

    static joulesToKWH(value: number): number {
        return value * 0.000000278;
    }

    static kWHToJoules(value: number): number {
        return value / 0.000000278;
    }

    static megaJoulesToKBTU(value: number): number {
        return value * 0.947867299;
    }

    static megaJoulesPerSqMeterToKBTUPerSqFt(value: number): number {
        value = ConversionsService.megaJoulesToKBTU(value); // convert from MJ/m2 to kBtu/m2
        value = value / 10.7639104; // convert from kBtu/m2 to kBtu/ft2
        return value;
    }

    static joulesToMegaJoules(value: number): number {
        return value / 1000000;
    }

    static megaJoulesToJoules(value: number): number {
        return value * 1000000;
    }

    static lbPerSqFtToKgPerSqM(value: number): number {
        return value * 4.88242764;
    }

    static KgPerSqMToLbPerSqFt(value: number): number {
        return value * 0.204816144;
    }

    static KgPerMSecToLbPerFtSec(value: number): number {
        return value * 6719689497;
    }

    static LbPerFtSecToKgPerMSec(value: number): number {
        return value / 6719689497;
    }

    static KgPerMSecKelToLbPerFtSecFahr(value: number): number {
        return value * 3733161272;
    }

    static LbPerFtSecFahrToKgPerMSecKel(value: number): number {
        return value / 3733161272;
    }

    static KgPerMSecKelSqToLbPerFtSecFahrSq(value: number): number {
        return value * 2073978650;
    }

    static LbPerFtSecFahrSqToKgPerMSecKelSq(value: number): number {
        return value / 2073978650;
    }

    static joulesPerKgKelToBtuPerLbF(value: number): number {
        return value * 0.0002388459;
    }

    static BtuPerLbFToJoulesPerKgKel(value: number): number {
        return value / 0.0002388459;
    }

    static joulesPerKgKelSqToBtuPerLbFSq(value: number): number {
        return value * 0.0001326922;
    }

    static BtuPerLbFSqToJoulesPerKgKelSq(value: number): number {
        return value / 0.0001326922;
    }

    static joulesPerKgKelCubedToBtuPerLbFCubed(value: number): number {
        return value * 0.0000737179;
    }

    static BtuPerLbFCubedToJoulesPerKgKelCubed(value: number): number {
        return value / 0.0000737179;
    }

    static JoulesToWattHours(value: number): number {
        return value * 0.00027777778;
    }

    static WattsPerCelToBtuPerHourF(value: number): number {
        return value * 1.89563424;
    }

    static BtuPerHourFToWattsPerCel(value: number): number {
        return value / 1.89563424;
    }

    static WattsPerMCelToBtuPerHourFtFahr(value: number): number {
        return value * 0.578;
    }

    static BtuPerHourFtFahrToWattsPerMCel(value: number): number {
        return value / 0.578;
    }

    static WattsPerSqMCelToBtuPerHourSqFtFahr(value: number): number {
        return value * 0.17611;
    }

    static BtuPerHourSqFtFahrToWattsPerSqMCel(value: number): number {
        return value / 0.17611;
    }

    static lbPerFootCubedToKgPerMeterCubed(value: number): number {
        return value * 16.01846;
    }

    static kgPerMeterCubedToLbPerFootCubed(value: number): number {
        return value / 16.01846;
    }

    static btuPerLbFahrToKJPerKgCel(value: number): number {
        return value * 4.1868;
    }

    static KJPerKgCelToBtuPerLbFahr(value: number): number {
        return value / 4.1868;
    }

    static WattsToBtuPerHour(value: number): number {
        return value * 3.412;
    }

    static BtuPerHourToWatts(value: number): number {
        return value / 3.412;
    }

    static WattsPerSqMToBtuPerSqFtHour(value: number): number {
        return value * 0.316957210776545;
    }

    static BtuPerHourSqFtToWattsPerSqM(value: number): number {
        return value / 0.316957210776545;
    }

    static kWTokBtuPerHr(value: number): number {
        return value * 3.41214129;
    }

    static kBtuPerHrToKW(value: number): number {
        return value / 3.41214129;
    }

    static kWToTon(value: number): number {
        return value * 0.284333239;
    }

    static tonToKW(value: number): number {
        return value / 0.284333239;
    }

    static WattsPerMCelCubedToBtuPerHourFtFahrCubed(value: number): number {
        return value * 0.1783300539;
    }

    static BtuPerHourFtFahrCubedToWattsPerMCelCubed(value: number): number {
        return value / 0.1783300539;
    }

    static MetricRValueToIPRValue(value: number): number {
        return value / 0.17611;
    }

    static IPRValueToMetricRValue(value: number): number {
        return value * 0.17611;
    }

    static metersPerSecondToKPH(value: number): number {
        return value * 3.6;
    }

    static metersPerSecondToMPH(value: number): number {
        return value * 2.24;
    }

    static fangerPPDToPPS(value: number): number {
        return 100 - value;
    }

    static kgPerKWHTolbPerKWH(value: number): number {
        return value / 0.45359237;
    }

    static lbPerKWHTokgPerKWH(value: number): number {
        return value * 0.45359237;
    }

    static kgPerMJTolbPerKBTU(value: number): number {
        return value / 2.3258;
    }

    static lbPerKBTUTokgPerMJ(value: number): number {
        return value * 2.3258;
    }

    static roundToDecimals(value: number, numDecimals: number): number {
        if (numDecimals < 1) return Math.round(value);
        const f: number = Math.pow(10, numDecimals);
        value = value * f;
        value = Math.round(value);
        value = value / f;
        return value;
    }

    static luxToFootcandles(value: number): number {
        return value * 0.092902267; // value from E+ Input Output Docs
    }

    static footcandlesToLux(value: number): number {
        return value / 0.092902267; // value from E+ Input Output Docs
    }

    static cubicMeterToMJ(value: number): number {
        return value * 37.3134328;
    }

    static normalizeDecimalPlaceString(displayValue: string, numberOfDecimals: number = 2): string {
        let zerosToAdd: number = 0;
        if (displayValue.indexOf(".") !== -1) {
            const decimals: string = displayValue.split(".")[1];
            if (decimals.length < numberOfDecimals) {
                zerosToAdd = numberOfDecimals - decimals.length;
            }
        } else {
            if (numberOfDecimals > 0) displayValue += ".";
            zerosToAdd = numberOfDecimals;
        }
        for (let i: number = 0; i < zerosToAdd; i++) {
            displayValue += "0";
        }
        return displayValue;
    }

    static m3PerSecondPerPersonToCFMPerPerson(value: number): number {
        return value * 2119;
    }

    static CFMPerPersonToM3PerSecondPerPerson(value: number): number {
        return value / 2119;
    }

    static m3PerSecondM2ToCFMPerFt2(value: number): number {
        return value * 196.85;
    }

    static CFMPerFt2ToM3PerSecondM2(value: number): number {
        return value / 196.85;
    }
}