# Requirements Document

## Introduction

This document specifies the requirements for personalizing the Next.js 16 portfolio website to completely replace all template content with Jaspreet Singh's professional profile as a Backend/Platform Engineer. The personalization will transform the existing portfolio from the original author's content to a production-ready website showcasing Jaspreet Singh's experience, skills, projects, and professional identity.

## Glossary

- **Portfolio_System**: The Next.js 16 portfolio/blog/registry website application
- **User_Data**: Personal and professional information about Jaspreet Singh
- **Template_Content**: Original author's content including names, bios, projects, testimonials, social links, images, branding, and credits
- **Portfolio_Data_Layer**: TypeScript data files in `src/features/portfolio/data/` directory
- **Site_Configuration**: Configuration files including `src/config/site.ts` and `package.json`
- **SEO_Metadata**: Search engine optimization data including meta tags, Open Graph tags, JSON-LD schema, and sitemap
- **Content_System**: MDX-based content management system in `src/features/doc/content/`
- **Asset_System**: Images, logos, icons, and media files in `public/` and referenced URLs
- **Navigation_System**: Site navigation menus and routing configuration

## Requirements

### Requirement 1: Replace User Profile Information

**User Story:** As a visitor, I want to see Jaspreet Singh's personal information, so that I can learn about his professional identity.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display "Jaspreet Singh" as the primary name throughout the website
2. THE Portfolio_System SHALL display "Backend/Platform Engineer" as the job title
3. THE Portfolio_System SHALL display "Rajpura, Punjab, India" as the location
4. THE Portfolio_System SHALL display contact information: phone "+91-8847027963" and email "jaspreet.singh.tech@gmail.com" (base64 encoded)
5. THE Portfolio_System SHALL display education: "B.Tech in Computer Science (2020-24), CGPA: 9.1, Chitkara Institute"
6. THE Portfolio_System SHALL remove all references to the original author's name "Nguyen Chanh Dai", "Chánh Đại", "ncdai", and related variations
7. THE Portfolio_System SHALL update the bio to reflect Jaspreet Singh's professional focus on backend and platform engineering

### Requirement 2: Replace Professional Experience Data

**User Story:** As a visitor, I want to see Jaspreet Singh's work experience, so that I can understand his professional background.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display Protokol.io (Native Teams) experience with position "Backend/Full Stack Engineer" from April 2024 to Present
2. THE Portfolio_System SHALL display Protokol.io responsibilities including Stripe/Braintree integration, Node.js CLI development, WebSocket systems, SDK development, and Docker containerization
3. THE Portfolio_System SHALL display Aerchain experience with position "Backend Developer" from December 2023 to March 2024
4. THE Portfolio_System SHALL display Aerchain responsibilities including SAP integration, custom tooling, and Node.js/PostgreSQL development
5. THE Portfolio_System SHALL remove all original experience entries including Simplamo, Quaric, shadcncraft, Tung Tung, and Freelance positions
6. THE Portfolio_System SHALL mark Protokol.io as the current employer
7. THE Portfolio_System SHALL display employment types (Remote for Protokol.io, On-site for Aerchain)

### Requirement 3: Replace Projects Portfolio

**User Story:** As a visitor, I want to see Jaspreet Singh's personal projects, so that I can evaluate his technical capabilities and interests.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display "Local LLM Home Server" project with technologies: vLLM, Docker, GPU acceleration, AMD RX 6750 XT GPU
2. THE Portfolio_System SHALL display "Local LLM Home Server" project description including self-hosted LLM inference, multi-service architecture, Open WebUI integration, and dynamic model loading
3. THE Portfolio_System SHALL display "Trello Clone" project with technologies: Node.js, Express, React, Redux, PostgreSQL, Sequelize ORM, MUI (Material-UI)
4. THE Portfolio_System SHALL display "Trello Clone" project URL: https://sink.jaspreet-singh-true.workers.dev/trello-clone-vercel/test1234
5. THE Portfolio_System SHALL display "Trello Clone" project description including task management system, state management paradigms, and full-stack architecture
6. THE Portfolio_System SHALL mark "Trello Clone" as having a live deployment available
7. THE Portfolio_System SHALL remove all original projects including chanhdai.com, React Wheel Picker, ZaDark, Quaric, QABox, TaskBox, DaiChat, QLSV, Penphy, UnlimitedStudy, DMessage, and Study English
8. THE Portfolio_System SHALL display project descriptions highlighting technical implementation details and learning outcomes
9. THE Portfolio_System SHALL display project periods and current status

