input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() < 26) {
        basic.showString("temp baja")
    }
    if (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showString("bien")
    }
    if (input.temperature() > 34) {
        basic.showString("temp alta")
    }
})
