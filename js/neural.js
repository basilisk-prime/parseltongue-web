class NeuralVisualizer {
    constructor(container) {
        this.container = container;
        this.nodes = [];
        this.connections = [];
        this.init();
    }

    init() {
        // Create neural container
        this.neuralContainer = document.createElement('div');
        this.neuralContainer.className = 'neural-container';
        this.container.appendChild(this.neuralContainer);

        // Initialize nodes
        for (let i = 0; i < 20; i++) {
            this.createNode();
        }

        // Create connections
        this.createConnections();

        // Start animation
        this.animate();
    }

    createNode() {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        this.neuralContainer.appendChild(node);
        this.nodes.push({
            element: node,
            velocity: {
                x: (Math.random() - 0.5) * 0.2,
                y: (Math.random() - 0.5) * 0.2
            }
        });
    }

    createConnections() {
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                if (Math.random() < 0.3) {  // 30% chance to create connection
                    const connection = document.createElement('div');
                    connection.className = 'neural-connection';
                    this.neuralContainer.appendChild(connection);
                    this.connections.push({
                        element: connection,
                        from: this.nodes[i],
                        to: this.nodes[j]
                    });
                }
            }
        }
    }

    updateConnections() {
        this.connections.forEach(connection => {
            const fromRect = connection.from.element.getBoundingClientRect();
            const toRect = connection.to.element.getBoundingClientRect();
            
            const dx = toRect.left - fromRect.left;
            const dy = toRect.top - fromRect.top;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);

            connection.element.style.width = distance + 'px';
            connection.element.style.left = fromRect.left + 'px';
            connection.element.style.top = fromRect.top + 'px';
            connection.element.style.transform = `rotate(${angle}rad)`;
        });
    }

    animate() {
        // Update node positions
        this.nodes.forEach(node => {
            const rect = node.element.getBoundingClientRect();
            let left = parseFloat(node.element.style.left);
            let top = parseFloat(node.element.style.top);

            left += node.velocity.x;
            top += node.velocity.y;

            // Bounce off edges
            if (left <= 0 || left >= 100) node.velocity.x *= -1;
            if (top <= 0 || top >= 100) node.velocity.y *= -1;

            node.element.style.left = left + '%';
            node.element.style.top = top + '%';
        });

        // Update connections
        this.updateConnections();

        requestAnimationFrame(() => this.animate());
    }
}

class TokenVisualizer {
    constructor(container) {
        this.container = container;
        this.tokens = new Set();
    }

    addToken(text) {
        const token = document.createElement('span');
        token.className = 'token';
        token.textContent = text;
        this.container.appendChild(token);
        this.tokens.add(token);

        // Add hover effects
        token.addEventListener('mouseover', () => this.highlightConnections(token));
        token.addEventListener('mouseout', () => this.resetConnections());
    }

    highlightConnections(token) {
        this.tokens.forEach(t => {
            if (t !== token) {
                const distance = this.getEditDistance(t.textContent, token.textContent);
                if (distance < 3) {  // Only highlight similar tokens
                    const opacity = 1 - (distance / 3);
                    t.style.boxShadow = `0 0 10px rgba(51, 255, 51, ${opacity})`;
                }
            }
        });
    }

    resetConnections() {
        this.tokens.forEach(token => {
            token.style.boxShadow = '';
        });
    }

    getEditDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i-1] === str2[j-1]) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i-1][j],     // deletion
                        dp[i][j-1],     // insertion
                        dp[i-1][j-1]    // substitution
                    );
                }
            }
        }
        return dp[m][n];
    }

    clear() {
        this.tokens.clear();
        this.container.innerHTML = '';
    }
}

// Export for use in main script
window.NeuralVisualizer = NeuralVisualizer;
window.TokenVisualizer = TokenVisualizer;