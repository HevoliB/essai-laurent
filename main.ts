input.onButtonPressed(Button.A, function () {
    led.unplot(xposition, 0)
    xposition += 1
    led.plot(xposition, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xposition, 0)
    xposition += -1
})
let xposition = 0
basic.clearScreen()
xposition = 0
led.plot(0, 0)
