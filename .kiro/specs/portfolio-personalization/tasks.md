# Implementation Plan: Portfolio Personalization

## Overview

This implementation plan breaks down the portfolio personalization into actionable tasks following the 6-phase approach from the design document. The plan covers all 15 requirements and focuses on systematic data replacement across configuration, data, content, and asset layers while preserving the Next.js 16 technical architecture.

## Tasks

### Phase 1: Configuration Layer Updates

- [ ] 1. Update package.json with Jaspreet Singh's information
  - Update `name` field to appropriate portfolio name
  - Update `description` to reflect Jaspreet Singh's portfolio
  - Update `author` object with name "Jaspreet Singh" and email "jaspreet.singh.tech@gmail.com"
  - Update `repository` URL if applicable
  - _Requirements: 5.1, 14.10_

- [ ] 2. Update site configuration file
  - Modify `src/config/site.ts` to update site constants
  - Update `SITE_INFO.url` from "https://chanhdai.com" to Jaspreet Singh's domain (or appropriate value)
  - Update `SITE_INFO` with Jaspreet Singh's name, description, and keywords (these pull from USER object)
  - Update `X_HANDLE` to Jaspreet Singh's X/Twitter handle or remove if not applicable
  - Update `GITHUB_USERNAME` to Jaspreet Singh's GitHub username or appropriate value
  - Update `SOURCE_CODE_GITHUB_REPO` from "ncdai/chanhdai.com" to appropriate repository
  - Update `SOURCE_CODE_GITHUB_URL` to match the new repository
  - Remove or update `SPONSORSHIP_URL` as needed
  - Update `UTM_PARAMS.utm_source` from "chanhdai.com" to appropriate value
  - Adjust `MAIN_NAV` to remove "Sponsors" section if not applicable
  - _Requirements: 5.2, 5.3, 5.5, 5.6, 5.7, 10.2_

- [ ] 3. Update environment configuration
  - Review `.env.example` for any author-specific configuration
  - Update `APP_URL` to Jaspreet Singh's domain (if different)
  - Update analytics keys (PostHog, OpenPanel) or remove if not using
  - _Requirements: 14.6_

### Phase 2: Data Layer Replacement

- [ ] 4. Replace user profile data
  - Update `src/features/portfolio/data/user.ts` with Jaspreet Singh's information
  - Replace `firstName`, `lastName`, `displayName` with "Jaspreet", "Singh", "Jaspreet Singh"
  - Update `username` to appropriate value (e.g., "jaspreetsingh")
  - Change `jobTitle` to "Backend/Platform Engineer"
  - Update `bio` and `flipSentences` to reflect backend engineering focus
  - Change `address` to "Rajpura, Punjab, India"
  - Update `phoneNumber` with base64 encoded value: "Kzk0LTg4NDcwMjc5NjM=" (decodes to "+91-8847027963")
  - Update `email` with base64 encoded value: "amFzcHJlZXQuc2luZ2gudGVjaEBnbWFpbC5jb20=" (decodes to "jaspreet.singh.tech@gmail.com")
  - Replace `avatar` and `ogImage` URLs with placeholders or remove
  - Update `keywords` array with Jaspreet Singh-related terms: "Jaspreet Singh", "Backend Engineer", "Platform Engineer", "Rajpura", "Punjab", "Stripe Integration", "Braintree Integration", "Node.js Developer", "Go Developer", "Docker", "Webpack"
  - Remove `namePronunciationUrl` or update if provided
  - Update `timeZone` to "Asia/Kolkata"
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

