document.addEventListener('DOMContentLoaded', (event) => {
            const noorTextElement = document.querySelector('#noor-text');
            const bubbleCount = 30;
            
            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.animationDuration = `${3 + Math.random() * 2}s`;
                bubble.style.animationDelay = `${Math.random() * 5}s`;
                noorTextElement.appendChild(bubble);
            }
        });