// Governance structures by organization size
const governanceStructures = {
    solopreneur: {
        title: "Solopreneur Governance",
        description: "Streamlined structure for solo entrepreneurs",
        structure: `
            <h3 style="margin-bottom: 20px;">Recommended Structure</h3>
            <div class="role-card">
                <h4 style="margin-bottom: 12px;">You wear all hats:</h4>
                <ul style="padding-left: 20px; margin: 12px 0; font-size: 14px; color: var(--text-secondary);">
                    <li><strong>Page Owner:</strong> Strategic decisions and overall management</li>
                    <li><strong>Content Creator:</strong> Write and design all posts</li>
                    <li><strong>Admin:</strong> Publish posts and respond to engagement</li>
                    <li><strong>Analyst:</strong> Track performance and adjust strategy</li>
                </ul>
            </div>

            <h4 style="margin-top: 24px; margin-bottom: 12px;">Key Considerations:</h4>
            <ul style="padding-left: 24px; color: var(--text-secondary); line-height: 1.8;">
                <li><strong>Keep it simple:</strong> Focus on one Company Page only</li>
                <li><strong>Batch content creation:</strong> Create 4-8 posts in one sitting</li>
                <li><strong>Use scheduling:</strong> Pre-schedule posts to maintain consistency</li>
                <li><strong>Realistic cadence:</strong> Aim for 1-2 posts per week maximum</li>
                <li><strong>No formal approval:</strong> You are your own approver, but consider showing drafts to a trusted advisor occasionally</li>
            </ul>

            <div class="info-box" style="margin-top: 24px;">
                <p><strong>💡 Time-Saving Tip:</strong> Repurpose your existing content (blog posts, newsletters, videos) into LinkedIn posts rather than creating everything from scratch.</p>
            </div>
        `
    },
    smb: {
        title: "SMB Governance (2-50 employees)",
        description: "Lightweight governance with clear ownership",
        structure: `
            <h3 style="margin-bottom: 20px;">Recommended Structure</h3>
            
            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Page Owner (1 person)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Marketing Manager or Communications Lead</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Content strategy, calendar planning, performance tracking, stakeholder updates</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Content Contributors (2-3 people)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Team members from marketing, sales, or product</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Draft posts, suggest topics, provide subject matter expertise</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Approver (1 person)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Marketing Director or CEO (for smaller companies)</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Final review and approval before publishing</p>
            </div>

            <h4 style="margin-top: 24px; margin-bottom: 12px;">Key Considerations:</h4>
            <ul style="padding-left: 24px; color: var(--text-secondary); line-height: 1.8;">
                <li><strong>Simple approval:</strong> Owner reviews, approver signs off (no multi-layer process)</li>
                <li><strong>Shared responsibility:</strong> Distribute content creation across team to avoid burnout</li>
                <li><strong>Weekly cadence:</strong> Aim for 2-3 posts per week on Company Page</li>
                <li><strong>One or two pages:</strong> Company Page + possibly one Showcase/Service Page if resources allow</li>
                <li><strong>Monthly check-ins:</strong> Quick 30-minute review of what's working</li>
            </ul>

            <div class="success-box" style="margin-top: 24px;">
                <p><strong>✓ SMB Success Pattern:</strong> Designate one owner, get buy-in from leadership, and rotate content creation among team members to maintain fresh perspectives.</p>
            </div>
        `
    },
    midmarket: {
        title: "Mid-Market Governance (51-500 employees)",
        description: "Structured governance with defined processes",
        structure: `
            <h3 style="margin-bottom: 20px;">Recommended Structure</h3>
            
            <div class="role-card">
                <h4 style="margin-bottom: 8px;">LinkedIn Program Lead (1 person)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Senior Marketing Manager or Social Media Director</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Overall LinkedIn strategy, governance oversight, cross-page coordination, performance reporting to leadership</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Page Owners (1 per page)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Product Marketers, Brand Managers, Practice Leads</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Individual page strategy, content calendar, team coordination, budget management</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Content Team (2-4 per page)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Content Marketers, Copywriters, Designers</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Content creation, visual design, copywriting, scheduling</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Approval Chain</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Standard posts:</strong> Manager → Page Owner</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 4px 0 0 0;"><strong>Sensitive posts:</strong> Manager → Page Owner → Legal/Compliance</p>
            </div>

            <h4 style="margin-top: 24px; margin-bottom: 12px;">Key Considerations:</h4>
            <ul style="padding-left: 24px; color: var(--text-secondary); line-height: 1.8;">
                <li><strong>Documented process:</strong> Written guidelines for page creation, content approval, brand standards</li>
                <li><strong>Regular governance:</strong> Monthly page owner meetings to share best practices</li>
                <li><strong>Page proliferation control:</strong> Require business case for new pages, program lead approval</li>
                <li><strong>Multiple pages:</strong> Company Page + 2-5 Showcase/Product/Service Pages depending on offerings</li>
                <li><strong>Content velocity:</strong> 3-5 posts per week on Company Page, 2-3 per week on Showcase Pages</li>
                <li><strong>Quarterly audits:</strong> Review all pages for performance, dormancy, duplication</li>
            </ul>

            <div class="info-box" style="margin-top: 24px;">
                <p><strong>💡 Mid-Market Best Practice:</strong> Create a shared content calendar where all page owners can see what's being posted across pages to avoid redundancy and identify collaboration opportunities.</p>
            </div>
        `
    },
    enterprise: {
        title: "Enterprise Governance (500+ employees)",
        description: "Comprehensive governance with centralized oversight",
        structure: `
            <h3 style="margin-bottom: 20px;">Recommended Structure</h3>
            
            <div class="role-card">
                <h4 style="margin-bottom: 8px;">LinkedIn Center of Excellence (3-5 people)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Corporate Marketing/Communications team</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Global strategy, governance framework, page approval, brand standards, tool procurement, training, performance analytics</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Business Unit Page Owners (10-50+)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Division Marketing Leads, Product Marketing Directors, Practice Partners</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> BU-specific page strategy, budget allocation, team management, performance against KPIs</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Regional/Local Admins</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Regional marketers or office managers</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Localized content, regional events, office-specific updates (using Audience Targeting)</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Content Teams (Varies by page)</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Specialized content creators, designers, video producers</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> High-quality content production, multi-format assets</p>
            </div>

            <div class="role-card">
                <h4 style="margin-bottom: 8px;">Governance Committee</h4>
                <p style="font-size: 14px; color: var(--text-secondary); margin: 0;"><strong>Role:</strong> Senior leaders from marketing, legal, HR, communications</p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;"><strong>Responsibilities:</strong> Policy decisions, page creation approval, major initiatives, escalation resolution</p>
            </div>

            <h4 style="margin-top: 24px; margin-bottom: 12px;">Key Considerations:</h4>
            <ul style="padding-left: 24px; color: var(--text-secondary); line-height: 1.8;">
                <li><strong>Formal governance framework:</strong> Comprehensive policy documents, page creation criteria, approval workflows</li>
                <li><strong>Centralized visibility:</strong> Dashboard tracking all pages, owners, admins, performance</li>
                <li><strong>Tiered approval:</strong> Standard (manager), Elevated (VP), Sensitive (Legal + C-suite)</li>
                <li><strong>Page portfolio management:</strong> 20-100+ pages requiring active governance to prevent sprawl</li>
                <li><strong>Mandatory training:</strong> All page owners and admins complete LinkedIn governance certification</li>
                <li><strong>Quarterly business reviews:</strong> Present page performance and strategy to senior leadership</li>
                <li><strong>Technology stack:</strong> Social media management platform, analytics tools, DAM system</li>
                <li><strong>Global coordination:</strong> Regular calls with regional page owners, shared content library</li>
            </ul>

            <div class="success-box" style="margin-top: 24px;">
                <p><strong>✓ Enterprise Success Pattern:</strong> Centralized strategy and standards with decentralized execution. The Center of Excellence sets the rules and provides support, but page owners have autonomy within guidelines.</p>
            </div>

            <div class="info-box" style="margin-top: 16px;">
                <p><strong>⚠️ Common Pitfall:</strong> Too much centralization slows content velocity. Empower page owners with clear guidelines and trust, rather than bottlenecking every decision.</p>
            </div>
        `
    }
};

// Show governance structure based on org size
function showGovernance(size) {
    // Update button states
    document.querySelectorAll('.org-size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Display governance structure
    const structure = governanceStructures[size];
    const container = document.getElementById('governanceStructure');
    
    container.innerHTML = `
        <h2 style="margin-bottom: 12px;">${structure.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 16px;">${structure.description}</p>
        ${structure.structure}
    `;
}

// Initialize with solopreneur view
document.addEventListener('DOMContentLoaded', () => {
    showGovernance('solopreneur');
});
