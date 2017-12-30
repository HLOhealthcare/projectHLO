


WORK MANAGER - LIBRARIES, PLUGINS, FRAMEWORKS etc.

Install bower.json dependencies by typing 'bower install' in the command line. 
Dependencies include:
• jquery 3.2.1
• slideout.js 0.0.2
• components-font-awesome 4.7.0



libraries and plugins not included are:
• animate.css
    • https://github.com/daneden/animate.css/
    • install with bower
        • bower install animate.css --save
    • install with npm
        • npm install animate.css --save


You may need to change your file path in the html head.





############################################


GIT DEVELOPMENT

view link or continue to read for development description
http://nvie.com/posts/a-successful-git-branching-model/



two permanent branches (infinite lifetime)
master
only push to master when production of 'develop' branch is ready.
develop
work in progress branch


supporting branches (limited lifetime)
feature branches
may branch off from:
develop
must merge back into:
develop
anything except master, develop, release-..., hotfix-...
explained
used to develope new features for the upcoming or a distant future release.
exists as long as the feature is in development.
may or may not merge back into develop (depending on experiment).
Creating a feature branch
git checkout -b myfeature develop

Finishing a feature branch
git checkout develop
git merge --no-ff myfeature
--no-ff causes the merge to always create a new commit object. (avoids losing historical info about myfeature).
release branches
may branch off from:
develop
must merge back into
develop and master
branch naming conventions
release-...
explained

supports preparation of a new production release
allow for last minute perfecting of code incl minor bux fixes
only branch off a new release branch from 'develop' branch when develop (almost) reflects the desired state of the new release.
all features targeted at future relese musts wait until after the release branch is branched off. 
release branches will only receive a version number  at the start of the release branch. 
give release branch reflecting the version number.
bug fixes may be applied to this branch
large new features are strictly prohibited.
finishing a release branch
merge with master
git checkout master
git merge --no-ff release-1.2
git tag -a 1.2
merge with develop
git checkout develop
git merge --no-ff release-1.2
hotfix branches
may branch off from:
master
must merge back into 
developer and master

branch naming convention:
hotfix-...
like release branches in that they are also meant to prepare for a new production release (albeit unplanned).
They arise from the necessity to act immediately upon an undesired state of a live production version. 
When a critical bug in a production version must be resolved immediately, a hotfix branch may be branched off from the corresponding tag on the master branch.

branching off
git checkout -b hotfix-1.2.1 master
git commit -a -m "Bumped version number to 1.2.1"
Finishing a hotfix branch
merge back into master
git checkout master
git merge --no-ff hotfix-1.2.1
bump/add version
git tag -a 1.2.1
merge into develop 
git checkout develop
git merge --no-ff hotfix-1.2.1

ONE EXCEPTION
When a release branch currently exists, the hotfix chagnes need to be merged into that release branch instead of devleop branch.
When finish, remove the temporary hotfix branch:
git push origin --delete hotfix-1.2.1
delete remote
git branch -d hotfix-1.2.1
delete local







Version Tagging

beta
<1.0
major
1.0
major features like complete redesigning
production worthy
minor
1.2
minor new features
production worth
maintenance
1.2.1
changes that will be added to the next minor development. 
non-production worthy
Build
1.2.1.1
only to guarantee the code was used to create the released application
changes that will be added to maintenance. 
non-production worthy


























