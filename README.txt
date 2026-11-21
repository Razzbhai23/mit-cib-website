MIT CIB WEBSITE — WINDOWS QUICK START
=====================================

CONTENTS
- index.html      Main public website
- styles.css      Dark blue responsive design
- script.js       Language switch, mobile menu and safe demo forms
- privacy.html    Starter privacy policy

RUN ON WINDOWS
1. Download and extract mit-cib-website.zip.
2. Open the extracted folder.
3. Double-click index.html.
4. It opens in your browser. No Node.js or installation is required.
5. Click the नेपाली button to switch between English and Nepali.
6. Test the Report a Scam and Contact forms. They show a preview only.

EDIT THE WEBSITE
- Right-click index.html and choose Open with > Visual Studio Code (if installed).
- Change page text in index.html.
- Change colors and layout in styles.css.
- Change interactive behavior in script.js.
- Save the file and refresh your browser.

IMPORTANT FORM LIMITATION
This is a static front-end website. The forms do not transmit, email, or store submissions.
Do not ask visitors to submit passwords, OTPs, PINs, card numbers, recovery codes or identity documents.
Before accepting real reports, build a secure backend, publish verified contact information,
create a data retention/deletion process, add spam protection and obtain legal/privacy review.

SAFE ADMIN ARCHITECTURE FOR A FUTURE VERSION
Do not put an admin password in HTML or JavaScript. Anything shipped to a browser can be inspected.
When you are ready for an admin panel:
1. Use a backend such as Node.js + Express.
2. Store users and submissions in a server-side database.
3. Hash passwords with Argon2id or bcrypt; never store plaintext passwords.
4. Use secure, HttpOnly, SameSite cookies and HTTPS.
5. Require MFA for administrator accounts.
6. Add role-based access, rate limiting, CSRF protection and audit logs.
7. Validate and limit uploads; initially, avoid file uploads entirely.
8. Restrict access to reports to authorized staff only.
9. Encrypt backups and define deletion/retention schedules.
10. Never impersonate Nepal Police or describe this private site as an official complaint portal.

IDENTITY / LEGAL NOTICE
MIT CIB is a private cybersecurity awareness initiative, not Nepal Police,
the Central Investigation Bureau, the Cyber Bureau or a government agency.
It has no police powers and cannot arrest, compel access, or receive official police complaints.
Check business-name availability and obtain Nepal-specific legal/tax advice before operating
as a registered business or offering paid services.

OFFICIAL CYBERCRIME REPORTING
For official reporting, direct users to Nepal Police Cyber Bureau:
https://cyberbureau.nepalpolice.gov.np/
