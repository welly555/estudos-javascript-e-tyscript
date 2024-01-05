const fs = require('fs').promises
const path = require('path')

async function readdir(rootDit) {
    rootDit = rootDit || path.resolve(__dirname)
    const files = await fs.readdir(rootDit)

    walk(files,rootDit)
}

async function walk(files,rootDit){
    for (let file of files){
        const fileFullPath = path.resolve(rootDit,file)
        const stats = await fs.stat(fileFullPath)

        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        }
        console.log(file, stats.isDirectory())
    }
}

readdir('C:/Users/Welly/OneDrive/Documentos/curso_javascript_e_typescript')