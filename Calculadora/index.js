class Calculadora {
    
    constructor(expressao=[], expressaoString = '', display= '', resultado= 0) {
        this.expressao = expressao
        this.expressaoString = expressaoString
        this.resultado = resultado
        this.display = display
        // this.keyOn = document.querySelector('body')
        // this.keys = {
        //     '1':'1',
        //     '2':'2',
        //     '3':'3',
        //     '4':'4',
        //     '5':'5',
        //     '6':'6',
        //     '7':'7',
        //     '8':'8',
        //     '9':'9',
        //     '0':'0',
        //     enter: 'Enter',
        //     backspace: 'Backspace'
        // }
    }

    // Codigo a ser implementado posteriormente
    // Keyboard(){
    //     this.keyOn.onkeyup = (event) => {
    //         console.log(event.key)
    //         if (event.key == this.keys.event.key){
    //             this.AddNumber(event.key)
    //         }
    //     }
    // }
     

        

    AddNumber(valor) {
            this.expressao.push(valor)
            this.display += valor
            document.getElementById('display').innerHTML = this.display
        }

    Calcular( argumento=this.expressao) {
        for (let i=0;i < argumento.length; i++) {
            this.expressaoString += argumento[i]
            this.display += argumento[i]
        }
            this.resultado = eval(String(this.expressaoString))
            if (this.resultado === undefined) {
                document.getElementById('display').innerHTML = 0
            }
            else {
                document.getElementById('display').innerHTML = this.resultado;
            }
            this.Clear();
            }


    Clear(foiPeloBotao=false) {
        this.expressao = []
        this.expressaoString = ''
        this.resultado = ''
        this.display = ''
        if (foiPeloBotao){
            document.getElementById('display').innerHTML = 0
        }
    }
}
    
App = new Calculadora