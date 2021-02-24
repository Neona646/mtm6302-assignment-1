//const $container = document.getElementById('container')

const codes = [127905, 127763, 9193, 127756, 9989]

const newElement = [] 

for (const code of codes) {
    newElement.push(`<div class="emoji">&#${code};<br>
    <code>${code}</code>
</div>`) 

    for( let i = 5; i< 30; i++) {
        newElement.push(`<div class="emoji">&#${code};<br>
    <code>${code}</code>
</div>`)
    }

}


const $container = document.getElementById("container")
$container.innerHTML = newElement.join('')