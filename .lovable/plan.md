

## Hierarchical Navigation with Services Dropdown

### What changes
Convert the "Services" nav link into a hover dropdown that lists all 8 service lines. Currently only Mold Remediation has a dedicated page, so only that item will be a clickable link -- the rest will scroll to the services section on the homepage. On mobile, the Services item becomes an expandable/collapsible list.

### Implementation steps

1. **Update `Navbar.tsx` -- Desktop dropdown**
   - Replace the plain "Services" anchor with a hover-triggered dropdown container (pure CSS/Tailwind `group` + `group-hover` pattern, no extra dependencies needed).
   - List all 8 services. "Mold Testing & Remediation" links to `/services/mold-remediation`. Others scroll to `#services` on the homepage.
   - Dropdown styled with white background, shadow, rounded corners, matching the existing design language.

2. **Update `Navbar.tsx` -- Mobile collapsible**
   - In the mobile menu, replace the "Services" link with a tap-to-expand section using local state.
   - Show/hide the sub-links with a chevron indicator and smooth animation via framer-motion.

3. **Styling details**
   - Dropdown appears on hover with a small fade-in transition.
   - Each item shows the service name in the `font-display` uppercase style.
   - Active/current page highlighted with `text-secondary`.
   - Small delay on mouse-leave to prevent accidental close.

