Portfolio company-name contrast patch

Changes:
- Makes all company names bright white and heavier.
- Adds a subtle text shadow for separation from dark cards.
- Makes large section headings brighter and more readable.

Apply from the portfolio repository root:
  .\apply_company_contrast_patch.ps1

Then rebuild:
  npm ci
  npx ng build --configuration production --base-href /portfolio/
