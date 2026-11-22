import {copyFile, mkdir} from 'node:fs/promises';
const routes = ['about','works','services','photography','contact','works/eleven-motors','works/elias-jewellers','works/endurance-and-beyond','works/pearl-mara'];
for (const route of routes) {await mkdir(`dist/${route}`, {recursive:true}); await copyFile('dist/index.html', `dist/${route}/index.html`);}
await copyFile('dist/index.html','dist/404.html');
