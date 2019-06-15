### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) #the name of function should be written in lowercase with underscores to follow conventions
    if card.value = 1  # = should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be def. There should be a comma between parameters, eg. (card1, card2)
  if card1.value > card2.value  # the entire if statement (lines 19-23) should be indented once more.
    return card #should be card1
  else
    return card2
  end
end #should be indented in line with dif/def highest_card(card1, card2)
end #this end is in the wrong place, and is ending the class too early. The end of the class should be after all functions. It should be moved to line 34.

def self.cards_total(cards) #the whole function (lines 27-33) should be indented once more to align with the other functions in the class.
  total #this has not been given a value, it should be written as `total = 0` so card.value can be added to it.
  for card in cards
    total += card.value
    return "You have a total of" + total #total should be in string as sting interpolation (ie. "You have a total of #{total}")
  end
end
```
