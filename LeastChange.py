# GLOBALS

possible_values = [
  10000,
  5000,
  2000,
  1000,
  500,
  200,
  100,
  25,
  10,
  5,
  1
]

possible_string = [
  "one hundred dollar bill",
  "fifty dollar bill",
  "twenty dollar bill",
  "ten dollar bill",
  "five dollar bill",
  "toonie",
  "loonie",
  "quarter",
  "dime",
  "nickle",
  "penny"
]

def main():
  user_input = None
  first_visit = True
  while user_input != 'quit' and user_input != 'Q' and user_input != 'q':
    if first_visit:
      user_input = input("Welcome to Least Change, enter the $ amount in cents you require in change - ")
      first_visit = False
    else:
      user_input = input("Enter the $ amount in cents you require in change - ")

    input_amount = 0
    if user_input != 'quit' and user_input != 'Q' and user_input != 'q':
      try:
        input_amount = int(user_input)
      except ValueError:
        raise InvalidInput("Input must be an integer, the number of cents required in change.\n")

      calculate_change(input_amount)

  exit()

def calculate_change(amount):
  place_in_array = 0
  number_of_current_value = 0
  change_strings = []
  while amount > 0 and len(possible_values) > place_in_array:
    if amount < possible_values[place_in_array]:
      place_in_array = place_in_array + 1
    else:
      while amount - possible_values[place_in_array] >= 0:
        amount = amount - possible_values[place_in_array]
        number_of_current_value = number_of_current_value + 1
      string_returned = change_as_string(place_in_array, number_of_current_value)
      number_of_current_value = 0
      change_strings.append(string_returned)

  output_change_result(change_strings)

def output_change_result(change_strings):
  change_strings_count = 0
  total_change_required = ""
  if len(change_strings) == 1:
    print(change_strings[0])
  else:
    for string in change_strings:
      change_strings_count = change_strings_count + 1
      if len(change_strings) != change_strings_count:
        total_change_required = total_change_required + string + ", "
      else:
          total_change_required = total_change_required + string

    print("\nChange required - " + total_change_required + "\n")

def change_as_string(place_in_array, number_of_current_value):
  current_string = str(number_of_current_value) + " " + possible_string[place_in_array]
  if number_of_current_value > 1:
    return current_string + "s"
  return current_string


class InvalidInput(Exception):
  def __init__(self, msg):
    super(InvalidInput, self).__init__(msg)

main()
