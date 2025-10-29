// Content Ideas by Industry
const contentIdeas = {
    tech: [
        "Share a behind-the-scenes look at your product development process",
        "Highlight a technical challenge your team solved and the approach used",
        "Post about emerging technology trends and your company's perspective",
        "Feature a developer or engineer and their innovative work",
        "Share tips for using your product more effectively",
        "Announce a new feature release with a demo video",
        "Post a customer success story with measurable results",
        "Share insights from recent tech conference or webinar",
        "Ask your audience about their biggest technical challenges",
        "Celebrate a product milestone or achievement"
    ],
    consulting: [
        "Share a recent industry insight or market analysis",
        "Post a case study showing client transformation",
        "Highlight a team member's expertise in a specific domain",
        "Share thought leadership on emerging business challenges",
        "Offer practical tips for common business problems",
        "Announce a new service offering or capability",
        "Feature client testimonial or success metrics",
        "Share key takeaways from a recent project",
        "Post about your firm's methodology or approach",
        "Ask your network about current business priorities"
    ],
    finance: [
        "Share market insights and economic trends analysis",
        "Post educational content on financial planning",
        "Highlight regulatory changes and their implications",
        "Feature client success story (with permission)",
        "Share tips for financial wellness and management",
        "Announce new financial products or services",
        "Post about your team's certifications and expertise",
        "Share perspectives on investment strategies",
        "Offer guidance on tax planning or retirement",
        "Ask your audience about their financial goals"
    ],
    healthcare: [
        "Share patient success stories (with consent)",
        "Post health tips and wellness advice",
        "Highlight new treatments or technologies",
        "Feature healthcare professionals on your team",
        "Share information about preventive care",
        "Announce new services or facility updates",
        "Post about community health initiatives",
        "Share research findings or clinical insights",
        "Offer advice on navigating healthcare systems",
        "Ask your community about health priorities"
    ],
    retail: [
        "Showcase new products or collections",
        "Share customer styling tips or usage ideas",
        "Post behind-the-scenes of your business operations",
        "Highlight your brand's sustainability efforts",
        "Feature customer testimonials or user-generated content",
        "Announce sales, promotions, or exclusive offers",
        "Share the story behind your products or brand",
        "Post seasonal gift guides or recommendations",
        "Showcase your team members and their roles",
        "Ask customers about their preferences or needs"
    ],
    manufacturing: [
        "Share factory tour or production process videos",
        "Highlight product quality and testing procedures",
        "Post about innovation in manufacturing techniques",
        "Feature employee expertise and craftsmanship",
        "Share case studies of custom solutions",
        "Announce new product lines or capabilities",
        "Post about sustainability and efficiency initiatives",
        "Share industry trends and your company's adaptation",
        "Highlight safety records and workplace culture",
        "Ask about customer application challenges"
    ]
};

