import React from 'react';
import Counter from '../Counter';
import { fireEvent, render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId

beforeEach(() => {
    const component = render(<Counter />)
    getByTestId = component.getByTestId
})

test('render counter with correct value', () => {
    const headerEl = getByTestId("header")

    expect(headerEl.textContent).toBe("Counter")
})

test('counter initially starts at 0', () => {
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test('input contains initial value of 1', () => {

    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test('add button renders with + sign', () => {

    const addBtn = getByTestId("add-btn")

    expect(addBtn.textContent).toBe("+")
})

test('add button renders with - sign', () => {

    const subtractBtn = getByTestId("subtract-btn")

    expect(subtractBtn.textContent).toBe("-")
})

test('change value of input work correctly', () => {

    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: 5
        }
    })

    expect(inputEl.value).toBe("5")
})

test("clicking on plus button adds 1 to counter", () => {

    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("1")
})

test("clicking on plus button subtract 1 to counter", () => {

    const subtractBtnEl = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(subtractBtnEl)
    expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on add button works correctly", () => {

    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subtract button works correctly", () => {

    const subBtnEl = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(subBtnEl)
    expect(counterEl.textContent).toBe("-5")
})

test("adding and then subtracting leads to the correct counter number", () => {

    const subBtnEl = getByTestId("subtract-btn")
    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)
    expect(counterEl.textContent).toBe("20")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(addBtnEl)
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)
    expect(counterEl.textContent).toBe("15")
})

test("counter contains correct className", () => {

    const subBtnEl = getByTestId("subtract-btn")
    const addBtnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")
    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })
    
    fireEvent.click(addBtnEl)
    expect(counterEl.className).toBe("")
    fireEvent.click(addBtnEl)
    expect(counterEl.className).toBe("green")
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)
    expect(counterEl.className).toBe("")
    fireEvent.click(subBtnEl)
    fireEvent.click(subBtnEl)
    expect(counterEl.className).toBe("red")
})
