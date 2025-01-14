export const servicesData = [
  {
    slug: "custom-development",
    title: "Custom Development",
    subtitle: "Tailored software solutions to meet your unique business needs.",
    overview:
      "We specialize in creating custom software solutions that align with your business goals, ensuring scalability, security, and performance.",
    processes: [
      { number: 1, title: "Requirement Analysis" },
      { number: 2, title: "Design & Prototyping" },
      { number: 3, title: "Development & Testing" },
      { number: 4, title: "Deployment & Maintenance" },
    ],
    technologies: [
      { category: "Frontend", items: ["React", "Angular", "Vue.js"] },
      { category: "Backend", items: ["Node.js", "Python", "Java"] },
      { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
      { category: "DevOps", items: ["Docker", "Kubernetes", "Jenkins"] },
    ],
    benefits: [
      { title: "Scalable solutions" },
      { title: "Customized features" },
      { title: "High performance" },
      { title: "Seamless integration" },
    ],
    imageUrl: "https://example.com/custom-development.jpg",
    subServices: [
      {
        slug: "web-development",
        title: "Web Development",
        subtitle:
          "Build responsive and user-friendly websites tailored to your business needs.",
        overview:
          "We create websites that are visually appealing, functional, and optimized for performance across all devices.",
        processes: [
          { number: 1, title: "Requirement Gathering" },
          { number: 2, title: "UI/UX Design" },
          { number: 3, title: "Development & Testing" },
          { number: 4, title: "Launch & Maintenance" },
        ],
        technologies: [
          { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
          { category: "Frameworks", items: ["React", "Angular", "Vue.js"] },
          { category: "Backend", items: ["Node.js", "Django", "Laravel"] },
        ],
        benefits: [
          { title: "Responsive design" },
          { title: "Cross-browser compatibility" },
          { title: "SEO-friendly" },
          { title: "Fast loading times" },
        ],
        imageUrl: "https://example.com/web-development.jpg",
      },
      {
        slug: "mobile-development",
        title: "Mobile Development",
        subtitle:
          "Create powerful mobile applications for iOS and Android platforms.",
        overview:
          "We develop mobile apps that deliver seamless user experiences and meet the unique needs of your business.",
        processes: [
          { number: 1, title: "Concept & Strategy" },
          { number: 2, title: "UI/UX Design" },
          { number: 3, title: "Development & Testing" },
          { number: 4, title: "Launch & Updates" },
        ],
        technologies: [
          { category: "Platforms", items: ["iOS", "Android"] },
          {
            category: "Frameworks",
            items: ["React Native", "Flutter", "Swift", "Kotlin"],
          },
          { category: "Backend", items: ["Firebase", "Node.js", "GraphQL"] },
        ],
        benefits: [
          { title: "Cross-platform compatibility" },
          { title: "High performance" },
          { title: "User-friendly interfaces" },
          { title: "Regular updates" },
        ],
        imageUrl: "https://example.com/mobile-development.jpg",
      },
      {
        slug: "crm-development",
        title: "CRM Development",
        subtitle:
          "Develop custom CRM solutions to streamline customer relationship management.",
        overview:
          "We build CRM systems that help businesses manage customer interactions, improve sales, and enhance customer satisfaction.",
        processes: [
          { number: 1, title: "Requirement Analysis" },
          { number: 2, title: "System Design" },
          { number: 3, title: "Development & Testing" },
          { number: 4, title: "Deployment & Training" },
        ],
        technologies: [
          {
            category: "Platforms",
            items: ["Salesforce", "HubSpot", "Zoho CRM"],
          },
          {
            category: "Frameworks",
            items: ["Django", "Laravel", "Ruby on Rails"],
          },
          { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        ],
        benefits: [
          { title: "Centralized customer data" },
          { title: "Improved sales tracking" },
          { title: "Enhanced customer support" },
          { title: "Scalable solutions" },
        ],
        imageUrl: "https://example.com/crm-development.jpg",
      },
      {
        slug: "quality-assurance",
        title: "Quality Assurance",
        subtitle:
          "Ensure your software is bug-free and performs optimally with rigorous testing.",
        overview:
          "We provide comprehensive QA services to ensure your software meets the highest standards of quality and reliability.",
        processes: [
          { number: 1, title: "Test Planning" },
          { number: 2, title: "Test Case Development" },
          { number: 3, title: "Execution & Reporting" },
          { number: 4, title: "Bug Fixing & Retesting" },
        ],
        technologies: [
          {
            category: "Testing Tools",
            items: ["Selenium", "JIRA", "TestRail"],
          },
          { category: "Automation", items: ["Cypress", "Appium", "Postman"] },
          {
            category: "Performance",
            items: ["JMeter", "LoadRunner", "Gatling"],
          },
        ],
        benefits: [
          { title: "Bug-free software" },
          { title: "Improved performance" },
          { title: "Faster time-to-market" },
          { title: "Enhanced user experience" },
        ],
        imageUrl: "https://example.com/quality-assurance.jpg",
      },
      {
        slug: "customization",
        title: "Customization",
        subtitle:
          "Tailor existing software to meet your specific business requirements.",
        overview:
          "We customize off-the-shelf software to align with your unique business processes and workflows.",
        processes: [
          { number: 1, title: "Requirement Analysis" },
          { number: 2, title: "Customization Planning" },
          { number: 3, title: "Implementation & Testing" },
          { number: 4, title: "Deployment & Support" },
        ],
        technologies: [
          {
            category: "Platforms",
            items: ["WordPress", "Shopify", "Salesforce"],
          },
          { category: "Frameworks", items: ["React", "Angular", "Vue.js"] },
          { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        ],
        benefits: [
          { title: "Tailored solutions" },
          { title: "Improved efficiency" },
          { title: "Seamless integration" },
          { title: "Cost-effective" },
        ],
        imageUrl: "https://example.com/customization.jpg",
      },
      {
        slug: "automation",
        title: "Automation",
        subtitle:
          "Automate repetitive tasks to improve efficiency and reduce errors.",
        overview:
          "We develop automation solutions to streamline your business processes and increase productivity.",
        processes: [
          { number: 1, title: "Requirement Analysis" },
          { number: 2, title: "Automation Design" },
          { number: 3, title: "Development & Testing" },
          { number: 4, title: "Deployment & Monitoring" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["UiPath", "Automation Anywhere", "Blue Prism"],
          },
          {
            category: "Frameworks",
            items: ["Python", "Selenium", "Power Automate"],
          },
          {
            category: "Integration",
            items: ["Zapier", "Integromat", "API Integration"],
          },
        ],
        benefits: [
          { title: "Increased efficiency" },
          { title: "Reduced errors" },
          { title: "Cost savings" },
          { title: "Scalable solutions" },
        ],
        imageUrl: "https://example.com/automation.jpg",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle:
      "Boost your online presence and drive business growth with our digital marketing services.",
    overview:
      "We offer comprehensive digital marketing solutions to help you reach your target audience, increase brand visibility, and drive conversions.",
    processes: [
      { number: 1, title: "Strategy Development" },
      { number: 2, title: "Campaign Execution" },
      { number: 3, title: "Performance Analysis" },
      { number: 4, title: "Optimization & Scaling" },
    ],
    technologies: [
      { category: "SEO Tools", items: ["Ahrefs", "SEMrush", "Moz"] },
      {
        category: "Social Media",
        items: ["Hootsuite", "Buffer", "Sprout Social"],
      },
      {
        category: "Analytics",
        items: ["Google Analytics", "Hotjar", "Mixpanel"],
      },
      {
        category: "Ad Platforms",
        items: ["Google Ads", "Facebook Ads", "LinkedIn Ads"],
      },
    ],
    benefits: [
      { title: "Increased brand visibility" },
      { title: "Higher conversion rates" },
      { title: "Targeted audience reach" },
      { title: "Data-driven strategies" },
    ],
    imageUrl: "https://example.com/digital-marketing.jpg",
    subServices: [
      {
        slug: "search-engine-marketing",
        title: "Search Engine Marketing",
        subtitle:
          "Drive traffic to your website through paid search engine advertising.",
        overview:
          "We create and manage SEM campaigns to help you reach your target audience and achieve your marketing goals.",
        processes: [
          { number: 1, title: "Keyword Research" },
          { number: 2, title: "Campaign Setup" },
          { number: 3, title: "Ad Creation & Optimization" },
          { number: 4, title: "Performance Tracking" },
        ],
        technologies: [
          { category: "Tools", items: ["Google Ads", "Bing Ads", "SEMrush"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Hotjar", "Tableau"],
          },
        ],
        benefits: [
          { title: "Increased website traffic" },
          { title: "Higher ROI" },
          { title: "Targeted advertising" },
          { title: "Real-time performance tracking" },
        ],
        imageUrl: "https://example.com/sem.jpg",
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        subtitle:
          "Engage your audience and grow your brand on social media platforms.",
        overview:
          "We develop and execute social media strategies to help you connect with your audience and build brand loyalty.",
        processes: [
          { number: 1, title: "Strategy Development" },
          { number: 2, title: "Content Creation" },
          { number: 3, title: "Campaign Execution" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          {
            category: "Platforms",
            items: ["Facebook", "Instagram", "LinkedIn"],
          },
          {
            category: "Tools",
            items: ["Hootsuite", "Buffer", "Sprout Social"],
          },
          {
            category: "Analytics",
            items: [
              "Google Analytics",
              "Facebook Insights",
              "Sprout Analytics",
            ],
          },
        ],
        benefits: [
          { title: "Increased brand awareness" },
          { title: "Higher engagement rates" },
          { title: "Improved customer loyalty" },
          { title: "Data-driven strategies" },
        ],
        imageUrl: "https://example.com/social-media-marketing.jpg",
      },
      {
        slug: "marketing-strategy",
        title: "Marketing Strategy",
        subtitle:
          "Develop a comprehensive marketing plan to achieve your business goals.",
        overview:
          "We create tailored marketing strategies to help you reach your target audience and achieve your business objectives.",
        processes: [
          { number: 1, title: "Market Research" },
          { number: 2, title: "Strategy Development" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Optimization" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["Google Analytics", "SEMrush", "HubSpot"],
          },
          {
            category: "Frameworks",
            items: [
              "SWOT Analysis",
              "PEST Analysis",
              "Customer Journey Mapping",
            ],
          },
        ],
        benefits: [
          { title: "Clear marketing goals" },
          { title: "Targeted campaigns" },
          { title: "Improved ROI" },
          { title: "Data-driven decisions" },
        ],
        imageUrl: "https://example.com/marketing-strategy.jpg",
      },
      {
        slug: "ppc-management",
        title: "Pay Per Click (PPC) Management",
        subtitle: "Optimize your PPC campaigns for maximum ROI.",
        overview:
          "We manage and optimize PPC campaigns to ensure you get the best return on your advertising investment.",
        processes: [
          { number: 1, title: "Campaign Setup" },
          { number: 2, title: "Ad Creation" },
          { number: 3, title: "Performance Monitoring" },
          { number: 4, title: "Optimization" },
        ],
        technologies: [
          {
            category: "Platforms",
            items: ["Google Ads", "Bing Ads", "Facebook Ads"],
          },
          {
            category: "Tools",
            items: ["SEMrush", "Google Analytics", "Hotjar"],
          },
        ],
        benefits: [
          { title: "Higher ROI" },
          { title: "Targeted advertising" },
          { title: "Real-time performance tracking" },
          { title: "Cost-effective campaigns" },
        ],
        imageUrl: "https://example.com/ppc-management.jpg",
      },
      {
        slug: "e-commerce-marketing",
        title: "E-Commerce Marketing",
        subtitle: "Increase sales and visibility for your online store.",
        overview:
          "We provide e-commerce marketing solutions to help you drive traffic, increase conversions, and grow your online business.",
        processes: [
          { number: 1, title: "Market Research" },
          { number: 2, title: "Campaign Setup" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Optimization" },
        ],
        technologies: [
          {
            category: "Platforms",
            items: ["Shopify", "WooCommerce", "Magento"],
          },
          {
            category: "Tools",
            items: ["Google Ads", "Facebook Ads", "SEMrush"],
          },
          {
            category: "Analytics",
            items: ["Google Analytics", "Hotjar", "Tableau"],
          },
        ],
        benefits: [
          { title: "Increased online sales" },
          { title: "Higher conversion rates" },
          { title: "Improved customer retention" },
          { title: "Data-driven strategies" },
        ],
        imageUrl: "https://example.com/ecommerce-marketing.jpg",
      },
      {
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization",
        subtitle:
          "Improve your website's conversion rates through data-driven strategies.",
        overview:
          "We analyze and optimize your website to increase conversions and maximize your ROI.",
        processes: [
          { number: 1, title: "Data Collection" },
          { number: 2, title: "Analysis & Testing" },
          { number: 3, title: "Implementation" },
          { number: 4, title: "Monitoring & Optimization" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["Google Analytics", "Hotjar", "Optimizely"],
          },
          {
            category: "Frameworks",
            items: ["A/B Testing", "Heatmaps", "User Journey Analysis"],
          },
        ],
        benefits: [
          { title: "Higher conversion rates" },
          { title: "Improved user experience" },
          { title: "Data-driven decisions" },
          { title: "Increased ROI" },
        ],
        imageUrl: "https://example.com/conversion-rate-optimization.jpg",
      },
      {
        slug: "youtube-channel",
        title: "YouTube Channel Marketing",
        subtitle:
          "Grow your YouTube channel and engage your audience with targeted marketing.",
        overview:
          "We help you grow your YouTube channel through targeted marketing strategies and engaging content.",
        processes: [
          { number: 1, title: "Content Strategy" },
          { number: 2, title: "Video Production" },
          { number: 3, title: "Promotion & Optimization" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["YouTube Studio", "TubeBuddy", "VidIQ"],
          },
          {
            category: "Analytics",
            items: ["YouTube Analytics", "Google Analytics", "Social Blade"],
          },
        ],
        benefits: [
          { title: "Increased subscribers" },
          { title: "Higher engagement rates" },
          { title: "Improved video rankings" },
          { title: "Data-driven strategies" },
        ],
        imageUrl: "https://example.com/youtube-marketing.jpg",
      },
      {
        slug: "content-writing-and-marketing",
        title: "Content Writing and Marketing",
        subtitle:
          "Create compelling content that drives traffic and conversions.",
        overview:
          "We create high-quality content that resonates with your audience and drives results.",
        processes: [
          { number: 1, title: "Content Strategy" },
          { number: 2, title: "Content Creation" },
          { number: 3, title: "Distribution & Promotion" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["Grammarly", "Hemingway", "Google Docs"],
          },
          { category: "Platforms", items: ["WordPress", "Medium", "HubSpot"] },
        ],
        benefits: [
          { title: "Increased website traffic" },
          { title: "Higher engagement rates" },
          { title: "Improved SEO rankings" },
          { title: "Data-driven content strategies" },
        ],
        imageUrl: "https://example.com/content-writing.jpg",
      },
      {
        slug: "app-store-optimization-and-marketing",
        title: "App Store Optimization and Marketing",
        subtitle:
          "Increase app downloads and visibility through ASO and marketing strategies.",
        overview:
          "We optimize your app store presence and implement marketing strategies to increase downloads and visibility.",
        processes: [
          { number: 1, title: "Keyword Research" },
          { number: 2, title: "App Store Optimization" },
          { number: 3, title: "Campaign Execution" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["App Store Connect", "Google Play Console", "Sensor Tower"],
          },
          {
            category: "Analytics",
            items: ["Google Analytics", "Firebase", "App Annie"],
          },
        ],
        benefits: [
          { title: "Increased app downloads" },
          { title: "Higher visibility" },
          { title: "Improved user ratings" },
          { title: "Data-driven strategies" },
        ],
        imageUrl: "https://example.com/app-store-optimization.jpg",
      },
      {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization (SEO)",
        subtitle:
          "Improve your website's search engine rankings and organic traffic.",
        overview:
          "We optimize your website to rank higher on search engines and drive organic traffic.",
        processes: [
          { number: 1, title: "Keyword Research" },
          { number: 2, title: "On-Page Optimization" },
          { number: 3, title: "Off-Page Optimization" },
          { number: 4, title: "Performance Tracking" },
        ],
        technologies: [
          { category: "Tools", items: ["Ahrefs", "SEMrush", "Moz"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Google Search Console", "Hotjar"],
          },
        ],
        benefits: [
          { title: "Higher search engine rankings" },
          { title: "Increased organic traffic" },
          { title: "Improved user experience" },
          { title: "Data-driven strategies" },
        ],
        imageUrl: "https://example.com/seo.jpg",
      },
    ],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    subtitle:
      "Deliver exceptional customer experiences with our comprehensive support services.",
    overview:
      "We provide 24/7 customer support solutions to help you build strong relationships with your customers and improve satisfaction.",
    processes: [
      { number: 1, title: "Requirement Analysis" },
      { number: 2, title: "Support Setup" },
      { number: 3, title: "Training & Execution" },
      { number: 4, title: "Performance Monitoring" },
    ],
    technologies: [
      {
        category: "Support Tools",
        items: ["Zendesk", "Freshdesk", "Intercom"],
      },
      { category: "CRM", items: ["Salesforce", "HubSpot", "Zoho CRM"] },
      {
        category: "Communication",
        items: ["Slack", "Microsoft Teams", "Zoom"],
      },
      {
        category: "Analytics",
        items: ["Google Analytics", "Zendesk Explore", "Tableau"],
      },
    ],
    benefits: [
      { title: "24/7 availability" },
      { title: "Improved customer satisfaction" },
      { title: "Efficient issue resolution" },
      { title: "Scalable support solutions" },
    ],
    imageUrl: "https://example.com/customer-support.jpg",
    subServices: [
      {
        slug: "chat-support",
        title: "Chat Support",
        subtitle: "Provide real-time assistance to customers through chat.",
        overview:
          "We offer chat support services to help your customers get instant answers to their queries.",
        processes: [
          { number: 1, title: "Chat Setup" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["Zendesk Chat", "Intercom", "LiveChat"],
          },
          {
            category: "Analytics",
            items: ["Google Analytics", "Zendesk Explore", "Tableau"],
          },
        ],
        benefits: [
          { title: "Instant customer support" },
          { title: "Improved customer satisfaction" },
          { title: "Efficient issue resolution" },
          { title: "Scalable solutions" },
        ],
        imageUrl: "https://example.com/chat-support.jpg",
      },
      {
        slug: "email-support",
        title: "E-mail Support",
        subtitle: "Handle customer inquiries and issues via email.",
        overview:
          "We provide email support services to ensure your customers receive timely and accurate responses.",
        processes: [
          { number: 1, title: "Email Setup" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          { category: "Tools", items: ["Zendesk", "Freshdesk", "Help Scout"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Zendesk Explore", "Tableau"],
          },
        ],
        benefits: [
          { title: "Timely responses" },
          { title: "Improved customer satisfaction" },
          { title: "Efficient issue resolution" },
          { title: "Scalable solutions" },
        ],
        imageUrl: "https://example.com/email-support.jpg",
      },
      {
        slug: "crm-support",
        title: "CRM S upport",
        subtitle:
          "Manage customer relationships and support through CRM tools.",
        overview:
          "We provide CRM support services to help you manage customer interactions and improve relationships.",
        processes: [
          { number: 1, title: "CRM Setup" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          { category: "Tools", items: ["Salesforce", "HubSpot", "Zoho CRM"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Salesforce Reports", "Tableau"],
          },
        ],
        benefits: [
          { title: "Centralized customer data" },
          { title: "Improved customer relationships" },
          { title: "Efficient issue resolution" },
          { title: "Scalable solutions" },
        ],
        imageUrl: "https://example.com/crm-support.jpg",
      },
      {
        slug: "appointment-setting",
        title: "Appointment Setting",
        subtitle: "Schedule and manage appointments for your customers.",
        overview:
          "We provide appointment setting services to help you manage customer schedules efficiently.",
        processes: [
          { number: 1, title: "Appointment Setup" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          {
            category: "Tools",
            items: ["Calendly", "Acuity Scheduling", "Zoho Bookings"],
          },
          {
            category: "Analytics",
            items: ["Google Analytics", "Zendesk Explore", "Tableau"],
          },
        ],
        benefits: [
          { title: "Efficient scheduling" },
          { title: "Improved customer satisfaction" },
          { title: "Reduced no-shows" },
          { title: "Scalable solutions" },
        ],
        imageUrl: "https://example.com/appointment-setting.jpg",
      },
      {
        slug: "virtual-assistant",
        title: "Virtual Assistant",
        subtitle:
          "Provide virtual assistance to handle customer queries and tasks.",
        overview:
          "We offer virtual assistant services to help you manage customer inquiries and tasks efficiently.",
        processes: [
          { number: 1, title: "Task Analysis" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          { category: "Tools", items: ["Zendesk", "Freshdesk", "Intercom"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Zendesk Explore", "Tableau"],
          },
        ],
        benefits: [
          { title: "Efficient task management" },
          { title: "Improved customer satisfaction" },
          { title: "Cost-effective solutions" },
          { title: "Scalable support" },
        ],
        imageUrl: "https://example.com/virtual-assistant.jpg",
      },
      {
        slug: "front-desk",
        title: "Front Desk Support",
        subtitle:
          "Offer front desk support services to manage customer interactions.",
        overview:
          "We provide front desk support services to help you manage customer interactions and inquiries.",
        processes: [
          { number: 1, title: "Support Setup" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          { category: "Tools", items: ["Zendesk", "Freshdesk", "Intercom"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Zendesk Explore", "Tableau"],
          },
        ],
        benefits: [
          { title: "Efficient customer interactions" },
          { title: "Improved customer satisfaction" },
          { title: "Scalable solutions" },
          { title: "Cost-effective support" },
        ],
        imageUrl: "https://example.com/front-desk-support.jpg",
      },
      {
        slug: "virtual-order-taker",
        title: "Virtual Order Taker",
        subtitle: "Handle customer orders and inquiries virtually.",
        overview:
          "We provide virtual order-taking services to help you manage customer orders and inquiries efficiently.",
        processes: [
          { number: 1, title: "Order Setup" },
          { number: 2, title: "Agent Training" },
          { number: 3, title: "Execution & Monitoring" },
          { number: 4, title: "Performance Analysis" },
        ],
        technologies: [
          { category: "Tools", items: ["Zendesk", "Freshdesk", "Intercom"] },
          {
            category: "Analytics",
            items: ["Google Analytics", "Zendesk Explore", "Tableau"],
          },
        ],
        benefits: [
          { title: "Efficient order management" },
          { title: "Improved customer satisfaction" },
          { title: "Scalable solutions" },
          { title: "Cost-effective support" },
        ],
        imageUrl: "https://example.com/virtual-order-taker.jpg",
      },
    ],
  },
];
