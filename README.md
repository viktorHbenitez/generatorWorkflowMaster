# generatorWorkflowMaster
workflow master para la generacion de web app

workflow

node - npm - bower - git --version
bower init genera bower.json

install dependence bower install jquery angular bootstrap bootstrap-sass --save
bower list verificar las dependencias actualizados(beta) disponibles bower unistall (dependencia) --save (la elimina de del archivo bower.json) bower list --paths (dependencias instaladas bower.json)



USO DE GIT (ACTUALIZAR REPOSIROTIO REMOTO Y TRABAJO LOCAL)

1. Creacion de repositorio remoto
	git remote add origin [repo]
2. Actualizar contenido subido al repositorio remoto con el local
	git fetch origin
3. Fusion de la colaboracion remota con el repositorio local
	git merge origin/master

** En desarrollo**
git fetch origin
git merge origin/master

1. Guardar en local
	git add .
	git commit  -m "guardar commit"

2.  subir al repositorio remoto
git fetch origin
git merge origin/master

git push origin master			