### Requirement 4: Replace Technical Skills Data

**User Story:** As a visitor, I want to see Jaspreet Singh's technical skills, so that I can understand his technology expertise.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display programming languages: JavaScript, TypeScript, Python, C/C++, Go, HTML, CSS
2. THE Portfolio_System SHALL display frameworks: Node.js, Express.js, React.js, Vue.js, TanStack Router, TanStack Table, TanStack Query, Shadcn/UI, Sequelize
3. THE Portfolio_System SHALL display backend technologies: Webpack, Babel, RabbitMQ, Redis, Braintree, Stripe, Postman
4. THE Portfolio_System SHALL display databases: MongoDB, MySQL, PostgreSQL
5. THE Portfolio_System SHALL display DevOps tools: Docker, Docker Compose, Git, pgAdmin, Gitea, vLLM, llama.cpp, OpenAI APIs, Claude Code, Cursor
6. THE Portfolio_System SHALL display soft skills: Problem Solving, Self-learning, Adaptability, Collaboration, Debugging
7. THE Portfolio_System SHALL remove skills not relevant to Jaspreet Singh's profile
8. THE Portfolio_System SHALL organize skills by category (Languages, Frameworks, Backend, Databases, DevOps, Soft Skills)

### Requirement 5: Update Site Configuration and Metadata

**User Story:** As a visitor, I want the website metadata to reflect Jaspreet Singh's identity, so that search engines and social media display correct information.

#### Acceptance Criteria

1. THE Portfolio_System SHALL update `package.json` author field to "Jaspreet Singh" with email "jaspreet.singh.tech@gmail.com"
2. THE Portfolio_System SHALL update `src/config/site.ts` with Jaspreet Singh's name, bio, and keywords
3. THE Portfolio_System SHALL update SEO keywords to include "Jaspreet Singh", "Backend Engineer", "Platform Engineer", "Rajpura", "Punjab"
4. THE Portfolio_System SHALL update Open Graph image references to remove original author's branding
5. THE Portfolio_System SHALL update GitHub repository references from "ncdai/chanhdai.com" to appropriate values
6. THE Portfolio_System SHALL update social media handles (X_HANDLE, GITHUB_USERNAME) to Jaspreet Singh's accounts
7. THE Portfolio_System SHALL remove sponsorship URLs and references to original author's sponsors

### Requirement 6: Replace Social Links and Contact Information

**User Story:** As a visitor, I want to access Jaspreet Singh's social media profiles, so that I can connect with him professionally.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display GitHub profile link: https://sink.jaspreet-singh-true.workers.dev/github/test1234
2. THE Portfolio_System SHALL display LinkedIn profile link: https://sink.jaspreet-singh-true.workers.dev/jaspreet-singh-linkedin/test1234
3. THE Portfolio_System SHALL display email contact: jaspreet.singh.tech@gmail.com (mailto:jaspreet.singh.tech@gmail.com)
4. THE Portfolio_System SHALL display phone contact: +91-8847027963
5. THE Portfolio_System SHALL remove all original social links including X (@iamncdai), GitHub (ncdai), LinkedIn (ncdai), daily.dev, Discord, YouTube
6. THE Portfolio_System SHALL update social link icons and labels to match Jaspreet Singh's profiles
7. IF Jaspreet Singh provides additional social profiles, THEN THE Portfolio_System SHALL include them in the social links section

