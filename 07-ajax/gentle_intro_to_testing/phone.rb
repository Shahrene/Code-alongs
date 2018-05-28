
class Phone

  def initialize(number)
    @number = number.gsub(/[^0-9]/, "")
    @invalid_number = "0000000000"

  end

  def number

    clean_number = @number
    if clean_number.length == 11 && clean_number[0] == "1"
      return clean_number[1..10]
    elsif clean_number.length == 11 && clean_number[0] == "2"
      return @invalid_number
    elsif clean_number.length == 9
      return @invalid_number
    end
  return clean_number
  end

  def area_code
    return @number[0..2]
  end

  def to_s
    return "(#{@number[0..2]}) #{@number[3..5]}-#{@number[6..10]}"
  end

end