- [ ] 5. Replace professional experience data
  - Update `src/features/portfolio/data/experiences.tsx` with Jaspreet Singh's work history
  - Add Protokol.io experience with position "Backend/Full Stack Engineer" (Apr 2024 - Present)
  - Add Aerchain experience with position "Backend Developer" (Dec 2023 - Mar 2024)
  - Add education section with Chitkara Institute details (2020-2024, CGPA: 9.1)
  - Mark Protokol.io as current employer
  - Remove all original experiences (Simplamo, Quaric, shadcncraft, Tung Tung, Freelance)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [ ] 6. Replace projects portfolio data
  - Update `src/features/portfolio/data/projects.ts` with Jaspreet Singh's projects
  - Add "Local LLM Home Server" project with vLLM, Docker, GPU acceleration technologies
  - Add "Trello Clone" project with Node.js, Express, React, PostgreSQL technologies
  - Update "Trello Clone" project URL: https://sink.jaspreet-singh-true.workers.dev/trello-clone-vercel/test1234
  - Mark "Trello Clone" as having live deployment available
  - Remove all original projects (chanhdai.com, React Wheel Picker, ZaDark, etc.)
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9_

- [ ] 7. Replace technical skills data
  - Update `src/features/portfolio/data/tech-stack.ts` with Jaspreet Singh's technologies
  - Add programming languages: JavaScript, TypeScript, Python, C/C++, Go, HTML, CSS
  - Add frameworks: Node.js, Express.js, React.js, Vue.js, TanStack Router/Table/Query, Shadcn/UI, Sequelize
  - Add backend tools: Webpack, Babel, RabbitMQ, Redis, Braintree, Stripe, Postman
  - Add databases: MongoDB, MySQL, PostgreSQL
  - Add DevOps tools: Docker, Docker Compose, Git, vLLM, llama.cpp, OpenAI APIs
  - Add soft skills: Problem Solving, Self-learning, Adaptability, Collaboration, Debugging
  - Remove technologies not relevant to Jaspreet Singh's profile
  - Organize skills by appropriate categories
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [ ] 8. Replace social links and contact information
  - Update `src/features/portfolio/data/social-links.ts` with Jaspreet Singh's links
  - Add GitHub profile link: https://sink.jaspreet-singh-true.workers.dev/github/test1234
  - Add LinkedIn profile link: https://sink.jaspreet-singh-true.workers.dev/jaspreet-singh-linkedin/test1234
  - Add email contact: mailto:jaspreet.singh.tech@gmail.com
  - Remove all original social links (X, daily.dev, Discord, YouTube)
  - Update social link icons and labels to match Jaspreet Singh's profiles
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [ ] 9. Update awards, certifications, and testimonials
  - Update `src/features/portfolio/data/awards.ts` with academic references
  - Add GitLab Projects at MountBlue (2022) with URL: https://sink.jaspreet-singh-true.workers.dev/gitlab-mountblue/test1234
  - Add IEEE Research: Augmented Reality in Education (2023) with URL: https://sink.jaspreet-singh-true.workers.dev/ieee-research/test1234
  - Add IoT Projects (2024-25) with URL: https://sink.jaspreet-singh-true.workers.dev/iot-projects/test1234
  - Remove all original awards
  - Update `src/features/portfolio/data/certifications.ts` - remove original certifications
  - Update `src/features/portfolio/data/testimonials.ts` - remove original testimonials
  - Update `src/features/portfolio/data/bookmarks.tsx` - review and update or remove bookmarks as appropriate for Jaspreet Singh's interests
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 13.3, 13.4, 13.5, 13.6, 13.7_

- [ ] 10. Checkpoint - Verify data layer updates
  - Ensure all tests pass, ask the user if questions arise.
  - Run `pnpm check-types` to verify TypeScript type safety (note: some errors may exist until Phase 3 content cleanup is complete)
  - Run `pnpm lint` to check code quality
  - Verify all data files compile without errors
  - Review `src/features/portfolio/data/github-contributions.ts` and update GITHUB_USERNAME reference or disable if not using
  - _Requirements: 14.1, 14.2, 14.3_

### Phase 3: Content Layer Cleanup

- [ ] 11. Remove original blog posts and documentation
  - Identify and remove all blog post MDX files authored by original author in `src/features/doc/content/`
  - Keep only component documentation if registry is being maintained
  - Update `src/features/doc/content/welcome.mdx` with Jaspreet Singh's information
  - Remove references to "chanhdai.com", original GitHub repo links, and original author's branding
  - Update title, description, and image references in welcome.mdx
  - Update any other MDX files that reference the original author
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

