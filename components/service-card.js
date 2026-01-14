
class CustomServiceCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || '';
        const icon = this.getAttribute('icon') || 'tool';
        const description = this.getAttribute('description') || '';
        const image = this.getAttribute('image') || '';
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s, box-shadow 0.2s;
                    overflow: hidden;
                    cursor: pointer;
                }
                :host(:hover) {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
                .card-content {
                    padding: 1.5rem;
                    height: 100%;
                }
                .service-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-bottom: 1px solid #e5e7eb;
                }
                .icon-container {
                    width: 3rem;
                    height: 3rem;
                    background-color: #fff7ed;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                }
                .icon {
                    color: #f97316;
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .title {
                    font-weight: 600;
                    font-size: 1.8rem;
                    color: #1f2937;
                    margin-bottom: 0.75rem;
                }
                .description {
                    color: #6b7280;
                    font-size: 1.3rem;
                    line-height: 1.6;
                }
                .lightbox {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.9);
                    z-index: 1000;
                    align-items: center;
                    justify-content: center;
                }
                .lightbox img {
                    max-width: 90%;
                    max-height: 90%;
                }
                .close-lightbox {
                    position: absolute;
                    top: 20px;
                    right: 30px;
                    color: white;
                    font-size: 40px;
                    cursor: pointer;
                }
</style>
            <div class="card-content">
                ${image ? `<img src="${image}" class="service-image" alt="${title}">` : ''}
                <div class="icon-container">
                    <i data-feather="${icon}" class="icon"></i>
                </div>
                <h3 class="title">${title}</h3>
                <p class="description">${description}</p>
            </div>
            <div class="lightbox">
                <span class="close-lightbox">&times;</span>
                ${image ? `<img src="${image}" alt="${title}">` : ''}
            </div>
        `;

        if (image) {
            const card = this.shadowRoot.querySelector('.card-content');
            const lightbox = this.shadowRoot.querySelector('.lightbox');
            const closeBtn = this.shadowRoot.querySelector('.close-lightbox');

            card.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });

            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }
}
customElements.define('custom-service-card', CustomServiceCard);
