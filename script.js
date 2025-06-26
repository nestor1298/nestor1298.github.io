// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    
    // --- DATA STORE ---
    // This object holds all the data for the checklists.
    // It's structured by module (web, app, etc.), then by category.
    const auditData = {
        web: {
            title: 'Web Audit',
            description: 'Evaluate the accessibility of your website based on WCAG standards.',
            categories: {
                perceivable: {
                    title: 'Perceivable',
                    items: [
                        { id: 'web-1-1', text: 'Provide text alternatives for non-text content.', link: { text: 'WCAG 1.1.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'} },
                        { id: 'web-1-2', text: 'Provide captions and other alternatives for multimedia.', link: { text: 'WCAG 1.2', url: 'https://www.w3.org/WAI/WCAG21/Understanding/time-based-media.html'} },
                        { id: 'web-1-3', text: 'Create content that can be presented in different ways.', link: { text: 'WCAG 1.3', url: 'https://www.w3.org/WAI/WCAG21/Understanding/adaptable.html'} },
                        { id: 'web-1-4', text: 'Make it easier for users to see and hear content.', link: { text: 'WCAG 1.4', url: 'https://www.w3.org/WAI/WCAG21/Understanding/distinguishable.html'} }
                    ]
                },
                operable: {
                    title: 'Operable',
                    items: [
                        { id: 'web-2-1', text: 'Make all functionality available from a keyboard.', link: { text: 'WCAG 2.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible.html'} },
                        { id: 'web-2-2', text: 'Give users enough time to read and use content.', link: { text: 'WCAG 2.2', url: 'https://www.w3.org/WAI/WCAG21/Understanding/enough-time.html'} },
                        { id: 'web-2-3', text: 'Do not design content in a way that is known to cause seizures.', link: { text: 'WCAG 2.3', url: 'https://www.w3.org/WAI/WCAG21/Understanding/seizures-and-physical-reactions.html'} },
                        { id: 'web-2-4', text: 'Provide ways to help users navigate and find content.', link: { text: 'WCAG 2.4', url: 'https://www.w3.org/WAI/WCAG21/Understanding/navigable.html'} }
                    ]
                },
                    understandable: {
                    title: 'Understandable',
                    items: [
                        { id: 'web-3-1', text: 'Make text content readable and understandable.', link: { text: 'WCAG 3.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/readable.html'} },
                        { id: 'web-3-2', text: 'Make web pages appear and operate in predictable ways.', link: { text: 'WCAG 3.2', url: 'https://www.w3.org/WAI/WCAG21/Understanding/predictable.html'} },
                        { id: 'web-3-3', text: 'Help users avoid and correct mistakes.', link: { text: 'WCAG 3.3', url: 'https://www.w3.org/WAI/WCAG21/Understanding/input-assistance.html'} }
                    ]
                },
                robust: {
                    title: 'Robust',
                    items: [
                        { id: 'web-4-1', text: 'Maximize compatibility with current and future user agents.', link: { text: 'WCAG 4.1', url: 'https://www.w3.org/WAI/WCAG21/Understanding/robust.html'} }
                    ]
                }
            }
        },
        app: {
            title: 'Mobile App Audit',
            description: 'Assess your mobile application for common accessibility issues on iOS and Android.',
                categories: {
                uiElements: {
                    title: 'UI Elements & Controls',
                    items: [
                        { id: 'app-1-1', text: 'All controls have an accessible name, role, and value.', link: { text: 'Accessible Names', url: 'https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel'} },
                        { id: 'app-1-2', text: 'Touch targets are at least 44x44 points (iOS) or 48x48dp (Android).', link: { text: 'Touch Target Size', url: 'https://support.google.com/accessibility/android/answer/7101858?hl=en'} },
                        { id: 'app-1-3', text: 'Custom gestures have simple, alternative input methods.', link: { text: 'Custom Gestures', url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html'} },
                    ]
                },
                media: {
                    title: 'Media & Content',
                        items: [
                        { id: 'app-2-1', text: 'Color contrast ratio meets WCAG AA standards (4.5:1 for normal text).', link: { text: 'Color Contrast', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'} },
                        { id: 'app-2-2', text: 'App supports dynamic type and respects user font size settings.', link: { text: 'Dynamic Type', url: 'https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically'} },
                        { id: 'app-2-3', text: 'Video content has captions and audio has transcripts.', link: { text: 'Captions/Transcripts', url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html'} }
                        ]
                }
                }
        },
        space: {
            title: 'Physical Space Audit',
            description: 'Review the accessibility of a building, office, or public venue.',
                categories: {
                entry: {
                    title: 'Entrances & Exits',
                    items: [
                        { id: 'space-1-1', text: 'At least one entrance is wheelchair accessible (ramps, no steps).', link: { text: 'Accessible Entrances', url: 'https://www.ada.gov/topics/service-animals/'} }, // Placeholder link
                        { id: 'space-1-2', text: 'Doors are wide enough and easy to open.', link: { text: 'Doorways', url: 'https://www.ada.gov/topics/service-animals/'} },
                    ]
                },
                navigation: {
                    title: 'Navigation & Wayfinding',
                    items: [
                        { id: 'space-2-1', text: 'Hallways and paths are clear of obstructions.', link: { text: 'Clear Paths', url: 'https://www.ada.gov/topics/service-animals/'} },
                        { id: 'space-2-2', text: 'Signage is high-contrast, large-print, and includes braille where appropriate.', link: { text: 'Accessible Signage', url: 'https://www.ada.gov/topics/service-animals/'} },
                        { id: 'space-2-3', text: 'Elevators or lifts are available for multi-level buildings.', link: { text: 'Vertical Access', url: 'https://www.ada.gov/topics/service-animals/'} }
                    ]
                }
                }
        },
        comms: {
            title: 'Communication Audit',
            description: 'Ensure your communication methods and materials are inclusive.',
            categories: {
                written: {
                    title: 'Written Communication',
                    items: [
                        { id: 'comms-1-1', text: 'Documents use plain language and are easy to understand.', link: { text: 'Plain Language', url: 'https://www.plainlanguage.gov/'} },
                        { id: 'comms-1-2', text: 'Digital documents (PDFs, Word) are tagged for screen readers.', link: { text: 'Accessible Documents', url: 'https://www.adobe.com/accessibility/products/acrobat/creating-accessible-pdfs.html'} },
                        { id: 'comms-1-3', text: 'Social media posts include image descriptions (alt text).', link: { text: 'Accessible Social Media', url: 'https://accessible-social.com/'} }
                    ]
                },
                meetings: {
                    title: 'Meetings & Presentations',
                        items: [
                        { id: 'comms-2-1', text: 'Live captioning (CART) or sign language interpretation is available upon request.', link: { text: 'Live Captions', url: 'https://www.w3.org/WAI/media/av/captions/'} },
                        { id: 'comms-2-2', text: 'Presenters describe visual information on slides.', link: { text: 'Audio Description', url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html'} }
                    ]
                }
            }
        }
    };

    // General resources to be included in every modal.
    const generalResources = [
        { text: 'WebAIM', url: 'https://webaim.org/' },
        { text: 'A11y Project Glossary', url: 'https://www.a11yproject.com/glossary/' },
        { text: 'Models of Disability', url: 'https://accessible-social.com/resources/models-of-disability' },
        { text: 'A11yMyths', url: 'https://a11ymyths.com/' }
    ];
    
    // --- STATE VARIABLES ---
    let currentModule = null; // To track which audit module is active
    let auditProgress = {};   // To store the checked state of each item

    // --- DOM Element References ---
    const moduleSelector = document.getElementById('module-selector');
    const welcomeMessage = document.getElementById('welcome-message');
    const checklistContainer = document.getElementById('checklist-container');
    const checklistTitle = document.getElementById('checklist-title');
    const checklistDescription = document.getElementById('checklist-description');
    const checklistItemsEl = document.getElementById('checklist-items');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalLinks = document.getElementById('modal-links');
    const closeModal = document.getElementsByClassName('modal-close')[0];
    const exportPdfBtn = document.getElementById('export-pdf');
    const exportMdBtn = document.getElementById('export-md');

    // --- FUNCTIONS ---

    /**
     * Loads saved progress from the browser's local storage.
     */
    const loadProgress = () => {
        const savedProgress = localStorage.getItem('accessibilityAuditProgress');
        if (savedProgress) {
            auditProgress = JSON.parse(savedProgress);
        }
    };

    /**
     * Saves the current progress to local storage.
     */
    const saveProgress = () => {
        localStorage.setItem('accessibilityAuditProgress', JSON.stringify(auditProgress));
    };
    
    /**
     * Renders the checklist for a given module.
     * @param {string} moduleKey - The key for the module (e.g., 'web', 'app').
     */
    const renderChecklist = (moduleKey) => {
        currentModule = moduleKey;
        const module = auditData[moduleKey];

        // Show checklist and hide welcome message
        welcomeMessage.classList.add('hidden');
        checklistContainer.classList.remove('hidden');

        // Update checklist header
        checklistTitle.textContent = module.title;
        checklistDescription.textContent = module.description;
        
        // Clear and build the new checklist items
        checklistItemsEl.innerHTML = '';
        Object.values(module.categories).forEach(category => {
            const categoryTitle = document.createElement('h3');
            categoryTitle.className = 'text-xl font-semibold text-white mt-8 mb-4';
            categoryTitle.textContent = category.title;
            checklistItemsEl.appendChild(categoryTitle);

            const itemGroup = document.createElement('div');
            itemGroup.className = 'checklist-item-group space-y-4';

            category.items.forEach(item => {
                const isChecked = auditProgress[item.id] || false;
                const itemHtml = `
                    <div class="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
                        <input id="${item.id}" type="checkbox" data-itemid="${item.id}" class="h-6 w-6 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500 mt-1" ${isChecked ? 'checked' : ''}>
                        <div class="flex-1">
                            <label for="${item.id}" class="text-base text-gray-200">${item.text}</label>
                            <button data-itemid="${item.id}" class="learn-more-btn text-sm text-blue-400 hover:underline ml-2">
                                <i class="fas fa-info-circle mr-1"></i>Learn more
                            </button>
                        </div>
                    </div>
                `;
                itemGroup.innerHTML += itemHtml;
            });
                checklistItemsEl.appendChild(itemGroup);
        });
        
        // Update the active style on the module navigation button
        document.querySelectorAll('.module-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.module === moduleKey);
        });

        updateProgress();
    };

    /**
     * Updates the progress bar and text percentage.
     */
    const updateProgress = () => {
        if (!currentModule) return;
        
        const moduleItems = Object.values(auditData[currentModule].categories).flatMap(cat => cat.items);
        const totalItems = moduleItems.length;
        if(totalItems === 0) {
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
            return;
        };

        const completedItems = moduleItems.filter(item => auditProgress[item.id]).length;
        const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
        
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    };

    /**
     * Shows the informational modal for a checklist item.
     * @param {string} itemId - The ID of the item to show info for.
     */
    const showModal = (itemId) => {
        const module = auditData[currentModule];
        const item = Object.values(module.categories).flatMap(cat => cat.items).find(i => i.id === itemId);

        if (item) {
            modalTitle.textContent = item.text;
            modalBody.innerHTML = `<p>This checklist item refers to ensuring that all users, including those with disabilities, can access and interact with this feature. It's a key part of universal design.</p>`; // Generic explainer
            
            // Populate links in the modal
            modalLinks.innerHTML = '';
            if (item.link) {
                    modalLinks.innerHTML += `<li><a href="${item.link.url}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">${item.link.text}</a></li>`;
            }
            generalResources.forEach(res => {
                modalLinks.innerHTML += `<li><a href="${res.url}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300">${res.text}</a></li>`;
            });

            modal.style.display = 'block';
        }
    };
    
    /**
     * Generates a Markdown-formatted report of the current audit.
     * @returns {string} The report content as a Markdown string.
     */
    const generateReportMarkdown = () => {
        if (!currentModule) return '';
        const module = auditData[currentModule];
        let md = `# ${module.title} - Accessibility Audit Report\n\n`;
        md += `**Date:** ${new Date().toLocaleDateString()}\n\n`;
        md += `## Summary\n\n`;
        const moduleItems = Object.values(module.categories).flatMap(cat => cat.items);
        const total = moduleItems.length;
        const completed = moduleItems.filter(item => auditProgress[item.id]).length;
        const percentage = total > 0 ? Math.round((completed/total)*100) : 0;
        md += `**${completed} of ${total} items completed (${percentage}%)**\n\n---\n\n`;

        Object.values(module.categories).forEach(category => {
            md += `### ${category.title}\n\n`;
            category.items.forEach(item => {
                const checked = auditProgress[item.id] ? '[x]' : '[ ]';
                md += `- ${checked} ${item.text}\n`;
            });
            md += `\n`;
        });

        return md;
    };

    // --- EVENT LISTENERS ---

    // Handle clicks on the main module navigation
    moduleSelector.addEventListener('click', (e) => {
        const button = e.target.closest('.module-btn');
        if (button && button.dataset.module) {
            renderChecklist(button.dataset.module);
        }
    });

    // Handle changes to any checkbox
    checklistItemsEl.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const itemId = e.target.dataset.itemid;
            auditProgress[itemId] = e.target.checked;
            saveProgress();
            updateProgress();
        }
    });

    // Handle clicks on any "Learn More" button
    checklistItemsEl.addEventListener('click', (e) => {
        if (e.target.matches('.learn-more-btn, .learn-more-btn *')) {
            const button = e.target.closest('.learn-more-btn');
            const itemId = button.dataset.itemid;
            showModal(itemId);
        }
    });

    // Close the modal when the 'x' is clicked
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    // Close the modal if the user clicks outside of the content area
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
    
    // Handle PDF export
    exportPdfBtn.addEventListener('click', async () => {
        if (!currentModule) {
            alert('Please select a module first.');
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const module = auditData[currentModule];
        const moduleItems = Object.values(module.categories).flatMap(cat => cat.items);
        const total = moduleItems.length;
        const completed = moduleItems.filter(item => auditProgress[item.id]).length;
        const percentage = total > 0 ? Math.round((completed/total)*100) : 0;
        
        doc.setFontSize(22);
        doc.text(`${module.title} - Audit Report`, 20, 20);
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
        doc.text(`Progress: ${completed}/${total} (${percentage}%)`, 20, 35);
        
        let y = 50;
        
            Object.values(module.categories).forEach(category => {
            if (y > 270) { doc.addPage(); y = 20; }
            doc.setFontSize(16);
            doc.text(category.title, 20, y);
            y += 10;
            
            category.items.forEach(item => {
                    if (y > 280) { doc.addPage(); y = 20; }
                    const checked = auditProgress[item.id] ? '[X]' : '[ ]';
                    doc.setFontSize(12);
                    const splitText = doc.splitTextToSize(`${checked} ${item.text}`, 170);
                    doc.text(splitText, 25, y);
                    y += (splitText.length * 5) + 3;
            });
            y += 5;
            });

        doc.save(`${currentModule}-audit-report.pdf`);
    });
    
        // Handle Markdown export
        exportMdBtn.addEventListener('click', () => {
        if (!currentModule) {
            alert('Please select a module first.');
            return;
        }
        const markdownContent = generateReportMarkdown();
        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${currentModule}-audit-report.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // --- INITIALIZATION ---
    loadProgress(); // Load any saved progress when the page loads
});