- [ ] 12. Update content data layer
  - Review `src/features/doc/data/documents.ts` for any author-specific references
  - Update document metadata to reflect Jaspreet Singh's content
  - Ensure `getAllDocs`, `getDocBySlug`, `getDocsByCategory` functions work correctly
  - Update RSS feed generation to reflect content changes
  - _Requirements: 8.8_

### Phase 4: Asset Layer Cleanup

- [ ] 13. Remove unused visual assets
  - Remove unused avatar images of the original author from `public/` directory
  - Remove company logos not associated with Jaspreet Singh's employers
  - Remove project logos for projects not belonging to Jaspreet Singh
  - Remove sponsor logos and branding from `public/` directory
  - Update favicon references to neutral or Jaspreet Singh-specific branding
  - Remove Open Graph images containing original author's content
  - Use placeholder images or generic professional imagery
  - Update or remove references to "https://assets.chanhdai.com" URLs in registry examples and components
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 11.1_

- [ ] 14. Clean up unused registry assets and examples
  - Review `public/r/` directory for unused JSON registry files
  - Remove JSON files for components that have been removed
  - Preserve registry functionality for components that remain
  - Update `src/registry/index.ts` to change registry name from "ncdai" to appropriate value
  - Update registry homepage URL from "https://chanhdai.com/components" to appropriate value
  - Review and update registry examples in `src/registry/examples/` that contain original author's data:
    - Update GitHub username references in github-contributions demos
    - Update author names and handles in glow-card-grid demos
    - Update file paths in middle-truncation demos
    - Update repository references in github-stars demos
    - Update brand assets URLs in brand-assets-menu demos
    - Update code-block-command examples with appropriate registry name
    - Update work-experience-demo with Jaspreet Singh's experience
  - _Requirements: 11.2, 11.5_

### Phase 5: Verification and Testing

- [ ] 15. Build verification testing
  - Run `pnpm registry:build` to verify registry builds successfully
  - Run `pnpm build` to verify production build succeeds
  - Run `pnpm dev` to verify development server starts
  - Fix any build errors or warnings
  - _Requirements: 14.1, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9_

- [ ] 16. Manual testing of all pages
  - Verify user profile displays "Jaspreet Singh" throughout the website
  - Verify job title shows "Backend/Platform Engineer"
  - Verify location shows "Rajpura, Punjab, India"
  - Verify contact information is correct and properly encoded
  - Verify education shows Chitkara Institute with CGPA 9.1
  - Verify Protokol.io and Aerchain experiences are displayed correctly
  - Verify Local LLM Home Server and Trello Clone projects are displayed
  - Verify all social links are functional (GitHub, LinkedIn, Email)
  - Verify academic reference links are functional (GitLab, IEEE, IoT projects)
  - Verify navigation works correctly on desktop and mobile
  - Verify dark/light theme switching works
  - Verify responsive design works on all device sizes
  - Verify registry examples display correctly without original author's data
  - _Requirements: 1.1-1.7, 2.1-2.7, 3.1-3.9, 6.1-6.7, 10.1-10.6, 13.3-13.5, 14.4, 14.5_

- [ ] 17. SEO and metadata verification
  - Inspect page source to verify meta tags are updated
  - Verify Open Graph tags show correct name and bio
  - Verify keywords include Jaspreet Singh-related terms
  - Verify sitemap and robots.txt are generated correctly
  - Verify JSON-LD schema is updated
  - _Requirements: 5.3, 5.4, 14.7_

- [ ] 18. Content cleanup verification
  - Verify all original blog posts are removed
  - Verify original testimonials are removed
  - Verify original awards/certifications are removed
  - Verify original project logos are removed
  - Verify original avatar images are removed
  - Search codebase for any remaining references to original author (ncdai, Nguyen Chanh Dai, Chánh Đại, @iamncdai)
  - Search for remaining references to "chanhdai.com" domain and update or remove
  - Search for remaining references to "assets.chanhdai.com" URLs and update or remove
  - Verify registry examples no longer contain original author's personal data
  - _Requirements: 7.1-7.6, 8.1-8.7, 9.1-9.7, 11.1-11.6_

