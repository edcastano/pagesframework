// Validate page name based on best practices
function validateName() {
    const name = document.getElementById('pageNameInput').value.trim();
    const pageType = document.getElementById('pageTypeSelect').value;
    const resultDiv = document.getElementById('validationResult');

    // Don't validate until we have both inputs
    if (!name || !pageType) {
        resultDiv.style.display = 'none';
        return;
    }

    const issues = [];
    const warnings = [];
    const positives = [];

    // Check length
    if (name.length < 3) {
        issues.push("Name is too short (minimum 3 characters)");
    } else if (name.length <= 25) {
        positives.push("Good length - won't truncate on mobile");
    } else if (name.length <= 40) {
        warnings.push("Name is long and may truncate on mobile views");
    } else {
        issues.push("Name is too long (will definitely truncate)");
    }

    // Check for ALL CAPS
    if (name === name.toUpperCase() && name.length > 3) {
        issues.push("Avoid using ALL CAPS");
    } else {
        positives.push("Appropriate capitalization");
    }

    // Check for special characters
    const specialChars = /[™®©!@#$%^*()_+=[\]{}<>?~`]/;
    if (specialChars.test(name)) {
        issues.push("Contains special characters (™, ®, ©, etc.) - remove these");
    }

    // Check for redundant words
    const redundantWords = ['official', 'page', 'linkedin', 'inc.', 'llc', 'ltd.'];
    const lowerName = name.toLowerCase();
    redundantWords.forEach(word => {
        if (lowerName.includes(word)) {
            warnings.push(`Contains redundant word "${word}" - consider removing unless legally required`);
        }
    });

    // Check word count
    const wordCount = name.split(/\s+/).length;
    if (wordCount <= 4) {
        positives.push("Concise name (2-4 words is ideal)");
    } else if (wordCount > 6) {
        warnings.push("Name is wordy - consider shortening for clarity");
    }

    // Page-type specific validation
    if (pageType === 'company') {
        if (name.includes(' - ') || name.includes(' | ')) {
            warnings.push("Company pages should use simple brand name without separators");
        }
        positives.push("Format appropriate for Company Page");
    } else if (pageType === 'showcase') {
        if (!name.includes(' ') && wordCount < 2) {
            warnings.push("Showcase pages typically include parent company + sub-brand");
        }
        positives.push("Format appropriate for Showcase Page");
    } else if (pageType === 'product') {
        positives.push("Product page format validated");
    } else if (pageType === 'service') {
        positives.push("Service page format validated");
    }

    // Check for multiple consecutive spaces
    if (/\s{2,}/.test(name)) {
        issues.push("Contains multiple consecutive spaces");
    }

    // Check if it starts or ends with space
    if (name !== name.trim()) {
        issues.push("Name has leading or trailing spaces");
    }

    // Determine overall status
    let status = 'valid';
    let statusIcon = '✓';
    let statusText = 'Great name!';
    let statusColor = 'var(--success-green)';

    if (issues.length > 0) {
        status = 'invalid';
        statusIcon = '✗';
        statusText = 'Issues found';
        statusColor = 'var(--error-red)';
    } else if (warnings.length > 0) {
        status = 'warning';
        statusIcon = '⚠';
        statusText = 'Suggestions for improvement';
        statusColor = 'var(--warning-orange)';
    }

    // Build result HTML
    let html = `
        <h3 style="color: ${statusColor}; margin-bottom: 16px;">
            ${statusIcon} ${statusText}
        </h3>
        <p style="font-size: 18px; margin-bottom: 20px;"><strong>"${name}"</strong> for ${getPageTypeLabel(pageType)}</p>
    `;

    if (issues.length > 0) {
        html += `
            <div style="margin-bottom: 16px;">
                <h4 style="color: var(--error-red); margin-bottom: 8px;">❌ Issues to Fix:</h4>
                <ul class="issue-list">
                    ${issues.map(issue => `<li class="issue-item"><span>•</span><span>${issue}</span></li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (warnings.length > 0) {
        html += `
            <div style="margin-bottom: 16px;">
                <h4 style="color: var(--warning-orange); margin-bottom: 8px;">⚠️ Suggestions:</h4>
                <ul class="issue-list">
                    ${warnings.map(warning => `<li class="issue-item"><span>•</span><span>${warning}</span></li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (positives.length > 0) {
        html += `
            <div>
                <h4 style="color: var(--success-green); margin-bottom: 8px;">✓ Strengths:</h4>
                <ul class="issue-list">
                    ${positives.map(positive => `<li class="issue-item"><span>•</span><span>${positive}</span></li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Add recommended format guidance
    if (issues.length > 0 || warnings.length > 0) {
        html += `
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-color);">
                <h4 style="margin-bottom: 12px;">💡 Recommended Format:</h4>
                <p style="font-size: 14px; color: var(--text-secondary);">${getRecommendedFormat(pageType)}</p>
            </div>
        `;
    }

    // Display result
    resultDiv.className = `validation-result ${status}`;
    resultDiv.innerHTML = html;
}

// Helper function to get page type label
function getPageTypeLabel(type) {
    const labels = {
        'company': 'Company Page',
        'showcase': 'Showcase Page',
        'product': 'Product Page',
        'service': 'Service Page'
    };
    return labels[type] || type;
}

// Helper function to get recommended format
function getRecommendedFormat(type) {
    const formats = {
        'company': 'Use your official company name: "Acme Corporation" or "TechStart"',
        'showcase': 'Use format: [Company Name] [Sub-brand]: "Microsoft Azure" or "Deloitte Consulting"',
        'product': 'Use format: [Product Name] or [Company] [Product]: "Slack" or "Adobe Photoshop"',
        'service': 'Use format: [Company] [Service Area]: "Deloitte Digital" or "KPMG Cybersecurity"'
    };
    return formats[type] || '';
}
