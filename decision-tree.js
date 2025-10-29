// Decision Tree State Management
let currentNode = 'start';
let decisionHistory = [];
let userChoices = {};
let navigationStack = ['start']; // Track navigation path for back button

// Decision Tree Data Structure
const decisionTree = {
    start: {
        question: "Do you have a Company Page?",
        info: "A Company Page is the foundation of your LinkedIn presence and is required before creating any other page types.",
        options: [
            {
                text: "No, I don't have a Company Page yet",
                next: 'createCompanyPage',
                choice: 'no_company_page'
            },
            {
                text: "Yes, I have a Company Page",
                next: 'nodeA',
                choice: 'has_company_page'
            }
        ]
    },
    
    createCompanyPage: {
        isResult: true,
        resultType: 'action',
        title: "Create Your Company Page First",
        content: `
            <p><strong>Your Company Page is mandatory and serves as the foundation for your LinkedIn presence.</strong></p>
            <p>Before creating Showcase, Product, or Service Pages, you must establish your Company Page. This page will:</p>
            <ul>
                <li>Represent your organization's brand and identity</li>
                <li>Serve as your employer brand hub</li>
                <li>Provide corporate news and company culture content</li>
                <li>Be the parent page for any additional pages you create</li>
            </ul>
            <p style="margin-top: 16px;"><strong>Next Steps:</strong></p>
            <ol>
                <li>Navigate to LinkedIn and create your Company Page</li>
                <li>Complete your page profile with logo, banner, and description</li>
                <li>Add at least 3-5 posts to establish your presence</li>
                <li>Return to this tool to determine if you need additional pages</li>
            </ol>
        `,
        actions: [
            { text: "View Setup Checklist", link: "checklists.html" },
            { text: "Learn Naming Standards", link: "naming-standards.html" }
        ]
    },
    
    nodeA: {
        question: "What are you representing?",
        info: "This helps us determine which type of additional page (if any) would best serve your needs.",
        options: [
            {
                text: "A sub-brand, division, or regional office",
                next: 'nodeB',
                choice: 'sub_brand'
            },
            {
                text: "A tangible product or SaaS offering",
                next: 'nodeC',
                choice: 'product'
            },
            {
                text: "A professional service or consulting offering",
                next: 'nodeD',
                choice: 'service'
            }
        ]
    },
    
    // Node B: Showcase Page Logic
    nodeB: {
        question: "Does this entity have its own distinct brand identity?",
        info: "A distinct brand identity means it has its own name, visual identity, and is recognized separately from the parent company.",
        options: [
            {
                text: "No, it's part of our main brand",
                next: 'resultFeatureOnCompany',
                choice: 'no_distinct_brand'
            },
            {
                text: "Yes, it has its own brand identity",
                next: 'nodeB2',
                choice: 'has_distinct_brand'
            }
        ]
    },
    
    nodeB2: {
        question: "Does it target a significantly different audience?",
        info: "Consider whether this entity appeals to different industries, job roles, or demographics than your main Company Page.",
        options: [
            {
                text: "No, same target audience",
                next: 'resultFeatureOnCompany',
                choice: 'same_audience'
            },
            {
                text: "Yes, different target audience",
                next: 'nodeB3',
                choice: 'different_audience'
            }
        ]
    },
    
    nodeB3: {
        question: "Can you sustain 2-3 unique posts per week?",
        info: "Showcase Pages require consistent content to maintain audience engagement and justify their existence.",
        options: [
            {
                text: "No, we cannot maintain that posting frequency",
                next: 'resultUseTargeting',
                choice: 'cannot_post_frequently'
            },
            {
                text: "Yes, we can post 2-3 times per week",
                next: 'resultCreateShowcase',
                choice: 'can_post_frequently'
            }
        ]
    },
    
    // Node C: Product Page Logic
    nodeC: {
        question: "Is this a standardized, repeatable offering?",
        info: "Standardized offerings have consistent features and can be compared across alternatives, like software products or physical goods.",
        options: [
            {
                text: "No, it's customized or bespoke",
                next: 'nodeD',
                choice: 'not_standardized'
            },
            {
                text: "Yes, it's a standardized offering",
                next: 'nodeC2',
                choice: 'is_standardized'
            }
        ]
    },
    
    nodeC2: {
        question: "Do buyers compare features across alternatives?",
        info: "If buyers typically evaluate your offering against competitors' features, specs, or capabilities, a Product Page can showcase these differentiators.",
        options: [
            {
                text: "No, not feature-driven decisions",
                next: 'resultFeatureOnCompany',
                choice: 'not_feature_driven'
            },
            {
                text: "Yes, buyers compare features",
                next: 'nodeC3',
                choice: 'feature_driven'
            }
        ]
    },
    
    nodeC3: {
        question: "Will you publish product-specific content monthly?",
        info: "Product Pages need regular updates about features, releases, use cases, and customer success stories.",
        options: [
            {
                text: "No, we won't post monthly",
                next: 'resultFeatureOnCompany',
                choice: 'no_monthly_content'
            },
            {
                text: "Yes, we'll post at least monthly",
                next: 'resultCreateProduct',
                choice: 'monthly_content'
            }
        ]
    },
    
    // Node D: Service Page Logic
    nodeD: {
        question: "Is this a distinct practice area with unique expertise?",
        info: "A distinct practice area has specialized knowledge, dedicated team members, and differentiates you from competitors.",
        options: [
            {
                text: "No, it's a general service offering",
                next: 'resultFeatureOnCompany',
                choice: 'not_distinct_practice'
            },
            {
                text: "Yes, it's a specialized practice area",
                next: 'nodeD2',
                choice: 'distinct_practice'
            }
        ]
    },
    
    nodeD2: {
        question: "Does it require building trust through thought leadership?",
        info: "Services often require demonstrating expertise through insights, research, and industry perspectives to build credibility.",
        options: [
            {
                text: "No, not reliant on thought leadership",
                next: 'resultFeatureOnCompany',
                choice: 'no_thought_leadership'
            },
            {
                text: "Yes, thought leadership is essential",
                next: 'nodeD3',
                choice: 'needs_thought_leadership'
            }
        ]
    },
    
    nodeD3: {
        question: "Will you share case studies or outcomes regularly?",
        info: "Service Pages thrive on proof points showing real client results and demonstrating the value of your expertise.",
        options: [
            {
                text: "No, we can't share case studies regularly",
                next: 'resultFeatureOnCompany',
                choice: 'no_case_studies'
            },
            {
                text: "Yes, we'll share case studies regularly",
                next: 'resultCreateService',
                choice: 'regular_case_studies'
            }
        ]
    },
    
    // Results
    resultFeatureOnCompany: {
        isResult: true,
        resultType: 'recommendation',
        title: "Feature This on Your Company Page",
        content: `
            <p><strong>Recommendation: Don't create a separate page for this offering.</strong></p>
            <p>Based on your responses, creating a separate page isn't recommended because:</p>
            <ul>
                <li>It doesn't meet the criteria for sustained unique content</li>
                <li>Creating a separate page could fragment your audience</li>
                <li>You can effectively showcase this through your existing Company Page</li>
            </ul>
            <p style="margin-top: 16px;"><strong>Best Practices:</strong></p>
            <ul>
                <li>Feature this offering prominently on your Company Page</li>
                <li>Use rich media posts to highlight key features or benefits</li>
                <li>Create a content strategy within your Company Page calendar</li>
                <li>Consider using LinkedIn's Audience Targeting for specific segments</li>
            </ul>
        `,
        actions: [
            { text: "View Content Planning Tools", link: "content-planning.html" },
            { text: "Learn About Audience Targeting", link: "audience-targeting.html" }
        ]
    },
    
    resultUseTargeting: {
        isResult: true,
        resultType: 'recommendation',
        title: "Use Audience Targeting Instead",
        content: `
            <p><strong>Recommendation: Use Audience Targeting rather than creating a Showcase Page.</strong></p>
            <p>Since you cannot maintain the required 2-3 posts per week, creating a separate Showcase Page would result in a dormant page that harms your brand. Instead:</p>
            
            <div class="info-box" style="margin: 20px 0;">
                <p><strong>LinkedIn's Audience Targeting allows you to:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>Target posts by geography (up to 150 locations)</li>
                    <li>Filter by company size and seniority level</li>
                    <li>Segment by industry and language preferences</li>
                    <li>Reach specific audiences without creating multiple pages</li>
                </ul>
            </div>
            
            <p><strong>How to Use Audience Targeting:</strong></p>
            <ol>
                <li>Navigate to your Company Page admin dashboard</li>
                <li>Create a new post and click on the targeting icon</li>
                <li>Select your target criteria (geography, industry, etc.)</li>
                <li>Publish your post to reach the specific audience</li>
            </ol>
            
            <p style="margin-top: 16px;">This approach lets you maintain a unified Company Page while still delivering relevant content to different segments of your audience.</p>
        `,
        actions: [
            { text: "Learn More About Audience Targeting", link: "audience-targeting.html" },
            { text: "View Content Planning Tools", link: "content-planning.html" }
        ]
    },
    
    resultCreateShowcase: {
        isResult: true,
        resultType: 'success',
        title: "Create a Showcase Page",
        content: `
            <p><strong>Recommendation: Create a Showcase Page for this sub-brand.</strong></p>
            
            <div class="success-box" style="margin: 20px 0;">
                <p><strong>✓ Your offering meets all the criteria for a Showcase Page:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>Has a distinct brand identity</li>
                    <li>Targets a different audience than your Company Page</li>
                    <li>You can maintain 2-3 posts per week</li>
                </ul>
            </div>
            
            <p><strong>Why a Showcase Page?</strong></p>
            <p>Showcase Pages are ideal for highlighting specific sub-brands, divisions, or regional offices that have their own brand identity and audience. Examples include:</p>
            <ul>
                <li>Microsoft Azure (cloud division)</li>
                <li>Deloitte Consulting (major practice)</li>
                <li>Accenture Strategy (consulting practice)</li>
            </ul>
            
            <p style="margin-top: 16px;"><strong>Next Steps:</strong></p>
            <ol>
                <li>Review our Showcase Page setup checklist</li>
                <li>Plan your content calendar for the first 3 months</li>
                <li>Assign page ownership and admin roles</li>
                <li>Establish governance and approval workflows</li>
            </ol>
        `,
        actions: [
            { text: "View Setup Checklist", link: "checklists.html" },
            { text: "See Examples", link: "examples.html" },
            { text: "Plan Content Strategy", link: "content-planning.html" }
        ]
    },
    
    resultCreateProduct: {
        isResult: true,
        resultType: 'success',
        title: "Create a Product Page",
        content: `
            <p><strong>Recommendation: Create a Product Page for this offering.</strong></p>
            
            <div class="success-box" style="margin: 20px 0;">
                <p><strong>✓ Your product meets all the criteria for a Product Page:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>Standardized, repeatable offering</li>
                    <li>Buyers compare features across alternatives</li>
                    <li>You can publish product-specific content monthly</li>
                </ul>
            </div>
            
            <p><strong>Why a Product Page?</strong></p>
            <p>Product Pages are designed for tangible products or SaaS offerings where buyers make feature-driven decisions. Examples include:</p>
            <ul>
                <li>Microsoft Teams (collaboration software)</li>
                <li>Power BI (analytics platform)</li>
                <li>Visual Studio (development environment)</li>
            </ul>
            
            <p style="margin-top: 16px;"><strong>Next Steps:</strong></p>
            <ol>
                <li>Review our Product Page setup checklist</li>
                <li>Prepare product specifications and feature highlights</li>
                <li>Plan content around releases, updates, and use cases</li>
                <li>Assign a product marketing manager as page owner</li>
            </ol>
        `,
        actions: [
            { text: "View Setup Checklist", link: "checklists.html" },
            { text: "See Examples", link: "examples.html" },
            { text: "Plan Content Strategy", link: "content-planning.html" }
        ]
    },
    
    resultCreateService: {
        isResult: true,
        resultType: 'success',
        title: "Create a Service Page",
        content: `
            <p><strong>Recommendation: Create a Service Page for this practice area.</strong></p>
            
            <div class="success-box" style="margin: 20px 0;">
                <p><strong>✓ Your service meets all the criteria for a Service Page:</strong></p>
                <ul style="margin-top: 8px; margin-left: 20px;">
                    <li>Distinct practice area with unique expertise</li>
                    <li>Requires building trust through thought leadership</li>
                    <li>You'll share case studies and outcomes regularly</li>
                </ul>
            </div>
            
            <p><strong>Why a Service Page?</strong></p>
            <p>Service Pages emphasize credibility and expertise through thought leadership content. Examples include:</p>
            <ul>
                <li>Deloitte Digital (digital transformation services)</li>
                <li>Deloitte Analytics (data consulting)</li>
                <li>BrightPath SEO Services (specialized SEO practice)</li>
            </ul>
            
            <p style="margin-top: 16px;"><strong>Next Steps:</strong></p>
            <ol>
                <li>Review our Service Page setup checklist</li>
                <li>Prepare case studies and client success stories</li>
                <li>Develop a thought leadership content calendar</li>
                <li>Assign a practice leader as page owner</li>
            </ol>
        `,
        actions: [
            { text: "View Setup Checklist", link: "checklists.html" },
            { text: "See Examples", link: "examples.html" },
            { text: "Plan Content Strategy", link: "content-planning.html" }
        ]
    }
};

