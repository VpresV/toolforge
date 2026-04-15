const CONFIG = {
  siteName: 'ToolForge',
  siteTagline: 'Sharp tools. Free forever.',
  siteUrl: 'https://toolforge.app',
  kofiUrl: 'https://ko-fi.com/YOUR_KOFI',
  formspreeId: 'YOUR_FORMSPREE_ID',
  workerUrl: 'https://YOUR_WORKER.YOUR_SUBDOMAIN.workers.dev',

  tools: [
    { id: 'mortgage-calculator', title: 'Mortgage Calculator', description: 'Monthly payment, total interest, and full amortization table.', category: 'finance', url: '/mortgage-calculator/', free: true, usesAI: false },
    { id: 'freelancer-rate', title: 'Freelancer Rate Calculator', description: 'Find your ideal hourly or daily rate based on your income goals.', category: 'finance', url: '/freelancer-rate/', free: true, usesAI: false },
    { id: 'thread-formatter', title: 'X / Twitter Thread Formatter', description: 'Split long text into numbered tweets with character limit tracking.', category: 'content', url: '/thread-formatter/', free: true, usesAI: false },
    { id: 'json-csv', title: 'JSON ↔ CSV Converter', description: 'Convert between JSON and CSV with live preview table.', category: 'developer', url: '/json-csv/', free: true, usesAI: false },
    { id: 'privacy-policy', title: 'Privacy Policy Generator', description: 'Generate a Privacy Policy and Terms of Service for your app or site.', category: 'developer', url: '/privacy-policy/', free: true, usesAI: true },
    { id: 'commit-writer', title: 'Commit Message Writer', description: 'Turn a description of your changes into a clean conventional commit.', category: 'developer', url: '/commit-writer/', free: true, usesAI: true },
    { id: 'meta-optimizer', title: 'SEO Meta Optimizer', description: 'Generate optimized title and meta description for any page.', category: 'content', url: '/meta-optimizer/', free: true, usesAI: true },
    { id: 'cold-email', title: 'Cold Email Personalizer', description: 'Write a personalized opening line from a LinkedIn bio or profile.', category: 'content', url: '/cold-email/', free: true, usesAI: true },
  ],
  categories: {
    finance:   { label: 'Finance',    color: 'teal' },
    developer: { label: 'Developer',  color: 'purple' },
    content:   { label: 'Content',    color: 'amber' },
  },
};