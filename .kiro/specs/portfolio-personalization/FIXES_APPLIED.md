# Fixes and Enhancements Applied to Portfolio Personalization Spec

## Date: 2026-05-10

## Summary

This document outlines all the fixes and enhancements applied to the portfolio personalization specification documents (requirements.md, design.md, and tasks.md) to ensure comprehensive coverage of the personalization effort.

## Issues Identified and Fixed

### 1. Missing Base64 Encoded Values in Tasks

**Issue**: Task 4 mentioned base64 encoding for phone and email but didn't provide the actual encoded values.

**Fix Applied**: Added explicit base64 encoded values in tasks.md:
- Phone: `Kzk0LTg4NDcwMjc5NjM=` (decodes to "+91-8847027963")
- Email: `amFzcHJlZXQuc2luZ2gudGVjaEBnbWFpbC5jb20=` (decodes to "jaspreet.singh.tech@gmail.com")

### 2. Missing Academic Reference URLs

**Issue**: Task 9 mentioned adding academic references but didn't include the specific URLs from resume.md.

**Fix Applied**: Added explicit URLs in tasks.md:
- GitLab Projects: `https://sink.jaspreet-singh-true.workers.dev/gitlab-mountblue/test1234`
- IEEE Research: `https://sink.jaspreet-singh-true.workers.dev/ieee-research/test1234`
- IoT Projects: `https://sink.jaspreet-singh-true.workers.dev/iot-projects/test1234`

### 3. Missing Timezone Information

**Issue**: User profile updates didn't specify timezone.

**Fix Applied**: Added timezone update to task 4:
- Update `timeZone` to "Asia/Kolkata"

### 4. Missing Keywords List

**Issue**: Task 4 mentioned updating keywords but didn't provide the specific list.

**Fix Applied**: Added explicit keywords list in task 4:
- "Jaspreet Singh", "Backend Engineer", "Platform Engineer", "Rajpura", "Punjab", "Stripe Integration", "Braintree Integration", "Node.js Developer", "Go Developer", "Docker", "Webpack"

### 5. Missing Bookmarks File

**Issue**: The `src/features/portfolio/data/bookmarks.tsx` file was not mentioned in any tasks.

**Fix Applied**: 
- Added bookmarks handling to task 9
- Added bookmarks section to design.md with guidance on reviewing and updating design-focused bookmarks

### 6. Missing Registry Examples Updates

**Issue**: Multiple registry example files contain original author's personal data (name, GitHub username, file paths, URLs) but were not addressed in tasks.

**Fix Applied**: 
- Enhanced task 14 to include comprehensive registry examples updates
- Added specific files to update:
  - github-contributions demos (GITHUB_USERNAME references)
  - glow-card-grid demos (author name, handle, avatar)
  - middle-truncation demos (file paths)
  - github-stars demos (repository references)
  - brand-assets-menu demos (brand URLs)
  - code-block-command demos (registry name)
  - work-experience demos (experience data)
  - slide-to-unlock demos (asset URLs)
  - haptic demos (asset URLs)

### 7. Missing Registry Metadata Updates

**Issue**: `src/registry/index.ts` contains original author's registry name and homepage URL.

**Fix Applied**:
- Added registry metadata updates to task 14
- Update registry name from "ncdai" to appropriate value
- Update homepage from "https://chanhdai.com/components" to appropriate URL

### 8. Missing Site Configuration Details

**Issue**: Task 2 didn't mention updating SITE_INFO.url and UTM_PARAMS.

**Fix Applied**: Enhanced task 2 to include:
- Update `SITE_INFO.url` from "https://chanhdai.com"
- Update `SOURCE_CODE_GITHUB_URL` to match new repository
- Update `UTM_PARAMS.utm_source` from "chanhdai.com"

### 9. Missing GitHub Contributions File

**Issue**: `src/features/portfolio/data/github-contributions.ts` references GITHUB_USERNAME but wasn't mentioned in tasks.

**Fix Applied**: Added to checkpoint task 10:
- Review and update GITHUB_USERNAME reference or disable if not using

### 10. Missing Asset URL References

**Issue**: Multiple files reference "https://assets.chanhdai.com" URLs but this wasn't comprehensively addressed.

**Fix Applied**:
- Enhanced task 13 to include updating or removing "assets.chanhdai.com" URLs
- Enhanced task 18 to search for and update these references
- Added to requirements.md (Requirement 11)
- Added comprehensive list to design.md Phase 4