- [ ] 19. Checkpoint - Production readiness verification
  - Ensure all tests pass, ask the user if questions arise.
  - Verify no console errors in development mode
  - Verify analytics integration works (if configured)
  - Verify PWA installability is maintained
  - Verify vCard generation works with Jaspreet Singh's data
  - Verify email spam protection functionality
  - _Requirements: 14.6, 14.8, 14.9, 15.7, 15.8, 15.9_

### Phase 6: Documentation Updates

- [ ] 20. Update README.md
  - Update project description to reflect Jaspreet Singh's portfolio
  - Update author information
  - Remove original author's badges/links
  - Update deployment instructions if needed
  - Update development setup instructions
  - _Requirements: 14.10_

- [ ] 21. Update development documentation
  - Review `DEVELOPMENT.md` and update contributor information
  - Update `AGENTS.md` if it contains author-specific guidance
  - Update any other documentation files with author references
  - _Requirements: 14.10_

- [ ] 22. Final deployment verification
  - Deploy to staging/production environment
  - Verify website loads correctly in production
  - Verify all pages are accessible
  - Verify images and assets load correctly
  - Verify all links are functional
  - Verify SEO metadata is correct in production
  - _Requirements: 14.1-14.10_

## Testing Tasks

### Unit Tests (Optional - Marked with *)

- [ ]* 23. Write unit tests for user data validation
  - Test base64 encoding/decoding of contact information
  - Test required field validation for user profile
  - Test date format validation for experience periods
  - _Requirements: 1.4, 2.1-2.7_

- [ ]* 24. Write unit tests for data structure integrity
  - Test TypeScript interfaces match data objects
  - Test array structures for experiences, projects, skills
  - Test URL validation for social links and project URLs
  - _Requirements: 4.1-4.8, 6.1-6.7_

- [ ]* 25. Write unit tests for content data layer
  - Test document retrieval functions
  - Test category filtering
  - Test RSS feed generation
  - _Requirements: 8.1-8.8_

### Integration Tests (Optional - Marked with *)

- [ ]* 26. Write integration tests for page rendering
  - Test homepage renders with correct user data
  - Test experience page renders all work history
  - Test projects page displays all projects with correct details
  - Test navigation works correctly between pages
  - _Requirements: 1.1-1.7, 2.1-2.7, 3.1-3.9, 10.1-10.6_

- [ ]* 27. Write integration tests for responsive design
  - Test layout on mobile, tablet, and desktop breakpoints
  - Test navigation menu behavior on different screen sizes
  - Test image responsiveness and loading
  - _Requirements: 14.4, 14.5_

- [ ]* 28. Write integration tests for theme switching
  - Test dark/light theme toggle functionality
  - Test theme persistence across page navigation
  - Test theme-appropriate styling for all components
  - _Requirements: 14.5_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP implementation
- Each task references specific requirements for traceability (e.g., _Requirements: 1.1, 1.2_)
- Checkpoints ensure incremental validation and catch issues early
- The implementation follows the 6-phase approach from the design document:
  1. Configuration Layer Updates
  2. Data Layer Replacement  
  3. Content Layer Cleanup
  4. Asset Layer Cleanup
  5. Verification and Testing
  6. Documentation Updates
- All 15 requirements from the requirements document are covered across the tasks
- The resume.md file provides source data for Jaspreet Singh's professional information
- TypeScript strict mode ensures data integrity throughout the implementation
- Build verification tasks (15, 19, 22) ensure production readiness at each major phase

## Implementation Guidelines

1. **Incremental Approach**: Complete each phase before moving to the next
2. **Data Integrity**: Use TypeScript interfaces from the design document as reference
3. **Testing First**: Run verification tasks after each major data update
4. **Cleanup Thoroughness**: Remove all traces of original template content
5. **Production Focus**: Ensure each change maintains build and deployment capability

## Success Criteria

- All 15 requirements are fully implemented
- Website builds successfully without errors
- All pages render correctly with Jaspreet Singh's data
- No references to original author remain in code or content
- SEO metadata is correctly updated
- Website is production-ready and deployable