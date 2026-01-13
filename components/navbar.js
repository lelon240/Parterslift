class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: white;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    height: 110px;
                }
.nav-links {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                    font-size: 1rem;
                    margin-left: auto;
                }
.nav-link {
                    color: #4b5563;
                    font-weight: 600;
                    font-size: 1.5rem;
                    transition: color 0.2s;
                    padding: 0.5rem;
}
.nav-link:hover {
                    color: #f97316;
                }
                .phone-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #1f2937;
                }
                .call-button {
                    background-color: #f97316;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    font-size: 1.125rem;
                    transition: background-color 0.2s;
                }
.call-button:hover {
                    background-color: #ea580c;
                }
                .mobile-menu-button {
                    display: none;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                    .logo-main {
                        font-size: 1.5rem;
                    }
                    .logo-sub {
                        font-size: 0.875rem;
}
                }
</style>
            <div class="container">
                <a href="/" class="logo">
                    <img src="https://huggingface.co/spaces/Matyldaaaaa/podno-niki-l-skie-wysoko-to-nasza-specjalno/resolve/main/images/8B9E8A9D-78E0-4FFE-84EB-6164274F18B7.PNG" alt="PARTNERS LIFT Logo" style="height: 120px;">
</a>
<div class="nav-links">
                    <a href="#uslugi" class="nav-link">Usługi</a>
                    <a href="#obszar" class="nav-link">Obszar działania</a>
                    <a href="#kontakt" class="nav-link">Kontakt</a>
                    <a href="tel:606911505" class="phone-link">
                        <i data-feather="phone"></i>
                        606 911 505
                    </a>
                    <a href="tel:606911505" class="call-button">
                        Zadzwoń
                    </a>
</div>
                
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
            </div>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
