// querySelectorAll is used instead of querySelector as we want all panels to be selected
// The variable 'panels' will be nodelist
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        /*This will remove 'active' classes from all panels before adding 'active' class to the concerned panel*/
        removeActiveClasses()
        /*This will add the 'active' class to the concerned panel*/
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}