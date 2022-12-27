# lukenick.github.io

## About this repository
This repository contains live versions of prototypes. Viewing the code may spoil aspects of the prototypes, so caution is recommended before reading further.

## "Would They Rather' game
In this game two players take it in turns to answer a 'would you rather' question between two choices (ie would you rather HAVE A PET CAT or HAVE A PET LION), and then their partner has to try and guess which option they picked.

### URL Format (Version 1)
would-they-rather.html?ABBCCDDEEFFFGHIPlayer1&Player2
- A  = Version number used
- BB = Number of first list used
- CC = Number of item from first list
- DD = Number of second list used
- EE = Number of item from second list
- FFF= Current streak of correct answers
- G  = Checksum character (currently unused)
- H  = Correct answer selected by previous player
- I  = Random seed (currently used to seperate different prompts for same list)
- Player1 = The other players name; seperated with an ampersand from
- Player2 = The current players name

### Question Format
| List          | Seed= 1       | Seed= 2       | Seed= 3       | Seed= 4       | Seed= 5       | Seed= 6       | Seed= 7       | Seed= 8       | Seed= 9       | Seed= 0       |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Animals       | Unused        | Unused        | Have a pet X  | Turn into a X | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        |
| Cities        | Live in X     | Holiday in X  | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        |
| Colours       | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        | Dye your hair X| Own a X car  | Unused        | Unused        |
| Foods         | Unused        | Unused        | Unused        | Unused        | Eat X today   | Have infinite X| Unused       | Unused        | Unused        | Unused        |
| Jobs          | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        | Unused        | Become a X    | Have to fight a X|