// Calculate posting frequency recommendation
function calculateFrequency() {
    const pageType = document.getElementById('pageType').value;
    const teamSize = document.getElementById('teamSize').value;
    const contentTime = document.getElementById('contentTime').value;

    if (!pageType || !teamSize || !contentTime) {
        return;
    }

    let recommendation = '';
    let reasoning = '';

    // Determine recommendation based on inputs
    if (pageType === 'company') {
        if (contentTime === '1-2') {
            recommendation = '1-2 posts per week';
            reasoning = 'With limited time, focus on quality over quantity. One well-crafted post per week is better than rushed daily content.';
        } else if (contentTime === '3-5') {
            recommendation = '2-3 posts per week';
            reasoning = 'You have enough time for consistent posting. Aim for Tuesday, Thursday, and optionally Monday.';
        } else {
            recommendation = '3-5 posts per week';
            reasoning = 'With dedicated resources, maintain an active presence with daily or near-daily posting.';
        }
    } else if (pageType === 'showcase') {
        if (contentTime === '1-2' || teamSize === '1') {
            recommendation = 'Use Audience Targeting on Company Page instead';
            reasoning = 'Showcase Pages require 2-3 posts per week minimum. With your resources, Audience Targeting is more sustainable.';
        } else if (contentTime === '3-5') {
            recommendation = '2-3 posts per week';
            reasoning = 'This meets the minimum for Showcase Pages. Ensure you can maintain this cadence consistently.';
        } else {
            recommendation = '3-4 posts per week';
            reasoning = 'Strong resources allow for robust Showcase Page presence with frequent, targeted content.';
        }
    } else if (pageType === 'product') {
        if (contentTime === '1-2') {
            recommendation = '2-4 posts per month';
            reasoning = 'Product Pages can succeed with monthly updates. Focus on feature releases, use cases, and customer stories.';
        } else if (contentTime === '3-5') {
            recommendation = '1-2 posts per week';
            reasoning = 'Regular posting keeps your product top-of-mind. Mix product updates with educational content.';
        } else {
            recommendation = '2-3 posts per week';
            reasoning = 'Frequent updates showcase product evolution and maintain strong customer engagement.';
        }
    } else if (pageType === 'service') {
        if (contentTime === '1-2') {
            recommendation = '2-3 posts per month';
            reasoning = 'Service Pages thrive on quality thought leadership. Monthly deep insights beat frequent superficial posts.';
        } else if (contentTime === '3-5') {
            recommendation = '1 post per week';
            reasoning = 'Weekly thought leadership and case studies establish your expertise effectively.';
        } else {
            recommendation = '2-3 posts per week';
            reasoning = 'Mix thought leadership, case studies, and insights to demonstrate deep expertise.';
        }
    }

    // Display result
    const resultDiv = document.getElementById('frequencyResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3 style="color: var(--linkedin-blue); margin-bottom: 12px;">Recommended Frequency: ${recommendation}</h3>
        <p style="margin-bottom: 16px;">${reasoning}</p>
        <p style="font-size: 14px; color: var(--text-secondary);"><strong>Team size:</strong> ${teamSize.replace('-', ' to ')} people | <strong>Time commitment:</strong> ${contentTime} hours/week</p>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border-color);">
            <h4 style="margin-bottom: 12px;">Next Steps:</h4>
            <ul style="padding-left: 24px; margin: 0;">
                <li>Create a content calendar for the next 4 weeks</li>
                <li>Assign content creation responsibilities to team members</li>
                <li>Set up a content approval workflow</li>
                <li>Track engagement metrics to refine your strategy</li>
            </ul>
        </div>
    `;

    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Generate content ideas based on industry
function generateIdeas() {
    const industry = document.getElementById('industrySelect').value;
    
    if (!industry) {
        document.getElementById('contentIdeas').style.display = 'none';
        return;
    }

    const ideas = contentIdeas[industry];
    const ideasDiv = document.getElementById('contentIdeas');
    
    ideasDiv.style.display = 'block';
    ideasDiv.innerHTML = `
        <h3 style="margin-bottom: 20px;">Content Ideas for ${getIndustryName(industry)}</h3>
        ${ideas.map((idea, index) => `
            <div class="posting-idea">
                <strong style="color: var(--linkedin-blue);">Idea ${index + 1}:</strong> ${idea}
            </div>
        `).join('')}
        <div class="info-box" style="margin-top: 24px;">
            <p><strong>💡 Pro Tip:</strong> Adapt these ideas to your specific brand voice and audience. Add your unique perspective or data to make each post authentic and valuable.</p>
        </div>
    `;

    ideasDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Helper function to get industry display name
function getIndustryName(key) {
    const names = {
        'tech': 'Technology/SaaS',
        'consulting': 'Consulting/Professional Services',
        'finance': 'Financial Services',
        'healthcare': 'Healthcare',
        'retail': 'Retail/E-commerce',
        'manufacturing': 'Manufacturing'
    };
    return names[key] || key;
}