### Requirement 7: Remove Template Testimonials and Awards

**User Story:** As a visitor, I want to see only authentic content, so that I can trust the information presented.

#### Acceptance Criteria

1. THE Portfolio_System SHALL remove all testimonial content from the original template
2. THE Portfolio_System SHALL remove awards data that belongs to the original author
3. THE Portfolio_System SHALL remove certifications data that belongs to the original author
4. IF Jaspreet Singh has testimonials, THEN THE Portfolio_System SHALL display them in the testimonials section
5. IF Jaspreet Singh has awards or certifications, THEN THE Portfolio_System SHALL display them in appropriate sections
6. THE Portfolio_System SHALL remove fake statistics and dummy data from all sections

### Requirement 8: Update Content System and Blog Posts

**User Story:** As a visitor, I want to see content relevant to Jaspreet Singh, so that I can learn from his insights and experiences.

#### Acceptance Criteria

1. THE Portfolio_System SHALL remove all blog posts authored by the original author from `src/features/doc/content/`
2. THE Portfolio_System SHALL update the about page content to reflect Jaspreet Singh's background
3. THE Portfolio_System SHALL update the experience page to display Jaspreet Singh's work history
4. THE Portfolio_System SHALL update the projects page to display Jaspreet Singh's personal projects
5. THE Portfolio_System SHALL remove component documentation that references the original author
6. THE Portfolio_System SHALL maintain the MDX content structure for future content additions
7. THE Portfolio_System SHALL update RSS feeds to reflect the content changes

### Requirement 9: Replace Visual Assets and Branding

**User Story:** As a visitor, I want to see visual elements that represent Jaspreet Singh, so that the website feels personalized and authentic.

#### Acceptance Criteria

1. THE Portfolio_System SHALL remove avatar images of the original author
2. THE Portfolio_System SHALL remove company logos not associated with Jaspreet Singh's employers
3. THE Portfolio_System SHALL remove project logos for projects not belonging to Jaspreet Singh
4. THE Portfolio_System SHALL remove sponsor logos and branding from README and website
5. THE Portfolio_System SHALL update favicon references to neutral or Jaspreet Singh-specific branding
6. THE Portfolio_System SHALL remove Open Graph images containing original author's content
7. THE Portfolio_System SHALL use placeholder images or generic professional imagery until Jaspreet Singh provides custom assets

### Requirement 10: Update Navigation and Routing

**User Story:** As a visitor, I want navigation to work correctly with updated content, so that I can explore the website seamlessly.

#### Acceptance Criteria

1. THE Portfolio_System SHALL update navigation menu items to reflect available content sections
2. THE Portfolio_System SHALL remove navigation links to removed sections (sponsors, testimonials if empty)
3. THE Portfolio_System SHALL ensure all navigation links point to valid routes
4. THE Portfolio_System SHALL update mobile navigation to match main navigation changes
5. THE Portfolio_System SHALL maintain responsive navigation behavior
6. THE Portfolio_System SHALL update breadcrumbs and internal links to reflect new content structure

### Requirement 11: Clean Up Unused Assets and Components

**User Story:** As a developer, I want unused assets removed, so that the codebase is clean and maintainable.

#### Acceptance Criteria

1. THE Portfolio_System SHALL remove unused image files from `public/` directory
2. THE Portfolio_System SHALL remove unused JSON registry files for removed components
3. THE Portfolio_System SHALL remove unused TypeScript data files for removed content
4. THE Portfolio_System SHALL remove unused component files associated with removed features
5. THE Portfolio_System SHALL maintain registry functionality for components that remain
6. THE Portfolio_System SHALL preserve the build system and development tooling
7. THE Portfolio_System SHALL update registry metadata in `src/registry/index.ts` to remove original author references
8. THE Portfolio_System SHALL update or remove registry examples that contain original author's personal data
9. THE Portfolio_System SHALL update or remove references to "assets.chanhdai.com" URLs throughout the codebase

