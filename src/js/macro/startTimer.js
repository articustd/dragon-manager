import { addUpdate } from "@controller/gameloop"

Macro.add('startTimer', {
    skipArgs: false,
    handler: function () {
        let $btn = $('<button/>').wiki(`Test Add Update`)
        
        $btn.click(()=>{
            addUpdate(testUpdate)
        })

        $btn.appendTo(this.output)
    }
})

function testUpdate() {
    console.log(`Test Update`)
}