// Initialize the decision tree
function initDecisionTree() {
    renderNode('start');
    updateProgress();
}

// Render a decision node
function renderNode(nodeId) {
    currentNode = nodeId;
    const node = decisionTree[nodeId];
    const container = document.getElementById('decisionTreeContent');
    
    if (node.isResult) {
        renderResult(node);
    } else {
        container.innerHTML = `
            <div class="decision-node active">
                <h2 class="node-question">${node.question}</h2>
                ${node.info ? `<div class="info-box"><p>${node.info}</p></div>` : ''}
                <div class="node-options" id="nodeOptions"></div>
            </div>
        `;
        
        const optionsContainer = document.getElementById('nodeOptions');
        node.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option.text;
            btn.onclick = () => handleChoice(option);
            optionsContainer.appendChild(btn);
        });
    }
    
    // Show/hide back button on interim pages (not on results)
    const backBtn = document.getElementById('backBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (navigationStack.length > 1 && !node.isResult) {
        backBtn.style.display = 'inline-block';
    } else {
        backBtn.style.display = 'none';
    }
    
    // Only show "Start Over" on result pages
    if (node.isResult) {
        resetBtn.style.display = 'none'; // Will be shown in result page itself
    } else {
        resetBtn.style.display = 'none';
    }
    
    updateProgress();
}

