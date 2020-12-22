# frozen_string_literal: true

class Boat < ApplicationRecord
  belongs_to :dock, optional: true

  validates :color, :length, :name, presence: true
end
