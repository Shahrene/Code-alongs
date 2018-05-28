
class Queens

  def initialize(position_hash={white: [0, 3], black: [7, 3]})
    @positions = position_hash
    if @positions[:white] == @positions[:black]
      raise(ArgumentError)

    end
  end

  def white
    return @positions[:white]

  end

  def black
    return @positions[:black]

  end

  def to_s
    row = []
    board = []
    8.times {row << "O"}
    white_piece = "W"
    black_piece = "B"

    8.times do |index|
      board << row.clone
    end

    board[2][4] = white_piece
    board[6][6] = black_piece

    final_board = []
    board.map do |x|
      final_board << x.join(' ')
    end

    return final_board.join("\n")
  end

  def attack?
    if @positions[:white][0] == @positions[:black][0]
      true
    elsif @positions[:white][1] == @positions[:black][1]
      true
    elsif ((@positions[:white][1] - @positions[:black][1]) / (@positions[:white][0] - @positions[:black][0])).abs == 1
      true
    end
  end
end
