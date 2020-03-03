# BlinkId

```
$ ionic cordova plugin add blinkcard-cordova --variable CAMERA_USAGE_DESCRIPTION="Enable your camera so that you can scan your ID to validate your account"
$ npm install blinkcard-ionic-native
```

## Usage Documentation

Plugin Repo: [https://github.com/cuddlemeister/blinkcard-cordova](https://github.com/cuddlemeister/blinkcard-cordova)

Microblink SDK wrapper for barcode and document scanning. See the
blinkid-phonegap repository for available recognizers and other settings

## Usage Example

```typescript
import { BlinkCard, RecognizerResultState } from 'blinkcard-ionic-native/ngx';

constructor(private blinkCard: BlinkCard) { }

const overlaySettings = new this.blinkCard.BlinkCardOverlaySettings();
const recognizer = new this.blinkCard.BlinkCardRecognizer();
recognizer.returnFullDocumentImage = false;
recognizer.detectGlare = true;
recognizer.extractCvv = true;
recognizer.extractValidThru = true;
recognizer.extractOwner = true;
const recognizerCollection = new this.blinkCard.RecognizerCollection([recognizer]);
const canceled = await this.blinkCard.scanWithCamera(
  overlaySettings,
  recognizerCollection,
  {
    ios: '', //iOS License Key
    android: '' //Android License Key
  },
);
if (!canceled) {
  if (recognizer.result.resultState === RecognizerResultState.valid) {
    const results = recognizer.result;
    if (results.resultState === RecognizerResultState.valid) {
      const ccInfo = {
        cardNumber: Number(results.cardNumber),
        expirationMonth: Number(results.validThru.month),
        expirationYear: Number(results.validThru.year),
        cvv: Number(results.cvv)
      };
    }
  }
}
```

## Supported platforms
- iOS
- Android
