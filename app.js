
/* const section = document.getElementById('container')
const form = document.getElementById('form')
const submitForm = document.getElementById('submit') 
const plusForm = document.getElementById('plusForm')
 */
const table = document.getElementById("table")

const tableHeader = document.createElement("tr")
table.appendChild(tableHeader)

const th1 = document.createElement("th")
tableHeader.appendChild(th1)
th1.textContent = "Marks"

const th2 = document.createElement("th")
tableHeader.appendChild(th2)
th2.textContent = "Max"

function Grade(mark, max) {
    this.mark = mark
    this.max = max 
    this.total = 0

    Grade.all.push(this)
}

Grade.all = [] ;
console.log(Grade.all)



const form = document.createElement("form")
document.body.appendChild(form)


/* const form = document.createElement("form")
document.body.appendChild(form)
 */
const label1 = document.createElement("label") 
label1.setAttribute("for","mark")
form.appendChild(label1)
label1.textContent = "Your Mark"

const input1 = document.createElement("input")
input1.setAttribute("id","mark")
input1.setAttribute("type","number")
label1.appendChild(input1)

const label2 = document.createElement("label")
label2.setAttribute("for","maxMark")
form.appendChild(label2)
label2.textContent = "Max Mark"

const select = document.createElement("select")
select.setAttribute("id","maxMark")
select.setAttribute("name","maxMark")
form.appendChild(select)

let options = ["100", "200", "300"]
for (let i = 0; i<options.length; i++) {
    const option = document.createElement("option")
    option.setAttribute("value",options[i])
    select.appendChild(option)
    option.textContent = options[i]
}


/* const plusForm = document.createElement("button")
plusForm.setAttribute("id","plusForm")
form.appendChild(plusForm)
plusForm.textContent = "PLUS"
 */

/* const plusForm = document.createElement("button")
plusForm.setAttribute("id","plusForm")
form.appendChild(plusForm)
plusForm.textContent = "PLUS"
 */






 



Grade.prototype.render = function() {

    
    
    for (let i = 0; i<Grade.all.length; i++) {
/*         table.removeChild(table.lastElementChild)
 */     if(i>0) {
             table.removeChild(table.lastElementChild)
         }
        const rawEl = document.createElement("tr")
        table.appendChild(rawEl)
    
        const td1 = document.createElement("td")
        rawEl.appendChild(td1)
        td1.textContent = Grade.all[i].mark
        this.total+=Grade.all[i].mark
        
        const td2 = document.createElement("td")
        rawEl.appendChild(td2)
        td2.textContent = Grade.all[i].max

    }

}


function handle(event) {
    event.preventDefault();

    const mark = document.getElementById("mark").value;
    const max = document.getElementById("maxMark").value;
    console.log(max)

    let newGrade = new Grade(mark, max)
    newGrade.render()

}

const view = document.createElement("input")
view.setAttribute("id","view")
view.setAttribute("type","submit")
form.appendChild(view)



form.addEventListener("submit", function(event) {
    event.preventDefault();

    const mark = JSON.parse(document.getElementById("mark").value) 
    const max = document.getElementById("maxMark").value;
    console.log(max)
    console.log(mark)
    
    let newGrade = new Grade(mark, max)
    newGrade.render()

})



