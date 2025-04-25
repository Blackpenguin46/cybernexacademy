"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
console.log("✅ Script started...");
// Load environment variables
dotenv.config();
const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Missing Supabase credentials in .env file.");
    process.exit(1);
}
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
console.log("🔑 Supabase client initialized");
async function checkAllLinks() {
    var _a, _b;
    console.log("🚀 Starting link check...");
    const { data: links, error } = await supabase.from('monitored_links').select('*');
    if (error) {
        console.error("❌ Error fetching links from Supabase:", error.message);
        return;
    }
    if (!links || links.length === 0) {
        console.warn("⚠️ No links found in 'monitored_links'.");
        return;
    }
    console.log(`🔗 Found ${links.length} links to check.\n`);
    for (const link of links) {
        const url = link.url;
        if (!url || typeof url !== 'string' || !url.startsWith('http')) {
            console.warn(`⚠️ Skipping invalid or missing URL for ID ${link.id}`);
            continue;
        }
        console.log(`➡️ Checking: ${url}`);
        let status = 'broken';
        let last_status_code = null;
        let last_error_message = null;
        try {
            const response = await axios_1.default.get(url, {
                timeout: 15000,
                validateStatus: status => status < 500,
                headers: {
                    'User-Agent': 'CyberNexLinkChecker/1.0 (+https://www.cybernexacademy.com)'
                }
            });
            status = 'working';
            last_status_code = response.status;
        }
        catch (err) {
            status = 'broken';
            if (axios_1.default.isAxiosError(err)) {
                last_status_code = (_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : -1;
                last_error_message = err.message;
                if (err.response) {
                    last_error_message += ` - ${JSON.stringify(err.response.data)}`.substring(0, 200);
                }
                else if (err.request) {
                    last_error_message += ' - No response received';
                }
                else {
                    last_error_message += ' - Request setup failed';
                }
            }
            else {
                last_status_code = -2;
                last_error_message = String(err);
            }
            if (last_error_message.length > 500) {
                last_error_message = last_error_message.substring(0, 497) + '...';
            }
        }
        // Failsafe: Enforce valid values only
        if (status !== 'working' && status !== 'broken') {
            console.warn(`⚠️ Invalid status generated. Defaulting to 'broken'`);
            status = 'broken';
        }
        const updatePayload = {
            status,
            last_status_code,
            last_checked_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };
        if (status === 'broken') {
            updatePayload.last_error_message = last_error_message !== null && last_error_message !== void 0 ? last_error_message : 'Unknown error';
        }
        const { error: updateError } = await supabase
            .from('monitored_links')
            .update(updatePayload)
            .eq('id', link.id);
        if (updateError) {
            console.error(`❌ Failed to update ${url} (ID ${link.id}): ${updateError.message}`);
        }
        else {
            console.log(`✅ Updated ${url} (ID ${link.id}): ${status} (${last_status_code})`);
        }
        // Pause between requests to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log("\n🏁 Finished checking all links.");
}
checkAllLinks()
    .then(() => console.log("🎯 Script completed successfully"))
    .catch(err => console.error("🔥 Fatal error during execution:", err));
