require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game')
require_relative('../card')

class TestPetShop < Minitest::Test

  def setup
    @game1 = CardGame.new()
    @card1 = Card.new("Diamonds", 3)
    @card2 = Card.new("Hearts", 1)
    @card3 = Card.new("Spades", 8)

    @cards = [@card1, @card2, @card3]
  end

  def test_check_for_ace
    ace = @game1.checkforAce(@card2)
    assert_equal(true, ace)
  end

  def test_highest_card
    highest = @game1.highest_card(@card1, @card2)
    assert_equal(@card1, highest)
  end

  def test_cards_total
    total_cards = CardGame.cards_total(@cards)
    assert_equal("You have a total of 3", total_cards)
  end

end
