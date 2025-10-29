// Checklist data
const checklists = {
    companyPage: {
        title: "Company Page Setup",
        icon: "🏢",
        description: "Essential steps to create and optimize your Company Page",
        items: [
            {
                title: "Create your Company Page",
                description: "Navigate to LinkedIn and create your organization's Company Page with basic information"
            },
            {
                title: "Add company logo",
                description: "Upload a square logo (300x300px minimum) that clearly represents your brand"
            },
            {
                title: "Upload cover image",
                description: "Add a banner image (1128x191px) that showcases your brand or key message"
            },
            {
                title: "Write compelling tagline",
                description: "Create a concise tagline (under 120 characters) that captures what you do"
            },
            {
                title: "Complete 'About' section",
                description: "Write a detailed description of your organization, including mission, values, and what makes you unique"
            },
            {
                title: "Add company details",
                description: "Fill in company size, industry, type, founding year, and specialties"
            },
            {
                title: "Include website and contact info",
                description: "Add your website URL, phone number, and other contact details"
            },
            {
                title: "Add company locations",
                description: "List all office locations to help members find and connect with you"
            },
            {
                title: "Assign page admins",
                description: "Add trusted team members as page admins with appropriate permissions"
            },
            {
                title: "Create initial posts",
                description: "Publish 3-5 posts to establish your presence before promoting the page"
            },
            {
                title: "Invite employees to follow",
                description: "Encourage employees to follow and engage with your page"
            },
            {
                title: "Enable page features",
                description: "Turn on relevant features like Hashtags, Career Pages, or Life Pages"
            }
        ]
    },
    showcasePage: {
        title: "Showcase Page Setup",
        icon: "⭐",
        description: "Launch a Showcase Page for your sub-brand or division",
        items: [
            {
                title: "Verify Company Page exists",
                description: "Ensure your main Company Page is active and well-established"
            },
            {
                title: "Confirm distinct brand identity",
                description: "Verify this sub-brand has its own name, visual identity, and target audience"
            },
            {
                title: "Create Showcase Page",
                description: "Navigate to Company Page admin tools and create new Showcase Page"
            },
            {
                title: "Choose appropriate name",
                description: "Select a name that clearly identifies the sub-brand (e.g., 'Microsoft Azure')"
            },
            {
                title: "Add unique logo and banner",
                description: "Use sub-brand specific imagery that differentiates from the Company Page"
            },
            {
                title: "Write focused description",
                description: "Describe what makes this offering unique and who it serves"
            },
            {
                title: "Plan content calendar",
                description: "Prepare 3 months of content to ensure 2-3 posts per week minimum"
            },
            {
                title: "Assign dedicated owner",
                description: "Designate someone responsible for this page's strategy and content"
            },
            {
                title: "Set up content approval workflow",
                description: "Establish who reviews and approves content before publishing"
            },
            {
                title: "Publish initial posts",
                description: "Share 5-7 posts before promoting to establish credibility"
            },
            {
                title: "Promote to target audience",
                description: "Share the page with customers, partners, and relevant LinkedIn members"
            }
        ]
    },
    productPage: {
        title: "Product Page Setup",
        icon: "📦",
        description: "Set up a Product Page for your standardized offering",
        items: [
            {
                title: "Verify Company Page exists",
                description: "Ensure your main Company Page is active and well-established"
            },
            {
                title: "Confirm product criteria",
                description: "Verify it's a standardized offering with features buyers compare"
            },
            {
                title: "Create Product Page",
                description: "Navigate to Company Page admin tools and create new Product Page"
            },
            {
                title: "Add product name and tagline",
                description: "Use clear product name and compelling value proposition"
            },
            {
                title: "Upload product imagery",
                description: "Add high-quality product photos, screenshots, or demo videos"
            },
            {
                title: "List key features and benefits",
                description: "Detail the main features that differentiate your product"
            },
            {
                title: "Add product specifications",
                description: "Include technical specs, pricing tiers, or package details"
            },
            {
                title: "Include use cases",
                description: "Show how different customer types use your product"
            },
            {
                title: "Add customer testimonials",
                description: "Feature quotes or case studies from satisfied customers"
            },
            {
                title: "Link to product resources",
                description: "Add links to documentation, demos, trials, or purchase pages"
            },
            {
                title: "Assign product marketing owner",
                description: "Designate PMM or product manager as page owner"
            },
            {
                title: "Plan release content",
                description: "Schedule posts for product updates, new features, and use cases"
            }
        ]
    },
    servicePage: {
        title: "Service Page Setup",
        icon: "💼",
        description: "Launch a Service Page for your specialized practice area",
        items: [
            {
                title: "Verify Company Page exists",
                description: "Ensure your main Company Page is active and well-established"
            },
            {
                title: "Confirm service criteria",
                description: "Verify it's a distinct practice requiring thought leadership"
            },
            {
                title: "Create Service Page",
                description: "Navigate to Company Page admin tools and create new Service Page"
            },
            {
                title: "Define service name",
                description: "Choose a name that clearly communicates the practice area"
            },
            {
                title: "Write expertise-focused description",
                description: "Emphasize unique capabilities and specialized knowledge"
            },
            {
                title: "Add team credentials",
                description: "Highlight certifications, awards, or expert qualifications"
            },
            {
                title: "Prepare case studies",
                description: "Document 3-5 client success stories with measurable outcomes"
            },
            {
                title: "Develop thought leadership content",
                description: "Create insights, research, or perspectives that build credibility"
            },
            {
                title: "Plan content calendar",
                description: "Schedule regular case studies, insights, and industry commentary"
            },
            {
                title: "Assign practice leader as owner",
                description: "Designate senior practitioner to oversee page strategy"
            },
            {
                title: "Establish content sources",
                description: "Identify team members who can contribute expertise and insights"
            },
            {
                title: "Launch with credibility content",
                description: "Publish initial thought leadership before promoting widely"
            }
        ]
    },
    contentPlanning: {
        title: "Content Planning",
        icon: "📝",
        description: "Assess your content readiness and plan your posting strategy",
        items: [
            {
                title: "Define target audience",
                description: "Identify who you're trying to reach (job roles, industries, seniority)"
            },
            {
                title: "Set posting frequency goal",
                description: "Determine realistic cadence (daily, 3x/week, weekly, monthly)"
            },
            {
                title: "Identify content themes",
                description: "List 3-5 key topics aligned with your brand and audience interests"
            },
            {
                title: "Audit existing content",
                description: "Review what content assets you already have (blogs, videos, reports)"
            },
            {
                title: "Assign content creators",
                description: "Designate team members responsible for creating content"
            },
            {
                title: "Create content calendar",
                description: "Plan 1-3 months of posts with dates, topics, and formats"
            },
            {
                title: "Mix content types",
                description: "Balance thought leadership, product updates, company news, and engagement posts"
            },
            {
                title: "Plan visual assets",
                description: "Identify images, graphics, or videos needed for each post"
            },
            {
                title: "Set approval workflow",
                description: "Define who reviews and approves content before publishing"
            },
            {
                title: "Schedule posts in advance",
                description: "Use scheduling tools to maintain consistent posting cadence"
            },
            {
                title: "Monitor engagement metrics",
                description: "Track likes, comments, shares, and follower growth"
            },
            {
                title: "Iterate based on performance",
                description: "Adjust content strategy based on what resonates with your audience"
            }
        ]
    },
    governanceAudit: {
        title: "Governance Audit",
        icon: "⚙️",
        description: "Review your page governance and maintenance practices",
        items: [
            {
                title: "List all active pages",
                description: "Document every Company, Showcase, Product, and Service Page you manage"
            },
            {
                title: "Verify page ownership",
                description: "Confirm each page has a designated owner with clear responsibilities"
            },
            {
                title: "Review posting frequency",
                description: "Check if each page meets minimum posting requirements (varies by type)"
            },
            {
                title: "Identify dormant pages",
                description: "Flag pages with no posts in 90+ days for review"
            },
            {
                title: "Check for duplicate pages",
                description: "Look for redundant pages that could be consolidated"
            },
            {
                title: "Audit page names",
                description: "Verify names are clear, consistent, and follow naming standards"
            },
            {
                title: "Review admin access",
                description: "Ensure only current team members have admin permissions"
            },
            {
                title: "Assess follower engagement",
                description: "Review engagement rates and follower growth trends"
            },
            {
                title: "Evaluate content quality",
                description: "Check if content aligns with brand standards and target audience"
            },
            {
                title: "Document approval workflows",
                description: "Verify content approval processes are documented and followed"
            },
            {
                title: "Plan page consolidation",
                description: "Identify pages to sunset or merge based on performance"
            },
            {
                title: "Schedule next audit",
                description: "Set date for next quarterly governance review"
            }
        ]
    }
};