// Handle user choice
function handleChoice(option) {
    decisionHistory.push({
        node: currentNode,
        choice: option.choice,
        text: option.text
    });
    
    userChoices[currentNode] = option.choice;
    
    // Add next node to navigation stack
    navigationStack.push(option.next);
    
    renderNode(option.next);
}

// Go back to previous step
function goBack() {
    if (navigationStack.length > 1) {
        // Remove current node
        navigationStack.pop();
        
        // Remove last decision from history
        if (decisionHistory.length > 0) {
            const lastDecision = decisionHistory.pop();
            delete userChoices[lastDecision.node];
        }
        
        // Get previous node and render it
        const previousNode = navigationStack[navigationStack.length - 1];
        renderNode(previousNode);
    }
}

// Render result page
function renderResult(node) {
    const container = document.getElementById('decisionTreeContent');
    
    let resultClass = 'result-card';
    if (node.resultType === 'success') {
        resultClass += ' success-box';
    }
    
    const actionsHtml = node.actions.map(action => 
        `<a href="${action.link}" class="btn btn-primary">${action.text}</a>`
    ).join('');
    
    container.innerHTML = `
        <div class="${resultClass}">
            <h3>${node.title}</h3>
            ${node.content}
            <div class="result-actions" style="padding-left: 0;">
                ${actionsHtml}
            </div>
        </div>
        
        <div style="margin-top: 32px; padding: 24px; background: var(--background-primary); border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="margin-bottom: 12px;">Your Decision Path:</h4>
            <ul style="list-style: none; padding: 0; padding-left: 0;">
                ${decisionHistory.map(h => `
                    <li style="padding: 8px 0; padding-left: 0; color: var(--text-secondary);">
                        → ${h.text}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="text-align: center; margin-top: 24px;">
            <button class="reset-btn" style="margin-right: 12px;" onclick="goBack()">← Back</button>
            <button class="reset-btn" onclick="resetTree()">Start Over</button>
        </div>
    `;
}

// Update progress bar
function updateProgress() {
    const maxSteps = 6; // Maximum possible depth of decision tree
    const currentStep = decisionHistory.length;
    const progress = Math.min((currentStep / maxSteps) * 100, 100);
    
    document.getElementById('progressBar').style.width = progress + '%';
}

// Reset the decision tree
function resetTree() {
    currentNode = 'start';
    decisionHistory = [];
    userChoices = {};
    navigationStack = ['start'];
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
    renderNode('start');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initDecisionTree);