### Requirement 12: Update Professional Interests and Focus Areas

**User Story:** As a visitor, I want to understand Jaspreet Singh's professional interests, so that I can identify collaboration opportunities.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display interests: Platform Engineering, Developer Tooling, Embedded Systems, Edge Computing, VMs, CI/CD
2. THE Portfolio_System SHALL highlight backend and platform engineering focus throughout the website
3. THE Portfolio_System SHALL emphasize experience with payment gateways (Stripe, Braintree)
4. THE Portfolio_System SHALL emphasize experience with build systems (Webpack, Babel)
5. THE Portfolio_System SHALL emphasize experience with real-time systems (WebSocket)
6. THE Portfolio_System SHALL remove design-focused content and emphasis from the original template

### Requirement 13: Update Academic and Research References

**User Story:** As a visitor, I want to see Jaspreet Singh's academic background, so that I can understand his educational foundation.

#### Acceptance Criteria

1. THE Portfolio_System SHALL display education: B.Tech in Computer Science from Chitkara Institute (2020-2024)
2. THE Portfolio_System SHALL display CGPA: 9.1
3. THE Portfolio_System SHALL display GitLab Projects at MountBlue (2022) reference with URL: https://sink.jaspreet-singh-true.workers.dev/gitlab-mountblue/test1234
4. THE Portfolio_System SHALL display IEEE Research: Augmented Reality in Education (2023) reference with URL: https://sink.jaspreet-singh-true.workers.dev/ieee-research/test1234
5. THE Portfolio_System SHALL display IoT Projects (2024-25) reference with URL: https://sink.jaspreet-singh-true.workers.dev/iot-projects/test1234
6. THE Portfolio_System SHALL remove all education entries for the original author
7. THE Portfolio_System SHALL remove awards and competitions not related to Jaspreet Singh

### Requirement 14: Ensure Production Readiness

**User Story:** As a developer, I want the website to be production-ready, so that it can be deployed without issues.

#### Acceptance Criteria

1. WHEN the personalization is complete, THE Portfolio_System SHALL build successfully without errors
2. WHEN the personalization is complete, THE Portfolio_System SHALL pass TypeScript type checking
3. WHEN the personalization is complete, THE Portfolio_System SHALL pass linting checks
4. THE Portfolio_System SHALL maintain responsive design across all device sizes
5. THE Portfolio_System SHALL maintain dark/light theme functionality
6. THE Portfolio_System SHALL maintain accessibility standards
7. THE Portfolio_System SHALL generate valid sitemap and robots.txt
8. THE Portfolio_System SHALL maintain PWA installability
9. THE Portfolio_System SHALL remove all traces of original template watermarks and credits
10. THE Portfolio_System SHALL update README.md to reflect Jaspreet Singh's portfolio

### Requirement 15: Maintain Technical Architecture and Functionality

**User Story:** As a developer, I want the technical architecture preserved, so that the website remains maintainable and extensible.

#### Acceptance Criteria

1. THE Portfolio_System SHALL maintain Next.js 16 App Router structure
2. THE Portfolio_System SHALL maintain Tailwind CSS v4 styling system
3. THE Portfolio_System SHALL maintain shadcn/ui component library integration
4. THE Portfolio_System SHALL maintain MDX content system functionality
5. THE Portfolio_System SHALL maintain registry build system for components
6. THE Portfolio_System SHALL maintain analytics integration (PostHog, OpenPanel) with updated configuration
7. THE Portfolio_System SHALL maintain vCard generation functionality with Jaspreet Singh's data
8. THE Portfolio_System SHALL maintain email spam protection functionality
9. THE Portfolio_System SHALL maintain all development scripts (dev, build, lint, format)
10. THE Portfolio_System SHALL maintain Git hooks and pre-commit checks
