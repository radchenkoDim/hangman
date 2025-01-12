import random
import os

from words import words_list_ua, words_list_en

RESET = "\033[0m"
RED = "\033[31m"
GREEN = "\033[32m"
BLUE = "\033[34m"
YELLOW = "\033[33m"

alfabet_ua = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'
alfabet_en = 'abcdefghijklmnopqrstuvwxyz'


def clear_console() -> None:
    os.system('cls' if os.name == 'nt' else 'clear')


def print_alfabet(alfabet: list, corect_letters: list, not_corect_letters: list) -> None:
    for i in alfabet:
        if i in corect_letters:
            print(f'{GREEN}', end='')
        elif i in not_corect_letters:
            print(f'{RED}', end='')
        print(f'{i}{RESET}', end=' ')
    print()


def hangman(words_list: str, alfabet: str) -> None:
    word = random.choice(words_list).lower()
    guess_word = ['_'] * len(word)
    
    attempts = 10
    letters = []
    corect_letters = []
    not_corect_letters = []
    message = ''

    while attempts > 0 and '_' in guess_word:
        clear_console()
        print(f'{BLUE}attempt: {attempts}{RESET}')
        print_alfabet(alfabet, corect_letters, not_corect_letters)
        print(' '.join(guess_word))

        if message:
            print(message)
            message = ''

        letter = input('Enter a letter: ').lower()

        if any([len(letter) > 1, 
                letter in letters, 
                letter not in alfabet]):
            message = f'{YELLOW}Invalid input. Try again.{RESET}'
            continue
        letters.append(letter)

        if letter in word:
            corect_letters.append(letter)

            for symbol_index, symbol in enumerate(word):
                if symbol == letter:
                    guess_word[symbol_index] = letter
                    
        else:
            attempts -= 1
            not_corect_letters.append(letter)
        
    else:
        clear_console()
        if '_' not in guess_word:
            print(f'{GREEN}You won{RESET}')
        else:
            print(f'{RED}You lose{RESET}')
        print(f'{YELLOW}word: "{word}"{RESET}')
        print('-' * 30)
        print_alfabet(alfabet, corect_letters, not_corect_letters)
        print(' '.join(guess_word))


def main():
    play_again = 'y'
    while play_again == 'y':
        hangman(words_list_ua, alfabet_ua)
        play_again = input('Do you want to play again? (y/n): ').lower()

        while play_again not in ['y', 'n']:
            print(f'{YELLOW}Invalid input. Try again.{RESET}')
            play_again = input('Do you want to play again? (y/n): ').lower()

    print(f'{GREEN}Game over{RESET}')

    # leng = input('Enter the language of the word (en/ua): ').lower()
    # if leng == 'en':
    #     hangman(words_list_en, alfabet_en)
    # elif leng == 'ua':
    #     hangman(words_list_ua, alfabet_ua)
    # else:
    #     print('Invalid input. Try again.')


if __name__ == '__main__':
    main()
