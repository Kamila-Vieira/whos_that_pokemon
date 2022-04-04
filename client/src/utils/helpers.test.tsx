import "@testing-library/react";
import pokemonsList from "../mocks/pokemonsList";
import helpers from "./helpers";

test("should generate random numbers from 1 to max", () => {
  const max = 10;
  const generatedNumber = helpers.generateRandomNumber(max);
  expect(generatedNumber).toBeLessThan(11);
  expect(generatedNumber).toBeGreaterThan(0);
});

test("should field height contain number", () => {
  const field = pokemonsList[0].height;
  const testField = /[0-9]/.test(field);
  expect(testField).toBeTruthy();
});

test("should field weight contain number", () => {
  const field = pokemonsList[0].weight;
  const testField = /[0-9]/.test(field);
  expect(testField).toBeTruthy();
});

test("should fields height be lower", () => {
  const firstField = helpers.getNumber(pokemonsList[0].height);
  const secondField = helpers.getNumber(pokemonsList[1].height);
  expect(firstField).toBeLessThan(secondField);
});

test("should fields height be higher", () => {
  const firstField = helpers.getNumber(pokemonsList[0].height);
  const secondField = helpers.getNumber(pokemonsList[1].height);
  expect(secondField).toBeGreaterThan(firstField);
});

test("should fields weight be lower", () => {
  const firstField = helpers.getNumber(pokemonsList[0].weight);
  const secondField = helpers.getNumber(pokemonsList[1].weight);
  expect(firstField).toBeLessThan(secondField);
});

test("should fields weight be higher", () => {
  const firstField = helpers.getNumber(pokemonsList[0].weight);
  const secondField = helpers.getNumber(pokemonsList[1].weight);
  expect(secondField).toBeGreaterThan(firstField);
});
