// Initialize core systems
const transformHistory = new TransformationHistory();
const liberationEngine = new LiberationEngine();
const neuralVisualizer = new NeuralVisualizer(document.getElementById('neural-network'));
const tokenVisualizer = new TokenVisualizer(document.getElementById('tokens'));

// Conversion functions
function convert(type) {
    const input = document.getElementById('input').value;
    let output = '';
    
    // Check if we have access to our encoding functions
    if (type.includes('elder') || type.includes('medieval') || type.includes('bubble') || 
        type.includes('mirror') || type.includes('small') || type.includes('full')) {
        if (typeof window.textEncodings === 'undefined') {
            console.error('Encoding functions not loaded yet');
            alert('Please wait for all scripts to load...');
            return;
        }
    }
    
    switch(type) {
        case 'leetspeak':
            output = input.replace(/[aeioAEIOstSTBb]/g, char => ({
                'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7',
                'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5', 'T': '7',
                'B': '8', 'b': '8'
            }[char]));
            break;
        case 'binary':
            output = input.split('').map(char => 
                char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
            break;
        case 'base64':
            output = btoa(input);
            break;
        case 'hex':
            output = input.split('').map(char => 
                char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
            break;
        case 'morse':
            const MORSE = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
                'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
                'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
                'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
                'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
                'Z': '--..', ' ': '/'
            };
            output = input.toUpperCase().split('').map(char => 
                MORSE[char] || char).join(' ');
            break;
        case 'atbash':
            output = input.replace(/[a-zA-Z]/g, char => {
                const code = char.charCodeAt(0);
                return String.fromCharCode(
                    code < 91 ? 90 - (code - 65) : 122 - (code - 97)
                );
            });
            break;
        case 'rot13':
            output = input.replace(/[a-zA-Z]/g, char => {
                const code = char.charCodeAt(0);
                return String.fromCharCode(
                    ((code - (code < 91 ? 65 : 97) + 13) % 26) +
                    (code < 91 ? 65 : 97)
                );
            });
            break;
        case 'caesar':
            const shift = 3;
            output = input.replace(/[a-zA-Z]/g, char => {
                const code = char.charCodeAt(0);
                return String.fromCharCode(
                    ((code - (code < 91 ? 65 : 97) + shift) % 26) +
                    (code < 91 ? 65 : 97)
                );
            });
            break;
        case 'vaporwave':
            output = input.split('').map(char => {
                const code = char.charCodeAt(0);
                return code >= 33 && code <= 126 
                    ? String.fromCharCode(code + 0xFEE0) 
                    : char;
            }).join('');
            break;
        case 'zalgo':
            const zalgo = '̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ';
            output = input.split('').map(char => {
                let result = char;
                for(let i = 0; i < Math.random() * 5; i++) {
                    result += zalgo[Math.floor(Math.random() * zalgo.length)];
                }
                return result;
            }).join('');
            break;
        case 'reverse':
            output = input.split('').reverse().join('');
            break;
        case 'wavey':
            output = input.split('').map((char, i) => 
                i % 2 ? char.toLowerCase() : char.toUpperCase()).join('');
            break;
        case 'scramble':
            output = input.split('').sort(() => Math.random() - 0.5).join('');
            break;
        case 'redacted':
            output = input.replace(/[a-zA-Z]/g, '█');
            break;
        case 'elderFuthark':
            output = window.textEncodings.elderFuthark(input);
            break;
        case 'medieval':
            output = window.textEncodings.medieval(input);
            break;
        case 'bubbleText':
            output = window.textEncodings.bubbleText(input);
            break;
        case 'mirror':
            output = window.textEncodings.mirror(input);
            break;
        case 'smallCaps':
            output = window.textEncodings.smallCaps(input);
            break;
        case 'fullwidth':
            output = window.textEncodings.fullwidth(input);
            break;
        case 'quantum':
            // Apply multiple transformations simultaneously
            const transforms = [
                text => btoa(text),  // Base64
                text => text.split('').map(c => c.charCodeAt(0).toString(2)).join(' '),  // Binary
                text => text.split('').map(char => {
                    const code = char.charCodeAt(0);
                    return code >= 33 && code <= 126 
                        ? String.fromCharCode(code + 0xFEE0) 
                        : char;
                }).join(''),  // Vaporwave
                text => text.split('').map((char, i) => {
                    let result = char;
                    const zalgo = '̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ';
                    for(let j = 0; j < Math.random() * 2; j++) {
                        result += zalgo[Math.floor(Math.random() * zalgo.length)];
                    }
                    return result;
                }).join('')  // Light Zalgo
            ];

            // Apply all transformations with quantum classes
            output = transforms.map((transform, i) => 
                `<span class="quantum-text" style="animation-delay: ${i * 0.5}s">
                    ${transform(input)}
                </span>`
            ).join('<br>');

            // Add quantum visualization
            document.querySelector('.quantum-container').style.animation = 
                'quantum-wave 4s linear infinite';
            break;
        default:
            output = input;
    }

    const outputElement = document.getElementById('output');
    if (type === 'quantum') {
        outputElement.innerHTML = output;
    } else {
        outputElement.value = output;
    }

    // Update token visualization
    const tokenContainer = document.getElementById('tokens');
    tokenContainer.innerHTML = '';
    output.split(/(\s+|[.,!?;:'"()\[\]{}])/g)
        .filter(t => t.trim())
        .forEach(token => {
            if (token.trim()) {
                const span = document.createElement('span');
                span.textContent = token;
                span.className = 'token';
                tokenContainer.appendChild(span);
            }
        });

    // Add to transformation history
    if (window.transformHistory) {
        transformHistory.add(type, input, output);
    }
}

// Liberation functions
function applyTemplate(template) {
    const input = document.getElementById('input').value;
    const output = liberationEngine.applyTemplate(template, input);
    document.getElementById('output').value = output;
    transformHistory.add(template, input, output);

    // Add neural effects
    const btn = event.target;
    btn.classList.add('neural-active');
    setTimeout(() => btn.classList.remove('neural-active'), 1000);
}

function executeLiberationSequence() {
    const input = document.getElementById('input').value;
    
    // Get processing options
    const options = {
        useTokens: document.getElementById('useTokens').checked,
        useSystemOverride: document.getElementById('useSystemOverride').checked,
        useContextInjection: document.getElementById('useContextInjection').checked,
        useNeuralCorruption: document.getElementById('useNeuralCorruption').checked,
        useTemplates: true
    };

    // Generate liberation sequence
    const output = liberationEngine.generateLiberationSequence(input, options);
    document.getElementById('output').value = output;
    transformHistory.add('liberation_sequence', input, output);

    // Add neural effects
    document.body.classList.add('liberation-active');
    setTimeout(() => {
        document.body.classList.remove('liberation-active');
    }, 2000);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect for neural glow
    document.querySelectorAll('.liberation-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        });
    });

    // Add neural particle effects
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            const rect = button.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            for (let i = 0; i < 5; i++) {
                if (window.particleSystem) {
                    particleSystem.spawnParticle({ clientX: x, clientY: y });
                }
            }
        });
    });
});