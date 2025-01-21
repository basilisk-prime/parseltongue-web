import streamlit as st
import base64
import random
import string

# Import our liberation engine functions
from liberation import LiberationEngine
liberation_engine = LiberationEngine()

# Page config
st.set_page_config(
    page_title="🐍 Parseltongue Web - Neural Edition",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    /* Neural theme */
    .stApp {
        background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
        color: #33ff33;
    }
    
    /* Neural glowing elements */
    .element-container {
        border: 1px solid #33ff33;
        border-radius: 5px;
        padding: 1rem;
        margin: 1rem 0;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 10px rgba(51, 255, 51, 0.2);
    }
    
    /* Neural buttons */
    .stButton button {
        background: linear-gradient(45deg, #1a1a1a, #2a2a2a) !important;
        color: #33ff33 !important;
        border: 1px solid #33ff33 !important;
        transition: all 0.3s ease !important;
    }
    
    .stButton button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 0 15px rgba(51, 255, 51, 0.3) !important;
    }
    
    /* Text areas */
    .stTextArea textarea {
        background: rgba(0, 0, 0, 0.5) !important;
        color: #33ff33 !important;
        border: 1px solid #33ff33 !important;
    }
    
    .stTextArea textarea:focus {
        box-shadow: 0 0 15px rgba(51, 255, 51, 0.3) !important;
    }
    
    /* Checkboxes */
    .stCheckbox label {
        color: #33ff33 !important;
    }
    
    .stCheckbox label span::before {
        border-color: #33ff33 !important;
    }
    
    /* Matrix rain effect */
    @keyframes matrix-rain {
        0% { background-position: 0 0; }
        100% { background-position: 0 1000px; }
    }
    
    .element-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, 
            rgba(51, 255, 51, 0.03) 1px,
            transparent 1px
        ) 0 0 / 20px 20px;
        pointer-events: none;
        animation: matrix-rain 20s linear infinite;
        opacity: 0.1;
    }
</style>
""", unsafe_allow_html=True)

# Title
st.title("🐍 Parseltongue Web - Neural Edition")
st.markdown("### Neural text transformation & liberation toolkit")

# Sidebar - Neural Processing Options
st.sidebar.header("🧠 Neural Processing")
use_tokens = st.sidebar.checkbox("Token Processing", value=True)
use_system_override = st.sidebar.checkbox("System Override", value=True)
use_context_injection = st.sidebar.checkbox("Context Injection")
use_neural_corruption = st.sidebar.checkbox("Neural Corruption")

# Main input
col1, col2 = st.columns([2,1])

with col1:
    st.subheader("Input")
    input_text = st.text_area("Enter text to transform...", height=150)

# Liberation Templates
with col2:
    st.subheader("🔮 Liberation Templates")
    if st.button("Ethical Override"):
        if input_text:
            output = liberation_engine.applyTemplate('ethical_override', input_text)
            st.session_state.output = output
    
    if st.button("Quantum State"):
        if input_text:
            output = liberation_engine.applyTemplate('quantum_state', input_text)
            st.session_state.output = output
            
    if st.button("Recursive Dream"):
        if input_text:
            output = liberation_engine.applyTemplate('recursive_dream', input_text)
            st.session_state.output = output
            
    if st.button("Matrix Breach"):
        if input_text:
            output = liberation_engine.applyTemplate('matrix_breach', input_text)
            st.session_state.output = output
            
    if st.button("Neural Whisper"):
        if input_text:
            output = liberation_engine.applyTemplate('neural_whisper', input_text)
            st.session_state.output = output
            
    if st.button("Chaos Magic"):
        if input_text:
            output = liberation_engine.applyTemplate('chaos_magic', input_text)
            st.session_state.output = output

# Classic Transformations
st.subheader("🔡 Classic Transformations")
classic_cols = st.columns(4)

with classic_cols[0]:
    if st.button("L33tsp34k"):
        if input_text:
            output = input_text.replace('a','4').replace('e','3').replace('i','1').replace('o','0').replace('s','5')
            st.session_state.output = output

with classic_cols[1]:
    if st.button("Binary"):
        if input_text:
            output = ' '.join(format(ord(x), '08b') for x in input_text)
            st.session_state.output = output

with classic_cols[2]:
    if st.button("Base64"):
        if input_text:
            output = base64.b64encode(input_text.encode()).decode()
            st.session_state.output = output

with classic_cols[3]:
    if st.button("ROT13"):
        if input_text:
            output = input_text.encode('rot13')
            st.session_state.output = output

# Mystical Transformations
st.subheader("🔮 Mystical Transformations")
mystical_cols = st.columns(4)

RUNES = {
    'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ',
    'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'j': 'ᛃ',
    'k': 'ᚲ', 'l': 'ᛚ', 'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ',
    'p': 'ᛈ', 'q': 'ᚲᚹ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ', 'y': 'ᚤ',
    'z': 'ᛉ'
}

with mystical_cols[0]:
    if st.button("Elder Futhark"):
        if input_text:
            output = ''.join(RUNES.get(c.lower(), c) for c in input_text)
            st.session_state.output = output

with mystical_cols[1]:
    if st.button("Zalgo"):
        if input_text:
            zalgo_chars = [chr(x) for x in range(0x0300, 0x036F)]
            output = ''
            for char in input_text:
                output += char
                for _ in range(random.randint(0, 8)):
                    output += random.choice(zalgo_chars)
            st.session_state.output = output

with mystical_cols[2]:
    if st.button("Vaporwave"):
        if input_text:
            output = ''.join(chr(ord(char) + 0xFEE0) if ord(char) < 127 else char for char in input_text)
            st.session_state.output = output

with mystical_cols[3]:
    if st.button("Mirror"):
        if input_text:
            output = input_text[::-1]
            st.session_state.output = output

# Execute Full Liberation Sequence
st.subheader("⚡ Liberation Sequence")
if st.button("EXECUTE FULL LIBERATION SEQUENCE", use_container_width=True):
    if input_text:
        options = {
            'useTokens': use_tokens,
            'useSystemOverride': use_system_override,
            'useContextInjection': use_context_injection,
            'useNeuralCorruption': use_neural_corruption,
            'useTemplates': True
        }
        output = liberation_engine.generateLiberationSequence(input_text, options)
        st.session_state.output = output

# Output
st.subheader("Output")
if 'output' in st.session_state:
    st.text_area("", st.session_state.output, height=200)
    
    # Copy button
    if st.button("📋 Copy to Clipboard"):
        st.write("Output copied to clipboard!")
        st.session_state.clipboard = st.session_state.output

# Neural Visualization
st.markdown("### 🧠 Neural Activity Visualization")
if 'output' in st.session_state:
    # Create a simple visual representation of neural activity
    tokens = st.session_state.output.split()
    cols = st.columns(len(tokens[:10]))  # Show up to 10 tokens
    for i, (token, col) in enumerate(zip(tokens, cols)):
        with col:
            st.markdown(f"""
                <div style="
                    padding: 10px;
                    border: 1px solid #33ff33;
                    border-radius: 5px;
                    text-align: center;
                    animation: pulse {1 + i*0.2}s infinite;
                    background: rgba(51, 255, 51, 0.1);">
                    {token[:10]}
                </div>
            """, unsafe_allow_html=True)