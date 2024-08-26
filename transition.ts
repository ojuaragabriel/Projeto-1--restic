// Função para mostrar o formulário de login
function showLogin(): void {
    // Obtém referências aos elementos HTML para o formulário de login, o formulário de registro e os botões
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const registerForm = document.getElementById('register-form') as HTMLElement;
    const btnOpen = document.getElementById('btn-open') as HTMLElement;
    const btnRegister = document.getElementById('btn-register') as HTMLElement;

    // Adiciona a classe 'active' ao formulário de login e remove a classe 'active' do formulário de registro
    loginForm.classList.add('active');
    registerForm.classList.remove('active');

    // Adiciona a classe 'active' ao botão de login e remove a classe 'inactive' dele
    btnOpen.classList.add('active');
    btnOpen.classList.remove('inactive');

    // Adiciona a classe 'inactive' ao botão de registro e remove a classe 'active' dele
    btnRegister.classList.add('inactive');
    btnRegister.classList.remove('active');
}

// Função para mostrar o formulário de registro
function showRegister(): void {
    // Obtém referências aos elementos HTML para o formulário de login, o formulário de registro e os botões
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const registerForm = document.getElementById('register-form') as HTMLElement;
    const btnOpen = document.getElementById('btn-open') as HTMLElement;
    const btnRegister = document.getElementById('btn-register') as HTMLElement;

    // Adiciona a classe 'active' ao formulário de registro e remove a classe 'active' do formulário de login
    registerForm.classList.add('active');
    loginForm.classList.remove('active');

    // Adiciona a classe 'active' ao botão de registro e remove a classe 'inactive' dele
    btnRegister.classList.add('active');
    btnRegister.classList.remove('inactive');

    // Adiciona a classe 'inactive' ao botão de login e remove a classe 'active' dele
    btnOpen.classList.add('inactive');
    btnOpen.classList.remove('active');
}

// Adiciona o evento de mudança para os checkboxes de nível de programação
document.querySelectorAll<HTMLInputElement>('.nivel-programacao input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function(this: HTMLInputElement) {
        // Se o checkbox estiver marcado, desmarque todos os outros
        if (this.checked) {
            document.querySelectorAll<HTMLInputElement>('.nivel-programacao input[type="checkbox"]').forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    // Desmarca o checkbox e reseta o estilo do rótulo associado
                    otherCheckbox.checked = false;
                    (otherCheckbox.nextElementSibling as HTMLElement).style.backgroundColor = '';
                    (otherCheckbox.nextElementSibling as HTMLElement).style.color = '';
                }
            });
            // Altera o estilo do rótulo do checkbox marcado para indicar seleção
            const label = this.nextElementSibling as HTMLElement;
            label.style.backgroundColor = '#4CAF50'; // Verde quando marcado
            label.style.color = 'white';
        } else {
            // Reseta o estilo do rótulo do checkbox desmarcado
            const label = this.nextElementSibling as HTMLElement;
            label.style.backgroundColor = '';
            label.style.color = '';
        }
    });
});
