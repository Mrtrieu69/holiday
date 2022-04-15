export default function Validator(formSelector) {
    const formElement = document.querySelector(formSelector)

    const validator = {
        required(value) {
            return value ? undefined : "Please enter this entry!"
        },
        email(value) {
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return regex.test(value) ? undefined : "Please enter email!"
        },
        min(min) {
            return (value) => {
                return value.length >= min ? undefined : `Please enter at least ${min} characters!`
            }
        },
        max(max) {
            return (value) => {
                return value.length <= max ? undefined : `Please enter up to ${max} characters!`
            }
        },
        check(value){
            return (password) => {
                return password === value ? undefined : `Password incorrect!`
            }
        }
    }

    let formRules = {}
    
    if(formElement){

        const inputs = [...document.querySelectorAll("[name][rules]")]

        inputs.forEach(input => {
            const rules = input.getAttribute("rules").split("|")

            for(const rule of rules){
                
                let ruleFunc = validator[rule]

                if(rule.includes(":")){
                    const ruleInfo = rule.split(":")

                    ruleFunc = validator[ruleInfo[0]](ruleInfo[1]) 
                }

                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc)
                }else{
                    formRules[input.name] = [ruleFunc]
                }
            }
        })
    }
    return formRules
}