### 11. Missing Welcome.mdx Specific Updates

**Issue**: Task 11 mentioned updating welcome.mdx but didn't specify what to update.

**Fix Applied**: Enhanced task 11 to include:
- Remove references to "chanhdai.com"
- Remove original GitHub repo links
- Remove original author's branding
- Update title, description, and image references

### 12. Missing Comprehensive Search Terms

**Issue**: Task 18 mentioned searching for original author references but didn't specify all search terms.

**Fix Applied**: Enhanced task 18 to include searching for:
- "ncdai"
- "Nguyen Chanh Dai"
- "Chánh Đại"
- "@iamncdai"
- "chanhdai.com" domain
- "assets.chanhdai.com" URLs
- Registry examples with original author's data

### 13. Missing Academic References Testing

**Issue**: Task 16 didn't include testing for academic reference links.

**Fix Applied**: Enhanced task 16 to include:
- Verify academic reference links are functional (GitLab, IEEE, IoT projects)

### 14. Checkpoint Timing Issue

**Issue**: Task 10 checkpoint runs type checking before content cleanup, which might cause errors.

**Fix Applied**: Added note to task 10:
- "note: some errors may exist until Phase 3 content cleanup is complete"

### 15. Missing Requirements for Registry Updates

**Issue**: Requirement 11 didn't mention registry metadata and examples updates.

**Fix Applied**: Enhanced Requirement 11 with additional acceptance criteria:
- Update registry metadata in `src/registry/index.ts`
- Update or remove registry examples with original author's data
- Update or remove "assets.chanhdai.com" URL references

## New Sections Added

### Design Document

1. **Bookmarks Component Section**: Added guidance on reviewing and updating bookmarks
2. **Registry Examples Section**: Added comprehensive list of registry examples to update in Phase 4
3. **Registry Metadata Section**: Added registry metadata updates to Phase 4

## Files Modified

1. `.kiro/specs/portfolio-personalization/requirements.md`
   - Enhanced Requirement 11 with 3 additional acceptance criteria

2. `.kiro/specs/portfolio-personalization/design.md`
   - Added Bookmarks component section
   - Enhanced Phase 4 with registry examples and metadata updates

3. `.kiro/specs/portfolio-personalization/tasks.md`
   - Enhanced Task 2 (site configuration)
   - Enhanced Task 4 (user profile with base64 values, timezone, keywords)
   - Enhanced Task 9 (awards with URLs, bookmarks)
   - Enhanced Task 10 (checkpoint with note about errors)
   - Enhanced Task 11 (welcome.mdx specifics)
   - Enhanced Task 13 (asset URLs)
   - Enhanced Task 14 (registry examples and metadata)
   - Enhanced Task 16 (academic references testing)
   - Enhanced Task 18 (comprehensive search terms)

## Verification

All changes have been applied to ensure:
- ✅ Complete data replacement coverage
- ✅ All files in `src/features/portfolio/data/` are addressed
- ✅ All registry examples with personal data are addressed
- ✅ All configuration files are addressed
- ✅ All asset URLs are addressed
- ✅ All search terms for original author are specified
- ✅ All base64 encoded values are provided
- ✅ All URLs from resume.md are included
- ✅ Comprehensive testing coverage

## Remaining Considerations

1. **Registry Decision**: The user should decide whether to:
   - Keep the registry functionality and update all examples
   - Remove the registry functionality entirely
   - Keep registry but remove examples with personal data

2. **Domain Name**: The user needs to provide:
   - New domain name for SITE_INFO.url
   - New repository name for SOURCE_CODE_GITHUB_REPO
   - New registry name if keeping registry functionality

3. **Bookmarks**: The user should review bookmarks and decide:
   - Which design-focused bookmarks to keep
   - Whether to add backend/platform engineering bookmarks

4. **Assets**: The user should provide or decide:
   - New avatar image or use placeholder
   - New Open Graph image or use placeholder
   - New favicon or use neutral branding

## Conclusion

The specification documents are now comprehensive and production-ready. All identified gaps have been addressed, and the implementation plan covers all aspects of personalizing the portfolio from the original template to Jaspreet Singh's professional profile.

The tasks are organized in a logical sequence with clear checkpoints, and all requirements are traceable through the tasks. The specification is ready for implementation.
