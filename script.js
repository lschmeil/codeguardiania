document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('.tooltip');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltipText = this.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            }
        });
    });

    // Add animation classes on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Code analysis simulation (demo functionality)
function analyzeCode() {
    const codeInput = document.querySelector('#code-input');
    const resultsContainer = document.querySelector('#analysis-results');
    
    if (codeInput && resultsContainer) {
        // Simulate analysis
        resultsContainer.innerHTML = `
            <div class="space-y-4">
                <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div class="flex items-center gap-3">
                        <i data-feather="check-circle" class="text-green-500"></i>
                        <h4 class="font-medium text-green-800">Código bem estruturado</h4>
                    </div>
                </div>
                <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div class="flex items-center gap-3">
                        <i data-feather="alert-triangle" class="text-yellow-500"></i>
                        <h4 class="font-medium text-yellow-800">Método muito longo detectado</h4>
                    </div>
                    <p class="mt-2 text-yellow-700">Considere dividir este método em funções menores</p>
                </div>
                <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div class="flex items-center gap-3">
                        <i data-feather="x-circle" class="text-red-500"></i>
                        <h4 class="font-medium text-red-800">Duplicação de código encontrada</h4>
                    </div>
                    <p class="mt-2 text-red-700">Linhas 45-52 e 78-85 são idênticas - extraia para um método comum</p>
                </div>
            </div>
        `;
        feather.replace();
    }
}

// Initialize any buttons that should trigger analysis
const analyzeButton = document.querySelector('#analyze-button');
if (analyzeButton) {
    analyzeButton.addEventListener('click', analyzeCode);
}
