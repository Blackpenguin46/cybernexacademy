"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var supabase_js_1 = require("@supabase/supabase-js");
var axios_1 = require("axios");
var dotenv = require("dotenv");
console.log("✅ Script started...");
// Load environment variables
dotenv.config();
var supabaseUrl = process.env.NEXT_SUPABASE_URL;
var supabaseKey = process.env.SUPABASE_SERVICE_KEY;
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase credentials in .env file");
    process.exit(1);
}
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
console.log("🔑 Supabase client initialized");
function checkAllLinks() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, links, error, _i, links_1, link, url, status_1, last_status_code, last_error_message, response, err_1, updatePayload, updateError;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log("🚀 Starting link checks...");
                    return [4 /*yield*/, supabase.from('monitored_links').select('*')];
                case 1:
                    _c = _d.sent(), links = _c.data, error = _c.error;
                    if (error) {
                        console.error("❌ Error fetching links:", error.message);
                        return [2 /*return*/];
                    }
                    if (!links || links.length === 0) {
                        console.warn("⚠️ No links found in the table.");
                        return [2 /*return*/];
                    }
                    console.log("\uD83D\uDD17 Found ".concat(links.length, " links. Beginning checks...\n"));
                    _i = 0, links_1 = links;
                    _d.label = 2;
                case 2:
                    if (!(_i < links_1.length)) return [3 /*break*/, 10];
                    link = links_1[_i];
                    url = link.url;
                    if (!url || typeof url !== 'string' || !url.startsWith('http')) {
                        console.warn("\u26A0\uFE0F Skipping invalid URL for ID ".concat(link.id));
                        return [3 /*break*/, 9];
                    }
                    console.log("\u27A1\uFE0F Checking: ".concat(url));
                    status_1 = 'broken';
                    last_status_code = null;
                    last_error_message = null;
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, axios_1.default.get(url, {
                            timeout: 15000,
                            validateStatus: function (status) { return status < 500; },
                            headers: {
                                'User-Agent': 'CyberNexLinkChecker/1.0 (+https://www.cybernexacademy.com)'
                            }
                        })];
                case 4:
                    response = _d.sent();
                    status_1 = 'working';
                    last_status_code = response.status;
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _d.sent();
                    if (axios_1.default.isAxiosError(err_1)) {
                        last_status_code = (_b = (_a = err_1.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : -1;
                        last_error_message = err_1.message;
                        if (err_1.response) {
                            last_error_message += " - ".concat(JSON.stringify(err_1.response.data)).substring(0, 200);
                        }
                        else if (err_1.request) {
                            last_error_message += ' - No response received';
                        }
                        else {
                            last_error_message += ' - Request setup failed';
                        }
                    }
                    else {
                        last_status_code = -2;
                        last_error_message = String(err_1);
                    }
                    if (last_error_message && last_error_message.length > 500) {
                        last_error_message = last_error_message.substring(0, 497) + '...';
                    }
                    return [3 /*break*/, 6];
                case 6:
                    updatePayload = __assign({ status: status_1, last_status_code: last_status_code, last_checked_at: new Date().toISOString(), updated_at: new Date().toISOString() }, (status_1 === 'broken' && { last_error_message: last_error_message }));
                    return [4 /*yield*/, supabase
                            .from('monitored_links')
                            .update(updatePayload)
                            .eq('id', link.id)];
                case 7:
                    updateError = (_d.sent()).error;
                    if (updateError) {
                        console.error("\u274C Failed to update ".concat(url, " (ID ").concat(link.id, "):"), updateError.message);
                    }
                    else {
                        console.log("\u2705 Updated ".concat(url, " (ID ").concat(link.id, "): ").concat(status_1, " (").concat(last_status_code, ")"));
                    }
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                case 8:
                    _d.sent(); // Avoid rate limits
                    _d.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 2];
                case 10:
                    console.log("\n🏁 Link checking complete.");
                    return [2 /*return*/];
            }
        });
    });
}
checkAllLinks()
    .then(function () { return console.log("🎯 Script completed successfully"); })
    .catch(function (err) { return console.error("🔥 Fatal error during execution:", err); });
