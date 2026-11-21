==============================================================
  EMON HASSAN PERSONAL WEBSITE  -  KONTA KI, KOTHAY EDIT KORBEN
==============================================================

FILE LIST
---------
index.html     Page er structure. Edit korar dorkar nai.
style.css      Design (rong, font, layout). Edit korar dorkar nai.
script.js      Logic (search, dark mode, animation). Edit korar dorkar nai.
content.js     *** APNAR SHOB LEKHA EKHANE. Shudhu ei file edit korben. ***
assets/        Photo ar CV ekhane rakhben.
.nojekyll      GitHub Pages er jonno, delete korben na.

ASSETS FOLDER (ei duita file ekhane rakhte hobe)
-------------------------------------------------
assets/profile.jpg           Apnar photo (square hole bhalo, 600x600 px). Na dile "EH" initials dekhabe.
assets/Emon_Hassan_CV.pdf    Apnar CV.
PRIVACY: CV PDF te apnar phone number, Date of Birth ar referee der phone
ache. Public site e dewar age ekta "public version" banan jate eigulo na thake.

CONTENT.JS E KON SECTION E KI
-----------------------------
SECTION 1   PERSONAL INFO     Nam, role, location, email, badge, photo/CV path
SECTION 2   LINKS             Google Scholar, ORCID, LinkedIn, ResearchGate
SECTION 3   ABOUT             "Hi, I am Emon" er paragraph
SECTION 4   EDUCATION         MS, BSc (notun degree add kora jay)
SECTION 5   EXPERIENCE        Research assistant job ar project
SECTION 6   INTERESTS         Research interests card
SECTION 7   PUBLICATIONS      Paper list (notun paper add korte sheikhane instruction ache)
SECTION 8   CONFERENCES       Talk / poster list
SECTION 9   SKILLS            Software ar programming skill
SECTION 10  CONTACT + FOOTER  Contact lekha ar footer

EDIT KORAR NIYOM
----------------
1. Shudhu "double quote" er bhitore lekha change korun.
2. Prottek line er shesh er comma (,) ar bracket [ ] { } muchben na.
3. Formula normal vabe likhun (Hf5Si3), site nijei subscript banabe.
4. Notun paper/talk add korte ager ta copy kore ekdom upore paste korun.
5. Kono vul hole site blank hoy. Tokhon browser e F12 > Console dekhun,
   ba edit ta undo korun.

LOCAL E DEKHTE
--------------
index.html e double click korlei browser e khule jabe.

GITHUB E UPLOAD
---------------
1. Repo banan: yourusername.github.io (Public).
2. Ei folder er SHOB file (folder er bhitorer file gulo, folder nije na)
   upload korun. index.html jeno repo er sobar upore thake.
   Web e: repo > Add file > Upload files > shob drag korun > Commit.
   Terminal e:
       git init
       git add .
       git commit -m "Initial website"
       git branch -M main
       git remote add origin https://github.com/yourusername/yourusername.github.io.git
       git push -u origin main
3. Repo > Settings > Pages > Source: "Deploy from a branch" > main / (root) > Save.
4. 1-2 minute pore https://yourusername.github.io live.

PORE UPDATE KORTE
-----------------
content.js edit kore save korun, tarpor:
       git add .
       git commit -m "Update content"
       git push
Web e hole GitHub e content.js khule pencil icon e click kore edit > Commit.

AR EKTA JINIS
-------------
index.html er <head> e meta description ar Open Graph text ache (Google
search e ja dekhay). Chaile oi duita line apnar moto kore change korben.
