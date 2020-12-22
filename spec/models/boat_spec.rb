# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Boat, type: :model do
  subject do
    described_class.new(
      name: 'Boaty McBoatface',
      length: 1234,
      color: 'yellow',
      dock: Dock.new(name: 'Docky McDockface')
    )
  end

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not valid without a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without a length' do
    subject.length = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without a color' do
    subject.color = nil
    expect(subject).to_not be_valid
  end

  it 'is valid without a dock' do
    subject.dock = nil
    expect(subject).to be_valid
  end
end
