import { IonicNativePlugin } from '@ionic-native/core';
export interface Licenses {
    ios: string;
    android: string;
}
export declare enum RecognizerResultState {
    empty = 1,
    uncertain = 2,
    valid = 3
}
export interface ImageExtensionFactors {
    upFactor: number;
    rightFactor: number;
    downFactor: number;
    leftFactor: number;
}
export interface Date {
    day: string;
    month: string;
    year: string;
}
export interface OverlaySettings {
    overlaySettingsType: string;
}
export interface BlinkCardOverlaySettings extends OverlaySettings {
    glareMessage: string;
}
export interface BlinkCardOverlaySettingsCtor {
    new (): BlinkCardOverlaySettings;
}
export interface RecognizerResult {
    resultState: RecognizerResultState;
}
export interface RecognizerResultCtor<T extends RecognizerResult> {
    new (nativeResult: any): T;
}
export interface Recognizer<T extends RecognizerResult = any> {
    recognizerType: string;
    result: T;
    createResultFromNative(nativeResult: any): T;
}
export interface RecognizerCtor<T extends Recognizer> {
    new (): T;
}
export interface RecognizerCollection {
    recognizerArray: Recognizer[];
    allowMultipleResults: boolean;
    milisecondsBeforeTimeout: number;
}
export interface RecognizerCollectionCtor {
    new (recognizerCollection: Recognizer[]): RecognizerCollection;
}
export interface BlinkCardRecognizerResult extends RecognizerResult {
    cardNumber: string;
    cvv: string;
    digitalSignature: string;
    digitalSignatureVersion: string;
    documentDataMatch: string;
    fullDocumentBackImage: string;
    fullDocumentFrontImage: string;
    inventoryNumber: string;
    issuer: string;
    owner: string;
    scanningFirstSideDone: boolean;
    validThru: Date;
}
export interface BlinkCardRecognizerResultCtor extends RecognizerResultCtor<BlinkCardRecognizerResult> {
}
export interface BlinkCardRecognizer extends Recognizer<BlinkCardRecognizerResult> {
    anonymizeCardNumber: boolean;
    anonymizeCvv: boolean;
    anonymizeOwner: boolean;
    detectGlare: boolean;
    extractCvv: boolean;
    extractInventoryNumber: boolean;
    extractOwner: boolean;
    extractValidThru: boolean;
    fullDocumentImageDpi: number;
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    returnFullDocumentImage: boolean;
    signResult: boolean;
}
export interface BlinkCardRecognizerCtor extends RecognizerCtor<BlinkCardRecognizer> {
}
/**
 * @name BlinkCard
 * @description
 * Microblink SDK wrapper for barcode and document scanning. See the
 * blinkcard-cordova repository for available recognizers and other settings
 *
 * @usage
 * ```typescript
 * import { BlinkCard, RecognizerResultState } from 'blinkcard-ionic-native/ngx';
 *
 * constructor(private blinkCard: BlinkCard) { }
 *
 * const overlaySettings = new this.blinkCard.BlinkCardOverlaySettings();
 * const recognizer = new this.blinkCard.BlinkCardRecognizer();
 * recognizer.returnFullDocumentImage = false;
 * recognizer.detectGlare = true;
 * recognizer.extractCvv = true;
 * recognizer.extractValidThru = true;
 * recognizer.extractOwner = true;
 *
 * const recognizerCollection = new this.blinkCard.RecognizerCollection([recognizer]);
 * const canceled = await this.blinkCard.scanWithCamera(
 *   overlaySettings,
 *   recognizerCollection,
 *   {
 *     ios: '', //iOS License Key
 *     android: '' //Android License Key
 *   },
 * );
 *
 * if (!canceled) {
 *   if (recognizer.result.resultState === RecognizerResultState.valid) {
 *     const results = recognizer.result;
 *
 *     if (results.resultState === RecognizerResultState.valid) {
 *       const ccInfo = {
 *         cardNumber: Number(results.cardNumber),
 *         expirationMonth: Number(results.validThru.month),
 *         expirationYear: Number(results.validThru.year),
 *         cvv: Number(results.cvv)
 *       };
 *     }
 *   }
 * ```
 */
export declare class BlinkCardOriginal extends IonicNativePlugin {
    /**
     * Opens the camera dialog and attempts to scan a barcode/document
     * @param overlaySettings {OverlaySettings} for camera overlay customization
     * @param recognizerCollection {RecognizerCollection} collection of recognizers to scan with
     * @returns {Promise<boolean>}
     */
    scanWithCamera(overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, licenses: Licenses): Promise<boolean>;
    BlinkCardOverlaySettings: BlinkCardOverlaySettingsCtor;
    RecognizerCollection: RecognizerCollectionCtor;
    BlinkCardRecognizer: BlinkCardRecognizerCtor;
}

export declare const BlinkCard: BlinkCardOriginal;