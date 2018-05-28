require 'zombie'
#require_relative
describe Zombie do
  context 'default' do
    let(:zombie) { Zombie.new }

    it 'is named Fred' do
      expect(zombie.name).to eq 'Fred'
    end

    it 'is hungry' do
      expect(zombie).to be_hungry
    end

    it 'has eaten no brains' do
      expect(zombie.brains_eaten).to be < 1
    end

    it 'counts the brains it eats' do
      expect {zombie.eat}.to change { zombie.brains_eaten }.by(1)
    end
  end

context 'with inputs' do
  let(:zombie) {Zombie.new('Sally', 3, false)}
    it 'is named Sally' do
        expect(zombie.name).to eq 'Sally'
  end

  it 'is not hungry' do
    expect(zombie).to_not be_hungry
  end
end
end