let currentChecklist = null;
let completedItems = new Set();

// Initialize the page
function init() {
    renderChecklistOptions();
}

// Render checklist selection options
function renderChecklistOptions() {
    const selector = document.getElementById('checklistSelector');
    selector.innerHTML = '';

    Object.keys(checklists).forEach(key => {
        const checklist = checklists[key];
        const option = document.createElement('div');
        option.className = 'checklist-option';
        option.innerHTML = `
            <div class="checklist-icon">${checklist.icon}</div>
            <h3 style="margin-bottom: 8px;">${checklist.title}</h3>
            <p style="color: var(--text-secondary); font-size: 14px; margin: 0;">${checklist.description}</p>
        `;
        option.onclick = function() { loadChecklist(key, this); };
        selector.appendChild(option);
    });
}

// Load a specific checklist
function loadChecklist(checklistKey, clickedElement) {
    currentChecklist = checklistKey;
    completedItems.clear();
    
    // Load saved progress from localStorage
    const saved = localStorage.getItem(`checklist_${checklistKey}`);
    if (saved) {
        completedItems = new Set(JSON.parse(saved));
    }

    // Update UI
    document.querySelectorAll('.checklist-option').forEach(opt => opt.classList.remove('active'));
    if (clickedElement) {
        clickedElement.classList.add('active');
    }

    renderChecklist();
    document.getElementById('checklistContent').style.display = 'block';
    document.getElementById('checklistContent').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render the active checklist
function renderChecklist() {
    const checklist = checklists[currentChecklist];
    const container = document.getElementById('checklistItems');
    
    container.innerHTML = `
        <h2 style="margin-bottom: 24px;">${checklist.icon} ${checklist.title}</h2>
        ${checklist.items.map((item, index) => `
            <div class="checklist-item" onclick="toggleItem(${index})">
                <div class="checkbox-custom ${completedItems.has(index) ? 'checked' : ''}" data-index="${index}"></div>
                <div class="checklist-text">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('')}
    `;

    updateProgress();
}

// Toggle checklist item completion
function toggleItem(index) {
    if (completedItems.has(index)) {
        completedItems.delete(index);
    } else {
        completedItems.add(index);
    }

    // Save to localStorage
    localStorage.setItem(`checklist_${currentChecklist}`, JSON.stringify([...completedItems]));

    // Update checkbox
    const checkbox = document.querySelector(`[data-index="${index}"]`);
    checkbox.classList.toggle('checked');

    updateProgress();
}

// Update progress display
function updateProgress() {
    const checklist = checklists[currentChecklist];
    const total = checklist.items.length;
    const completed = completedItems.size;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('progressCount').textContent = `${completed}/${total}`;
    document.getElementById('progressPercent').textContent = `${percentage}%`;
}

// Reset current checklist
function resetChecklist() {
    if (confirm('Are you sure you want to reset this checklist? This will clear all checked items.')) {
        completedItems.clear();
        localStorage.removeItem(`checklist_${currentChecklist}`);
        renderChecklist();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
