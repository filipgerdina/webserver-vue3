# Verison management

Modul se publisha kot npm package. Delajo se prereleas-i z dev predpono. To pomeni, da lahko imamo package potem definiran kot:
"@gef-modules/role-management": "dev"

to bo vzelo zadnjo verzijo dev-a. Kar pomeni da se mora potem dejanska verzija (patch, minor, major), delati brez spremembe kode iz zadnjega dev-a (to se mi tudi zdi smiselno), mogoče se naredi kar kot nek cicd na git-u. 

Core(Shell) se bo tudi relesal v npm package. ta bo nato lahko uporabljen v modulih, za lokalni zagon. V modulu bo poleg shell-a tudi vsi moduli, ki jih ta modul potrebuje.  



this is the issue, that prevents us from using this library:
https://github.com/module-federation/vite/issues/304
https://github.com/module-federation/vite/issues/253