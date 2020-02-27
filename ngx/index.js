import { __decorate, __extends } from "tslib";
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
export var RecognizerResultState;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(RecognizerResultState || (RecognizerResultState = {}));
var BlinkCard = /** @class */ (function (_super) {
    __extends(BlinkCard, _super);
    function BlinkCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkCard.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkCard.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkCard.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkCard.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkCard.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkCard.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    BlinkCard.pluginName = "BlinkCard";
    BlinkCard.plugin = "blinkcard-cordova";
    BlinkCard.pluginRef = "cordova.plugins.BlinkCard";
    BlinkCard.repo = "https://github.com/cuddlemeister/blinkcard-cordova";
    BlinkCard.install = "ionic cordova plugin add blinkcard-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkCard.platforms = ["iOS", "Android"];
    BlinkCard = __decorate([
        Injectable()
    ], BlinkCard);
    return BlinkCard;
}(IonicNativePlugin));
export { BlinkCard };