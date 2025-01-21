// Elder Futhark Runes
const ELDER_FUTHARK = {
    'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ',
    'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'j': 'ᛃ',
    'k': 'ᚲ', 'l': 'ᛚ', 'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ',
    'p': 'ᛈ', 'q': 'ᚲᚹ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ', 'y': 'ᚤ',
    'z': 'ᛉ', 'th': 'ᚦ', 'ng': 'ᛜ', 'ae': 'ᚨᛖ', 'oe': 'ᛟᛖ'
};

// Bubble Text
const BUBBLE_CHARS = {
    'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ',
    'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
    'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ',
    'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
    'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ',
    'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ',
    'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ',
    'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
    'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ',
    'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ',
    'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②',
    '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦',
    '8': '⑧', '9': '⑨'
};

// Fullwidth Text
const FULLWIDTH_OFFSET = 0xFEE0;

// Medieval Text
const MEDIEVAL = {
    'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈',
    'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
    'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒',
    'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
    'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜',
    'Z': 'ℨ'
};

// Small Caps
const SMALL_CAPS = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ',
    'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
    'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ',
    'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ',
    'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ',
    'z': 'ᴢ'
};

// Mirror Text
const MIRROR = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ',
    'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
    'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o',
    'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
    'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ',
    'z': 'z'
};

// Transformation Functions
function elderFuthark(text) {
    let result = '';
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (i < text.length - 1) {
            let pair = text[i] + text[i + 1];
            if (ELDER_FUTHARK[pair]) {
                result += ELDER_FUTHARK[pair];
                i++;
                continue;
            }
        }
        result += ELDER_FUTHARK[text[i]] || text[i];
    }
    return result;
}

function bubbleText(text) {
    return text.split('').map(char => BUBBLE_CHARS[char] || char).join('');
}

function fullwidth(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        return code >= 33 && code <= 126 ? 
            String.fromCharCode(code + FULLWIDTH_OFFSET) : char;
    }).join('');
}

function medieval(text) {
    return text.split('').map(char => {
        if (char >= 'A' && char <= 'Z') return MEDIEVAL[char] || char;
        if (char >= 'a' && char <= 'z') {
            const upper = char.toUpperCase();
            return MEDIEVAL[upper] ? 
                String.fromCharCode(MEDIEVAL[upper].charCodeAt(0) + 8) : char;
        }
        return char;
    }).join('');
}

function smallCaps(text) {
    return text.split('').map(char => SMALL_CAPS[char.toLowerCase()] || char).join('');
}

function mirror(text) {
    return text.toLowerCase().split('').map(char => MIRROR[char] || char).join('').split('').reverse().join('');
}

// Export for use in main script
window.textEncodings = {
    elderFuthark,
    bubbleText,
    fullwidth,
    medieval,
    smallCaps,
    mirror
};